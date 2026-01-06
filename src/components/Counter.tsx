import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0); // <number> called generic

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(e => e + 1)}>Count+</button>
        </div>
    )
}

export default Counter