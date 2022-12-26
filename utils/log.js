const fs = require('fs')

function log(name, text) {
    fs.writeFile(`logs/${name}.txt`, text, function (err) {
        if (err) {
            return console.log(err)
        }
        console.log('The file was saved!')
    })
}

module.exports = log
