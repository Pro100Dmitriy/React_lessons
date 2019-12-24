import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="d-flex">
      <a className="navbar-brand">My Notes</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' exact className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-link">About</NavLink>
        </li>
      </ul>
    </div>
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button type="submit" className="btn btn-success">Add</button>
    </form>
  </nav>
);