import React from 'react';
import Project from './Project';

function Projects({ projects, deleteProject, updateProject }) {

  return (
      projects.map(project => (
        <Project key={project.id} id={project.id} project={project} project_name={project.project_name} project_description={project.project_description} project_link={project.project_link} created_at={project.created_at} updated_at={project.updated_at} status={project.status} deleteProject={deleteProject} updateProject={updateProject}/>
      ))
  )

}

export default Projects;
