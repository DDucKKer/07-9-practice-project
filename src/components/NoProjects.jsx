import noProjectsImg from '../assets/no-projects.png';
import AddProjectBtn from './AddProjectBtn';

export default function NoProjects({onCreate}){
    return(
        <section className='p-20 flex flex-col gap-3 items-center h-full text-center space-y-4 text-stone-600'>
            <img src={noProjectsImg} alt="No projects selected" className='w-24'/>
            <h2 className='text-2xl font-bold'>No Projects Selected</h2>
            <p>Select a project or get started with a new one</p>
            <AddProjectBtn onClick={onCreate}>Create new project</AddProjectBtn>
        </section>
    )
}