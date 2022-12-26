# alchemy-hardhat-example

A template/example of how to use hardhat with alchemy as a provider for deployment and interaction with a solidity smart contract.

## Requirements

-   [Alchemy account](https://www.alchemy.com/)
-   NodeJs

## Installation

```bash
npm install
```

## Setup

Create a new .env from the .env.example and add your details.

```bash
cp .env .env.example
```

## Create

Create a contract in the "/contracts" directory (See HelloWorld.sol as an example).

## Compile

```bash
npm run compile
```

## Deploy

The first argument of the script is the contract name and the arguments that follow are the deploy parameters.

```bash
// Example for deploying HelloWorld.sol

npm run deploy HelloWorld param1
```

## Interact

An example interaction can be found in scripts/interactExample.js

```bash
node scripts/interactExample.js
```

## Notes

Each deployment and interaction will generate a timestamped log which can be found in /logs/\*
