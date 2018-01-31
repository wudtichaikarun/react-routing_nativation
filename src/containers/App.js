import React from 'react';
import { Link, Router, Route } from '../utils'
import { Home, About } from '../componentes'

const AppContainer = () => (
  <div>
    <Router>
      <nav className='navbar navbar-light bg-faded'>
        <Link to='/' className='nav-brand'>Home</Link>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </nav>
      <Route path='/' component={ Home }></Route>
      <Route path='/about' component= { About }></Route>
    </Router>
  </div>
)
export default AppContainer;
