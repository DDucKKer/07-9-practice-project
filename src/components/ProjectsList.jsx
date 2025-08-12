import AddProjectBtn from "./AddProjectBtn"

export default function ProjectsList({ projectsList, onCreate, onSelect}) {
    return(
        <aside className="px-8 w-1/3 h-full bg-stone-800 rounded-r-2xl shadow-lg md:w-72" >
            <h2 className="my-8 pt-5 text-3xl font-bold text-stone-100">YOUR PROJECTS</h2>
            <AddProjectBtn onClick={onCreate}>+ Add Project</AddProjectBtn>
            
            {projectsList && <ul className="flex flex-col gap-4 mt-8">
                {projectsList.map((project, index) => (
                    <li 
                        onClick={() => onSelect(index)}
                        key={index}
                        className="p-3 rounded-sm text-stone-300 text-xl font-semibold hover:text-stone-100 hover:bg-stone-700 transition-colors duration-300 cursor-pointer"
                    >
                        {project.title}
                    </li>
                ))}
            </ul>}
        </aside>
    )
}