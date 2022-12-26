const fs = require('fs')

function log(name, value, type = 'txt') {
    fs.writeFile(`logs/${name}.${type}`, value, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('The file was saved!')
    })
}

module.exports = log
