export default function Square ({value, handleClick}) {
    
    return (
        <>
            <button 
                onClick={handleClick} 
                className="w-12 h-12 text-xl font-bold border border-bs-slate-500"
            > 
                {value}
            </button>
        </>
    )
}