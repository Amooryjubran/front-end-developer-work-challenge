import React from 'react';
import Profile from '../assests/profile.png';
import Logo from '../assests/logo.png'

const Navbar = () => (
    <nav class="navbar navbar-light bg-light justify-content-between" style={{borderBottom: 'solid', borderColor: 'lightgrey', borderWidth: 'thin' }}>
  <a class="navbar-brand"><img src={Logo} style={{height: '30px'}} alt=""/></a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search Challenges, Labs" aria-label="Search"/>
    <i class="far fa-bell fa-lg" style={{color: 'lightgrey', marginRight: '15px', marginLeft: '15px' }}></i>
    <img src={Profile} style={{borderRadius: '50%', height: '30px', margin: '10px'}} alt=""/>
    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
</nav>
);

export default Navbar;