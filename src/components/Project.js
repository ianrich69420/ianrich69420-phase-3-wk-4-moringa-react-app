import React from "react";

function Project({ project, id, project_name, project_description, project_link, created_at, updated_at, status, deleteProject, updateProject }) {

    const handleUpdate = (event) => {
        event.preventDefault();

        var { status } = document.querySelector(`#project${id}`)

        fetch(`http://localhost:9292/projects/${id}`, {
            method: "PATCH",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                status: status.value
            }),
        })
            .then((r) => r.json())
            .then(data => console.log(data));
        updateProject(id, status.value)
    }

    return(
    <div className='project' key={id}>
    <div className="col-4">
        <h2>{project_name}</h2>
        <section>
        <details>
            <summary>Description</summary>
            <div className='description'>
            <p>{project_description}</p>
            </div>
        </details>
        </section>
        <br/>
        <section>
        <details>
            <summary>Status</summary>
            <p>Created at: {created_at}</p>
            <p>Updated at: {updated_at}</p>
            <p>{status}</p>
        </details>
        </section>
        <br />
        <a href={project_link} target="_blank" rel="noreferrer">Project Link!</a>
        <br />
        <button className="button" onClick={() => deleteProject(project)}>Delete Project</button>
        <form onSubmit={handleUpdate} id={`project${id}`}>
            <div className="input-container">
                <label>Project Status </label>
                <input type="text" name="status" required />
            </div>
                <div className="button-container">
                <input type="submit" />
            </div>
        </form>
    </div>
    </div>
    )
}

export default Project;