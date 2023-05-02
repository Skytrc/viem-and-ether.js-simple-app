import { ethers } from "ethers";

export const mainnetProvider = new ethers.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/" + process.env.REACT_APP_TESTNET_API_KEY);

export const testnetProvider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/" + process.env.REACT_APP_MAINNET_API_KEY)

export const etherWallet = new ethers.Wallet(import.meta.env.VITE_PRIVATE_KEY).connect(testnetProvider);
