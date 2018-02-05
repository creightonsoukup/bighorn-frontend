import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      mobile: true
    }
  }
  render() {
    return (
        <header>
          <nav className={this.state.navClasses}>
            <Link to='/'><img className='logo' src={require('../assets/bighorn-logo.png')}/></Link>
            <div className='nav-items'>
              <ul className='nav-links'>
                <li><Link to='/townhomes'>{'TOWNHOMES'}</Link></li>
                <li><Link to='/'>{"APARTMENTS"}</Link></li>
                <li><Link to='/'>{"NEIGHBORHOOD"}</Link></li>
              </ul>
              <div className="nav-menu">
                <span>{'MENU'}</span>
                <img src={require('../assets/hamburger.png')}/>
              </div>
            </div>
          </nav>
          </header>
          )
          }
}

export default Header
