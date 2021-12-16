import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">CounterUAV</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/drones" className="nav-link">Drones</Link>
            </li>
            <li className="navbar-item">
            <Link to="/create" className="nav-link">Create Drone Data Log</Link>
            </li>
            </ul>
            </div>
        </nav>
        );
    }
}