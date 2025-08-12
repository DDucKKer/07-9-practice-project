import { useRef, useImperativeHandle } from 'react'
import { createPortal } from 'react-dom'

export default function ErrorModal({ ref }){
    const dialog = useRef()

    useImperativeHandle(ref, () => {
        return {
            open(){
                dialog.current.showModal()
            },
        }
    })

    return createPortal(
        <dialog ref={dialog} className='text-center text-3xl rounded-xl bg-red-400 text-stone-300 -animate-fade-in-scale'>
            <div className='px-16 py-16'>
                <h2>Error</h2>
                <p className='text-xl'>You can't add an empty field</p>
            </div>
            <form method="dialog">
                <button className='absolute top-0 right-0 p-4' >X</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    )
}