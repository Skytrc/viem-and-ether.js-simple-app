import { ethers } from "ethers";
import { wethAbi, wethAddr } from "../block-config/abi-info";
import { mainnetProvider } from "../block-config/ethers-client-config";
import { publicClient } from "../block-config/viem-client-config"
import { useState } from "react";
import { getContract } from "viem";

interface contractProps {
    name?: string,
    symbol?: string,
    totalSupply?: number,
}

function BaseInfo(contract: contractProps) {
    return (
        <div>
            <div>name: {contract.name}</div>
            <div>symbol: {contract.symbol}</div>
            <div>totalSupply: {contract.totalSupply}</div>
        </div>
    )
}

function Lesson2() {

    const [ethersContractInfo, setEthersContractInfo] = useState<contractProps>();
    const [viemContractInfo, setViemContractInfo] = useState<contractProps>();

    const useEthers2GetContractInfo = async () => {
        const wethContract = new ethers.Contract(wethAddr, wethAbi, mainnetProvider)

        const [name, symbol, totalSupply] = await Promise.all([
            wethContract.name(),
            wethContract.symbol(),
            wethContract.totalSupply() as unknown as number,
        ]);

        setEthersContractInfo({name, symbol, totalSupply});
    }

    const useViem2GetContractInfo = async () => {
        const contract = getContract({
            address: wethAddr,
            abi: wethAbi,
            publicClient: publicClient,
        });

        const [name, symbol, totalSupply] = await Promise.all([
            contract.read.name(),
            contract.read.symbol(),
            contract.read.totalSupply() as unknown as number,
        ])

        setViemContractInfo({name, symbol, totalSupply});
    }

    return (
        <div>
            <h1>Get WETH contract base information by Viem</h1>
            <button onClick={useEthers2GetContractInfo}>Get by Viem</button>
            <BaseInfo {...ethersContractInfo} />
            <br />
            <h1>Get WETH contract base information by Ethers.js</h1>
            <BaseInfo {...viemContractInfo} />
            <button onClick={useViem2GetContractInfo}>Get by Ethers.js</button>
        </div>
    );
}

export default Lesson2;