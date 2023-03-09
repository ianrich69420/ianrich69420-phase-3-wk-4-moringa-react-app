import React, { useState } from "react";

function Register({ users }) {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {
        email: "Email already used"
    };

    var { username, email, password } = document.forms[0];

    const userObj = {
        username: username.value,
        email: email.value,
        password: password.value
    }

    const userData = users.find((user) => user.email === email.value);

    if (userData && userData.email === email.value) {
        setErrorMessages({ name: "email", message: errors.email });
    } else {
        fetch("http://localhost:9292/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
            })
            .then(r => r.json())
            .then(data => console.log(data));
        setIsSubmitted(true);
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
          <label>Username </label>
          <input type="text" name="username" required />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required />
          {renderErrorMessage("email")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="register-form">
        <div className="title">Register</div>
        {isSubmitted ? <div>User is successfully registered in</div> : renderForm}
      </div>
    </div>
  );
}

export default Register;
