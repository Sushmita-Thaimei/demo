import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand text-info">Oriflame</Link>
      <button className="navbar-toggler">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">   
          <li className="nav-item">
            <Link to="/home" className="nav-link active">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/registration" className="nav-link">Registration</Link>
          </li>          
        </ul>
      </div>
    </div>
  </nav>
  );
}
export default Home
