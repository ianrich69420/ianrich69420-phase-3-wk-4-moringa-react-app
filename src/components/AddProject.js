import React, { useState } from "react";

function AddProject({ projects }) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
        project_name: "Project Name already used"
    };

    var { project_name, project_description, project_link, status } = document.forms[0];

    const projectObj = {
        project_name: project_name.value,
        project_description: project_description.value,
        project_link: project_link.value,
        status: status.value
    }

    const projectData = projects.find((project) => project.project_name === project_name.value);

    if (projectData && projectData.project_name === project_name.value) {
        setErrorMessages({ name: "project_name", message: errors.project_name });
    } else {
        fetch("http://localhost:9292/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectObj)
            })
            .then(r => r.json())
            .then(data => console.log(data));
        setIsSubmitted(true);
        projects.push(projectObj)
    }
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Project Name </label>
          <input type="text" name="project_name" required />
          {renderErrorMessage("project_name")}
        </div>
        <div className="input-container">
          <label>Project Description </label>
          <textarea type="text" name="project_description" required />
        </div>
        <div className="input-container">
          <label>Project Link </label>
          <input type="text" name="project_link" required />
        </div>
        <div className="input-container">
          <label>Project Status </label>
          <input type="text" name="status" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="project-form">
        <div className="title">Add Project</div>
        {isSubmitted ? <div>Project submitted, reload the page!</div> : renderForm}
      </div>
    </div>
  );
}

export default AddProject;
