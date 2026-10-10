import { useState } from "react";
import Board from "./Board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [isXNext, setIsXNext] = useState(true)

    const currentSquares = history[history.length - 1]

    const handleChange = (newSquares) => {
        const newHistory = [...history, newSquares];
        setHistory(newHistory);
        setIsXNext(!isXNext);
    } 

    return (
        <>
            <Board currentSquares={currentSquares} isXNext={isXNext} onChange={handleChange}/> 
            <div>
                <ol className="list-decimal">
                    <li>Move 1</li>
                    <li>Move 2</li>
                    <li>Move 3</li>
                </ol>
            </div>
        </>
    )
}