import { ethers } from "ethers";
import { useState } from "react";
import { PublicClient, createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

// Use ethers default provider to connect to the Ethereum network
const ALCHEMY_MAINNET_URL = 'https://eth-mainnet.g.alchemy.com/v2/oKmOQKbneVkxgHZfibs-iFhIlIAl6HDN';

function Lesson1() {

    const [ethersBlockNumber, setEthersBlockNumber] = useState<number>()
    const [viemBlockNumber, setViemBlockNumber] = useState<number>()

    const useEthers2GetBlockNumber = async () => {
        const provider = ethers.getDefaultProvider(ALCHEMY_MAINNET_URL)
        const blockNumber = await provider.getBlockNumber()
        setEthersBlockNumber(blockNumber);
    }

    const useViem2GetBlockNumber = async () => {
        const client = createPublicClient({
            chain: mainnet,
            transport: http(),
        });
        const blockNumber = await client.getBlockNumber()
        setViemBlockNumber(Number(blockNumber));
    }

    return (
        <div>
            <h1>Lesson 1: Basic operation</h1>
            <p>Use ethers.js to connect Ethereum network and get current block number</p>
            <button onClick={useEthers2GetBlockNumber}>Get block number</button>
            <div>{ethersBlockNumber}</div>
            <br />
            <div>Use Viem to connect Ethereum network and get current block number </div>
            <button onClick={useViem2GetBlockNumber}>Get block number</button>
            <div>{viemBlockNumber}</div>
        </div>
    )
}

export default Lesson1;