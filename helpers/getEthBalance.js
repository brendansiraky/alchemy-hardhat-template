const { Utils } = require('alchemy-sdk')
const { provider } = require('../config')
const { getSignerAddress } = require('./getSignerAddress')

async function getEthBalance(address) {
    // If not address is passed in, we will default to the signer address.
    const signerAddress = getSignerAddress()
    const queryAddress = address || signerAddress

    try {
        const unformattedBalance = await provider.getBalance(queryAddress, 'latest')
        const formattedBalance = Utils.formatEther(unformattedBalance)
        return formattedBalance
    } catch (error) {
        console.log(`Error from getBalance with: ${error}`)
    }
}

module.exports = { getEthBalance }