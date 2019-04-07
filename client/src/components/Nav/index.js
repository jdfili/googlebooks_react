import React from 'react';
import { Link } from "react-router-dom";
import "./style.css";
function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Google Books</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active ml-2 mr-2">
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" style={{ textDecoration: 'none', color: 'black' }}>Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Nav