import React from 'react';
import Profile from '../assests/profile.png';
import Logo from '../assests/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav class="navbar navbar-light bg-light justify-content-between" style={{borderBottom: 'solid', borderColor: 'lightgrey', borderWidth: 'thin' }}>
    <Link to='/'><a classNam="navbar-brand"><img src={Logo} style={{height: '30px'}} alt=""/></a></Link>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search Challenges, Labs" aria-label="Search"/>
    <i class="far fa-bell fa-lg" style={{color: 'lightgrey', marginRight: '15px', marginLeft: '15px' }}></i>
    <img src={Profile} style={{borderRadius: '50%', height: '30px', margin: '10px'}} alt=""/>
  </form>
</nav>
);

export default Navbar;