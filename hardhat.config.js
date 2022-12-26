require('dotenv').config()
require('@nomiclabs/hardhat-ethers')

const { API_URL, PRIVATE_KEY, NETWORK, SOLIDITY_VERSION } = process.env

module.exports = {
    solidity: SOLIDITY_VERSION,
    defaultNetwork: NETWORK,
    networks: {
        hardhat: {},
        [NETWORK]: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`],
        },
    },
}
