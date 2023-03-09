import React from "react";
import { Link } from 'react-router-dom'

function NavBar({ user, setUser }) {


    const navBar = () => { if (user || window.location.pathname.includes("project")) {
        return(
        <div className="container-fluid">
            <button className="button">
                <Link style={{textDecoration: "none"}}to="/projects">Projects</Link>
            </button>
            <button className="button">
                <Link style={{textDecoration: "none"}}to="/add_project">Add Project</Link>
            </button>
            <button className="button">
                <Link style={{textDecoration: "none"}}to="/add_project_member">Add Project Member</Link>
            </button>
            <button className="button">
                <Link style={{textDecoration: "none"}}to='/login' onClick={() => { window.location.pathname = "/login"; setUser(false); }}>Logout</Link>
            </button>
        </div>) 
    }   else if (!user && !window.location.pathname.includes("project")) {
        return(
        <div className="container-fluid">
            <button className="button">
                <Link style={{textDecoration: "none"}}to="/login">Login</Link>
            </button>
            <a class="navbar-brand text-light">Welcome to PM! The world's leading Project Manager!</a>
            <button className="button">
                <Link style={{textDecoration: "none"}}to="/register">Register</Link>
            </button>
        </div>)
    }}
    
    return (
        <nav className="navbar bg-dark">
            {navBar()}
        </nav>
    );
}

export default NavBar;