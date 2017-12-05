import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/townhomes'>Townhomes</Link></li>
            <li><Link to='/apartments'>Apartments</Link></li>
            <li><Link to='/neighborhood'>Neighborhood</Link></li>
          </ul>
        </nav>
      </header>
)

export default Header
