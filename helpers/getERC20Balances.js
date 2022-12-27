const { alchemyCore } = require('../config')
const { getSignerAddress } = require('./getSignerAddress')

async function getERC20Balances(address) {
    // If not address is passed in, we will default to the signer address.
    const signerAddress = getSignerAddress()
    const queryAddress = address || signerAddress

    const balances = await alchemyCore.getTokenBalances(queryAddress)

    // Remove tokens with zero balance
    const nonZeroBalances = balances.tokenBalances.filter((token) => {
        return token.tokenBalance !== "0";
    });

    let tokenData = []

    // Loop through all tokens with non-zero balance
    for (let token of nonZeroBalances) {
        // Get balance of token
        let balance = token.tokenBalance;

        // Get metadata of token
        const metadata = await alchemyCore.getTokenMetadata(token.contractAddress);

        // Compute token balance in human-readable format
        balance = balance / Math.pow(10, metadata.decimals);
        balance = balance.toFixed(2);

        tokenData.push({
            name: metadata.name,
            balance: `${balance} ${metadata.symbol}`
        })
    }

    console.log(`Token balances of ${queryAddress}`)
    console.table(tokenData)
}

getERC20Balances()

module.exports = { getERC20Balances }
