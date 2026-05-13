import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="px-4 navbar-brand" href="#">Student Management System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Students</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/teachers" className="nav-link active" aria-current="page">Teachers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/classes" className="nav-link">Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/school" className="nav-link">School</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar