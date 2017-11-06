# windows-shortcut-maker

Make desktop file shortcuts for Windows easily using this module for Node.js since it is a bit hard to access Windows low level resources with the language in a more "native" way.

The main module is (for now) compatible with 64x Windows architecture. As mentioned before, the lack of straight-forward ways to access low level resources was solved using Python as a wrapper for the C++ code. The code is pretty simple and was freezed using cx_Freeze.

* This module is compatible with any Node.js project including the Electron framework.
* It is extremely straight-forward to use.

### Installation:
```
$ npm install @phtdacosta/windows-shortcut-maker --save
```

## Basic usage:
The simplest use example:
```js
const shortcutMaker = require('windows-shortcut-maker');

// It only requires a valid file for the simplest use case
const filePath = "C:\\Program Files\\GIMP 2\\bin\\gimp-2.8.exe";

// This simple function creates a "GIMP" shortcut file in the desktop
try {
    shortcutMaker.makeSync(filePath);
} catch (e) {
    console.error(e);
}
```

## Advanced usage:
For advanced use, further information can be set:
```js
const shortcutMaker = require('windows-shortcut-maker');

 // The base file path is set
const filePath = "C:\\Program Files\\GIMP 2\\bin\\gimp-2.8.exe";
// A name is given for the shortcut
const shortcutName = "GIMP 2.8 Shortcut Example";
// A description is given for the shortcut
const shortcutDesc = "It is a description example for the shortcut file!";
// Any icon file (including the base file icon) could be used for the shortcut
const shortcutIcon = "C:\\Program Files\\GIMP 2\\bin\\gimp-2.8.exe";

// Calling the synchronous function
// For now, only the synchronous function is available
try {
    shortcutMaker.makeSync(filePath, shortcutName, shortcutDesc, shortcutIcon);
} catch (e) {
    console.error(e);
}
```

## Error handling:
* As seen in the last examples, a try/catch statement is really useful as we are working with non Node.js code and it is a bit hard to track down anything.
* The most basic error message that the module will surely throw if happens is "Invalid base file" if an invalid file path is given as the first argument of the function.
