# ADB File System

You can browse the files inside the connected Android devices using VSCode!

(experimental implementation)

## Features

* file system using ADB (adbkit)
  * browse devices
  * browse directries
    * currently under /sdcard folder only.
  * read file
  * write file
  * rename file/directory
  * move file/directory
  * create file/directory
  * delete file/directory

![example](images/example1.png)

## Getting Started

* install this extension 'ADB File System'.
* press F1 key in VSCode and select 'Setup Android Device Files Workspace'.
  * if the command does not appear, try with new window by CTRL+SHIFT+N.

## Requirements

* adb (android debug bridge) must be installed on your PC. It resides on the android SDK (platform-tools).
* adb server needs to be started beforehand. command: `adb start-server`
* You need at least one android device(s) connected to your PC.
  * usually via USB cable.
  * over wifi is also possible but need to follow some adb instructions (please see documents of adb).
* target devices must have developer mode turned on, and also USB debugging enabled.

## Extension Settings

* No settings available

## Building
You need to install npm first, then type
```bash
npm install vsce
node_modules/vsce/vsce package
```
This will create a `.vsix` file that you can install in VSCode/ Codium...

## Known Issues

* Currently, only files or folders under the `/sdcard` folder are available.

## Release Notes

* see CHANGELOG


