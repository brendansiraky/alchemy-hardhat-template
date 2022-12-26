const { Utils } = require('alchemy-sdk')
const {
    provider,
    signer,
    config: { CHAIN_ID },
} = require('../config')

async function getTx(to, amount) {
    // Get the nonce which is the number of transactions executed from this wallet.
    const nonce = await provider.getTransactionCount(signer.address, 'latest')

    // Get the estimated gas cost for this transaction
    const gasLimit = await getEstimatedGasCost(to, amount, nonce)

    // Add 10 percent to the estimated gas cost just to be sure the transaction won't fail
    const gasLimitAddTenPercent = Math.floor(
        gasLimit.toString() * 1.1
    ).toString()

    return {
        to,
        value: Utils.parseEther(amount),
        gasLimit: gasLimitAddTenPercent,
        maxPriorityFeePerGas: Utils.parseUnits('5', 'gwei'),
        maxFeePerGas: Utils.parseUnits('20', 'gwei'),
        nonce: nonce,
        chainId: CHAIN_ID,
        type: 2,
    }
}

async function getEstimatedGasCost(to, amount, nonce) {
    const estimatedGasCost = await provider.estimateGas({
        to,
        send_token_amount: amount,
        nonce,
    })

    return estimatedGasCost
}

async function sendEth(to, amount) {
    try {
        const tx = await getTx(to, amount)

        const rawTransaction = await signer.signTransaction(tx)
        const transaction = await provider.sendTransaction(rawTransaction)
        console.log(transaction)
    } catch (error) {
        console.error(error)
    }
}

sendEth('0xd05f9fF8832e2b4eE8A234B5531E830368eb5C0C', '0.001')
