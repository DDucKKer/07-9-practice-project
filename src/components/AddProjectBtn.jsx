export default function AddProjectBtn({ children, ...props }) {
    
    return (
        <button 
            className="px-5 py-3 text-xl rounded-lg bg-stone-600 text-stone-400 hover:bg-stone-400 hover:text-stone-800 transition-colors duration-300 shadow-md" 
            {...props}
        >
            {children}
        </button>
    );
}