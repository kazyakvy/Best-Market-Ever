import React from 'react';

import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

function Header() {

  let profileBlock;
  let isAuthenticated = false /* check for authenticated user */;
  if (isAuthenticated) {
    profileBlock = <div className='header-profile'>Profile</div>; /* to be changed */
  } else {
    profileBlock = (
      <nav className='header-profile header-nav'>
        <NavLink to='/authentication' className='link nav-link header-link' activeClassName='link-active'>Sign in</NavLink>
        <NavLink to='/registration' className='link nav-link header-link' activeClassName='link-active'>Sign up</NavLink>
      </nav>
    );
  }

  return (
    <header className="App-header">
      <div className='header-left'>
        <Typography variant='h5'>Best Market Ever</Typography>
        <nav className='header-nav'>
          <NavLink to='/' className='link nav-link header-link' exact activeClassName='link-active'>Main</NavLink>
          <NavLink to='/users' className='link nav-link header-link' activeClassName='link-active'>Users</NavLink>
          <NavLink to='/operations' className='link nav-link header-link' exact activeClassName='link-active'>Operations</NavLink>
          <NavLink to='/operations/archive' className='link nav-link header-link' activeClassName='link-active'>Archive</NavLink>
        </nav>
      </div>
      { profileBlock }
    </header>
  );
}

export default Header;