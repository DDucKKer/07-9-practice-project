export default function Tasks({ ref, tasks, onAddTask, onClearTask }) {
    return (
        <>
            <h3 className="text-3xl font-bold">Tasks</h3>
            <p className="text-stone-800 pb-5">
                <input ref={ref} type="text" placeholder="Add a new task" className="text-2xl bg-stone-200 rounded-sm p-1 w-70 shadow-md mt-4 mb-2" />
                <button className="px-5 py-1 text-center text-2xl hover:text-stone-500 transition-colors duration-300" onClick={onAddTask}>Add Task</button>
            </p>
            {tasks.length === 0 ?
                <p>This project does not have any tasks yet.</p>
                :
                tasks.map((task) => (
                    <li key={task.id} className="p-5 mb-2 text-2xl text-stone-800 bg-stone-200 rounded-sm shadow-md list-none flex flex-row justify-between">
                        <p>{task.title}</p>
                        <button onClick={()=>onClearTask(task.id)}>Clear</button>
                    </li>
                ))
            }
        </>
    )
}