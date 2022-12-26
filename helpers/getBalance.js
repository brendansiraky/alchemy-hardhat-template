const { provider } = require('../config')
const { Utils } = require('alchemy-sdk')

async function getBalance(address) {
    try {
        const unformattedBalance = await provider.getBalance(address, 'latest')
        const formattedBalance = Utils.formatEther(unformattedBalance)
        return formattedBalance
    } catch (error) {
        console.log(`Error from getBalance with: ${error}`)
    }
}

module.exports = getBalance
