# windows-shortcut-maker

Native and lightweight module to make file shortcuts on Windows using Node.js

This module uses a Windows VBScript file to get native access to the operational system API responsible for making file shortcuts.

## Why this module is great?
* Although it is native, there is no need to compile anything.
* It is totally open source and uses no binary files, no external dependencies and no bizarre workarounds.
* Supports all Windows NT 4.0 (and beyond) systems.
* The module is extremely small and provides access to the entire API.

### Installation:
```
$ npm install @phtdacosta/windows-shortcut-maker --save
```

## Basic usage:
The simplest use example:
```js
const sm = require('windows-shortcut-maker')

const options = {
    'filepath': 'C:\\Program Files\\GIMP 2\\bin\\gimp-2.8.exe'
}

// It creates a "GIMP" shortcut file in the desktop
try {
    sm.makeSync(options)
} catch (error) {
    console.log(error)
}
```

## Error handling:
* As seen in the last examples, a try/catch statement is really useful as we are working with non Node.js code and it is a bit hard to track down anything.