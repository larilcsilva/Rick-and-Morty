import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import './Nav.css'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light gap-3 mb-4">
  <div className="container">
    <div className='name'>
  <h1 classNameName="fs-3 ">Rick and Morty</h1> 
  </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/Characters" className="nav-link">Characters</NavLink>
        <NavLink to="/Episodes"className="nav-link">Episodes</NavLink>
        <NavLink to="/Location" className="nav-link">Location</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar

//https://getbootstrap.com/docs/5.2/components/navbar/