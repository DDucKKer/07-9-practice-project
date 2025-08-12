import Tasks from "./Tasks";

const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
};
const formatter = new Intl.DateTimeFormat('en-GB', options)

export default function ProjectInfo({ project, ref, onSubmit, onDelete, onClearTask }) {
    const convertedDate = formatter.format(new Date(project.dueDate))

    return (
        <>
            <div className="flex flex-col gap-4 pb-4 mb-4 border-b-2">
                <div className="flex justify-between items-center  text-stone-800">
                    <h2 className="text-4xl font-bold">{project.title}</h2>
                    <button className="text-stone-800 px-6 py-2 rounded-lg hover:text-stone-500 transition-colors duration-300" onClick={onDelete}>Delete</button>
                </div>
                <p className="text-stone-500">{convertedDate}</p>
                <p className="text-stone-800 whitespace-pre-wrap">{project.description}</p>
            </div>

            <Tasks
                ref={ref}
                onAddTask={onSubmit}
                tasks={project.tasks}
                onClearTask={onClearTask}
            />

        </>
    )
}