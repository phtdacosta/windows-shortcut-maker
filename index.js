const child_process = require('child_process');
const fs = require('fs');

// Useful function to test if certain data is actaully empty
function isEmpty(value) {
    return (value == null || value.length === 0 || typeof value === typeof undefined);
}

// Used extract the file name from a given file path
function getName(path) {
    return path.split('\\').pop().split('/').pop();
}

// For now it works only in a synchronous way
// Asynchronous version of the function needs further development
exports.makeSync = function (file, name, desc, scwd, icon) {
    if (typeof file !== 'string' || fs.existsSync(file) === false) throw new Error('Invalid base file');
    if (typeof name !== 'string') name = getName(file) + ' - Shortcut';
    if (typeof desc !== 'string') desc = getName(file) + ' - Shortcut';
    if (typeof scwd !== 'string') scwd = '';
    if (typeof icon !== 'string') icon = file;
    child_process.execFileSync(__dirname + '\\exe.win-amd64-2.7\\run.exe', [file, name, desc, scwd, icon]);
}