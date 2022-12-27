const { signer } = require('../config')

function getSignerAddress() {
    return signer.address
}

module.exports = { getSignerAddress }
