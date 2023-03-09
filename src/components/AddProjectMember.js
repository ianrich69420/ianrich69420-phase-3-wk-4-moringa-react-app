import React, { useState } from "react";

function AddProjectMember({ projectMembers, users, projects }) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
        email: "Member email already used for project",
        project_member: "User or Project does not exist"
    };

    var { membername, email, project_name } = document.forms[0];

    const projectMemberObj = {
        membername: membername.value,
        email: email.value,
        project_name: project_name.value
    }

    const projectData = projects.find((project) => project.project_name === project_name.value)

    const userData = users.find((user) => user.email === email.value)

    const projectMemberData = projectMembers.find(projectData ? (projectMember) => projectMember.project_id === projectData.id && projectMember.email === email.value : () => {});

    console.log(projectMemberData)
    console.log(userData)
    console.log(projectData)
    console.log(users)

    if (userData && projectData && !projectMemberData) {
      fetch("http://localhost:9292/project_members", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(projectMemberObj)
          })
          .then(r => r.json())
          .then(data => console.log(data));
      setIsSubmitted(true);
    } else if (projectMemberData) {
      setErrorMessages({name: "email", message: errors.email})
    } else {
      setErrorMessages({name: "project_member", message: errors.project_member})
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
          <label>Membername </label>
          <input type="text" name="membername" required />
          {renderErrorMessage("project_member")}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Project Name </label>
          <input type="text" name="project_name" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="project-member-form">
        <div className="title">Add Project Member</div>
        {isSubmitted ? <div>Member added!</div> : renderForm}
      </div>
    </div>
  );
}

export default AddProjectMember;
