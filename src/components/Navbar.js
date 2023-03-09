import React from "react";
import { Link } from 'react-router-dom'

function NavBar() {
    
    return (
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/add_project">Add Project</Link>
            <Link to="/add_project_member">Add Project Member</Link>
        </nav>
    );
}

export default NavBar;