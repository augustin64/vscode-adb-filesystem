// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { AdbFS } from './adbfilesystemprovider'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('"adb-filesystem" become active.');

    const adbfs = new AdbFS();
    context.subscriptions.push(vscode.workspace.registerFileSystemProvider('adbfs', adbfs, { isCaseSensitive: true }));
    context.subscriptions.push(vscode.commands.registerCommand('adbfs.workspaceInit', _ => {
        vscode.workspace.updateWorkspaceFolders(0, 0, { uri: vscode.Uri.parse('adbfs:/'), name: "Android Device Files" });
    }));


    const SETTING_KEY = 'adb-filesystem.basePath';

    // Listen for configuration changes
    vscode.workspace.onDidChangeConfiguration(event => {
        if (event.affectsConfiguration(SETTING_KEY)) {
            const reloadAction = 'Reload';
            vscode.window.showInformationMessage(
                `Your extension settings have changed. Please reload for the changes to take effect.`, 
                reloadAction
            ).then(action => {
                if (action === reloadAction) {
                    vscode.commands.executeCommand('workbench.action.reloadWindow');
                }
            });
        }
    });
}

// this method is called when your extension is deactivated
export function deactivate() {
    console.log('"adb-filesystem" deactivated.');
}
