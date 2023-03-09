import { useState, useEffect } from 'react';
import './App.css';
import Login from  './components/Login';
import Register from './components/Register';
import Projects from './components/Projects';

function App() {
  const [users, setUsers] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(r => r.json())
    .then(users => setUsers(users))
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/projects')
      .then(r => r.json())
      .then(projects => setProjects(projects))
  }, []);

  function deleteProject(projectToDelete) {
    fetch(`http://localhost:9292/projects/${projectToDelete.id}`, {
      method: "DELETE",
    });
    setProjects(projects.filter((project) => project.id !== projectToDelete.id))
  }

  return (
    <div>
      <Projects projects={projects} deleteProject={deleteProject} />
    </div>
  )
}

export default App;
