export default function Square ({value, handleClick}) {
    
    return (
        <>
            <button 
                onClick={handleClick} 
                className="w-12 h-12 mb-0.5 text-xl font-bold bg-slate-200 rounded-sm"
            > 
                {value}
            </button>
        </>
    )
}