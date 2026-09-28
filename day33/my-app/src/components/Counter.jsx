import { useState } from "react"

export default function Counter () {
    const [count, setCountUp] = useState(0)
    const increase = () => setCountUp(count + 1)
    console.log({count})
    return (
        <div>
            <h1 className="text-2xl font-bold">{count}</h1>
            <button 
                onClick={() => increase()}
                className="bg-amber-200 font-bold text-xl rounded-xl px-4 py-2"
            >
                Increase
            </button>
        </div>
    )
}
