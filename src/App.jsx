import { useState, useRef } from 'react';
import ProjectsList from './components/ProjectsList';
import CreateProject from './components/CreateProject';
import NoProjects from './components/NoProjects';
import ProjectInfo from './components/ProjectInfo';
import ErrorModal from './components/ErrorModal';

function App() {
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [projects, setProjects] = useState([{
    title: 'Project 1',
    description: 'Description of Project 1',
    dueDate: '2023-10-01',
    tasks: [{
      id: 0,
      title: 'eat'
    }],
  },]);

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const task = useRef();

  const dialog = useRef()

  function handleProjects() {
    if (
      [title.current.value, description.current.value, dueDate.current.value].some(val => val.trim() === '')
      // title.current.value.trim() === '' ||
      // description.current.value.trim() === '' ||
      // dueDate.current.value.trim() === ''
    ) {
      dialog.current.open()
      return
    };
    setProjects(prevProjects => [
      ...prevProjects,
      {
        title: title.current.value,
        description: description.current.value,
        dueDate: dueDate.current.value,
        tasks: [],
      }
    ]);
    setSelectedProject(undefined);
  }


  function handleTasks() {
    const newTask = task.current.value;
    if (newTask.trim() === '') {
      dialog.current.open()
      return
    };
    setProjects(prevProjects => {
      const updProjects = [...prevProjects];
      // if (!updProjects[selectedProject].tasks.includes(newTask)) 
      updProjects[selectedProject].tasks = [...updProjects[selectedProject].tasks,
      {
        id: (Math.random() * 1000).toFixed(0), 
        title: newTask
      }]
      return updProjects;
    });
    task.current.value = '';
  }
  
  function clearTask(idToDelete) {
    setProjects(prevProjects => {
      const update = [...prevProjects];
      update[selectedProject] = {
        ...update[selectedProject],
        tasks: update[selectedProject].tasks.filter(task => task.id !== idToDelete)
      }
      return update
    })
  }

  function handleCreateProject() {
    setSelectedProject(null);
  }

  function handleCancelCreateProject() {
    setSelectedProject(undefined);
  }

  function handleSelectProject(index) {
    setSelectedProject(index);
  }
  function handleDelete() {
    setSelectedProject(undefined);
    setProjects(prevProjects => {
      return prevProjects.filter((_, index) => index !== selectedProject);
    });
  };

  let content = <ProjectInfo
    project={projects[selectedProject]}
    ref={task}
    onSubmit={handleTasks}
    onDelete={handleDelete}
    onClearTask={clearTask}
  />
  if (selectedProject === undefined) {
    content = <NoProjects onCreate={handleCreateProject} />
  } else if (selectedProject === null) {
    content = <CreateProject
      onSave={handleProjects}
      onCancel={handleCancelCreateProject}
      refTitle={title}
      refDesc={description}
      refDate={dueDate}
    />
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold text-stone-800">Projects</h1>
      <div className='flex justify-left items-center h-screen'>
        <ProjectsList
          onCreate={handleCreateProject}
          projectsList={projects}
          onSelect={handleSelectProject}
        />
        <div className='w-2/3 h-full p-10 xl:pr-60 text-lg'>
          {content}

          <ErrorModal ref={dialog} />
        </div>
      </div>
    </>
  );
}

export default App;
