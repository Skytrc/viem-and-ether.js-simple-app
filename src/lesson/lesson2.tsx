
interface contractProps {
    name: string,
    symbol: string,
    totalSupply: number
}

function BaseInfo({name, symbol, totalSupply}: contractProps) {
    return (
        <div>
            <h1>name: {name}</h1>
            <h1>symbol: {symbol}</h1>
            <h1>totalSupply: {totalSupply}</h1>
        </div>
    )
}

function Lesson2() {

    return (
        <div>
            <h1>Get WETH contract base information by Viem</h1>
            <button>Get by Viem</button>
            <br />
            <h1>Get WETH contract base information by Ethers.js</h1>
            <button>Get by Ethers.js</button>
        </div>
    );
}

export default Lesson2;