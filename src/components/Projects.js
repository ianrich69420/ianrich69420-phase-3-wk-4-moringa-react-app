import React from 'react';

function Projects({ projects, deleteProject }) {

  return (
      projects.map(project => (
        <div className='project' key={project.id}>
          <div className="col-4">
              <h2>{project.project_name}</h2>
              <section>
                <details>
                  <summary>Description</summary>
                  <div className='description'>
                    <p>{project.project_description}</p>
                  </div>
                </details>
              </section>
              <br/>
              <section>
                <details>
                  <summary>Status</summary>
                  <p>Created at: {project.created_at}</p>
                  <p>Updated at: {project.updated_at}</p>
                </details>
              </section>
              <br />
              <a href={project.project_link} target="_blank" rel="noreferrer">Project Link!</a>
              <button className="button" onClick={() => deleteProject(project)}>Delete Project</button>
          </div>
        </div>
      ))
  )

}

export default Projects;
