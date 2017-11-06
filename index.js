const child_process = require('child_process');
const fs = require('fs');

function isEmpty(value) {
    return (value == null || value.length === 0 || typeof value === typeof undefined);
}

function getName(path) {
    return path.split('\\').pop().split('/').pop();
}

exports.makeSync = function (file, name, desc, icon) {
    if (typeof file !== 'string' || fs.existsSync(file)) throw new Error('Invalid base file');
    if (typeof name !== 'string') name = getName(file) + '- Shortcut';
    if (typeof desc !== 'string') desc = getName(file) + '- Shortcut';
    if (typeof icon !== 'string') icon = file;
    child_process.execFileSync(__dirname + '\\exe.win-amd64-2.7\\run.exe', [file, name, desc, icon]);
}