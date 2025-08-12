export default function Input({ label, textarea = false, ref, ...props }) {
    return(
        <>
            <label>{label}</label>
            {textarea ?
                <textarea ref={ref} {...props}/>
            :
                <input ref={ref} {...props}/>
            }
        </>
    )
}