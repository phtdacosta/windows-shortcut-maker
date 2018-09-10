const child_process = require('child_process'),
    fs = require('fs')

const isString = (variable) => {
    return (typeof variable === 'string' || Object.prototype.toString.call(variable) === '[object String]')
}

// Used extract the file name from a given file path
const getName = (path) => {
    return path.split('\\').pop().split('/').pop()
}

const makeSync = (options) => {
    if (isString(options.filepath) === false) throw new Error('Filepath is not a string')
    const rawName = getName(options.filepath).split('.')[0]
    if (fs.existsSync(options.filepath) === false) throw new Error('File does not exist')
    if (isString(options.filename) === false) options.filename = rawName
    if (isString(options.lnkArgs) === false) options.lnkArgs = ''
    if (isString(options.lnkDes) === false) options.lnkDes = rawName
    if (isString(options.lnkCwd) === false) options.lnkCwd = ''
    if (isString(options.lnkIco) === false) options.lnkIco = filepath
    if (isString(options.lnkWin) === false) options.lnkWin = 1
    if (isString(options.lnkHtk) === false) options.lnkHtk = ''
    child_process.spawnSync(
        'wscript', 
        [__dirname + '\\scripts\\lnk.vbs',
        options.filepath,
        options.filename,
        options.lnkArgs,
        options.lnkDes,
        options.lnkCwd,
        options.lnkIco,
        options.lnkWin,
        options.lnkHtk
        ]
    )
}

module.exports = {
    makeSync: makeSync
}