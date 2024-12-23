import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar({name, handleSearch, setSearchData}) {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    handleSearch(); // Call the search function
};

  return (
    <div>
      <nav onSubmit={handleSubmit} className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand brandName" style={{fontWeight:500, fontSize:'24px'}} href="#">
      {name}
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className='nav-link active' to="/">Home</NavLink>
        
        </li>
        <li className="nav-item">
          <NavLink className='nav-link active' to="/admin-panel">Admin Login</NavLink>
        
        </li>
         
 
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          onChange={(e)=>setSearchData(e.target.value)}
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}
