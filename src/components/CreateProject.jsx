import Input from "./Input";

export default function CreateProject({ onCancel, onSave, refTitle, refDesc, refDate }) {
    return (
        <>
            <div className="flex justify-end gap-4 my-4">
                <button onClick={onCancel}>Cansel</button>
                <button onClick={onSave} className="bg-stone-800 text-stone-300 px-6 py-2 rounded-lg text-lg ">Save</button>
            </div>
            <div className="flex flex-col gap-4 text-lg font-bold text-stone-600 uppercase">
                <Input ref={refTitle} label="Title" type="text"  className="bg-stone-200 rounded-sm p-1 w-full shadow-md"/>
                <Input ref={refDesc} label="Description" textarea={true} type="text" className="bg-stone-200 rounded-sm p-1 w-full shadow-md" rows="3"/>
                <Input ref={refDate} label="Due Date" type="date"  className="bg-stone-200 rounded-sm p-1 w-full shadow-md"/>
            </div>

        </>
    )
}