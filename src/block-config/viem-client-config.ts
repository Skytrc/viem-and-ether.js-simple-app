import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { mainnet, sepolia } from "viem/chains";

// DON'T UPDATE ANY SENSITIVE PARAMETERS IN GITHUB OR PUBLIC WEBSITE
const PRIVATE_KEY = privateKeyToAccount(`0x${import.meta.env.VITE_PRIVATE_KEY}`);

export const publicClient = createPublicClient({
    batch: {
        multicall: true
    },
    chain: mainnet,
    transport: http()
});

export const testClient = createPublicClient({
    batch: {
        multicall: true
    },
    chain: sepolia,
    transport: http()
});

export const localWallet = createWalletClient({
    account: PRIVATE_KEY,
    chain: sepolia,
    transport: http(),
});
