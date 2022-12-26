require('dotenv').config()
require('@nomiclabs/hardhat-ethers')

const {
    MAINNET_API_URL,
    GOERLI_API_URL,
    PRIVATE_KEY,
    NETWORK,
    SOLIDITY_VERSION,
} = process.env

// Have to do this here rather than get from the config.js because we need to directly access the process.env variables.
const API_URL = NETWORK === 'mainnet' ? MAINNET_API_URL : GOERLI_API_URL

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
