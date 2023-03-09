import { useState, useEffect } from 'react';
import './App.css';
import Login from  './components/Login';
import Register from './components/Register';
import Projects from './components/Projects';
import AddProject from './components/AddProject'
import AddProjectMember from './components/AddProjectMember';

function App() {
  const [users, setUsers] = useState([])
  const [projects, setProjects] = useState([])
  const [projectMembers, setProjectMembers] = useState([])

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

  useEffect(() => {
    fetch('http://localhost:9292/project_members')
      .then(r => r.json())
      .then(projectMembers => setProjectMembers(projectMembers))
  }, []);

  function deleteProject(projectToDelete) {
    fetch(`http://localhost:9292/projects/${projectToDelete.id}`, {
      method: "DELETE",
    });
    setProjects(projects.filter((project) => project.id !== projectToDelete.id))
  }

  return (
    <div>
      <AddProjectMember projectMembers={projectMembers} users={users} projects={projects} />
    </div>
  )
}

export default App;
