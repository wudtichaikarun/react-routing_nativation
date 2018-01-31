import React from 'react';
import { Link, Router } from '../utils'

const AppContainer = () => (
  <Router>
    <nav className='navbar navbar-light bg-faded'>
      <Link to='/' className='nav-brand'>Home</Link>
      <ul className='navbar-nav mr-auto'>
        <li className='nav-item active'>
          <Link to='about' className='nav-link'>About</Link>
        </li>
      </ul>
    </nav>
  </Router>
)
export default AppContainer;
