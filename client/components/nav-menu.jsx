import React from 'react';
import {Link} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

class NavMenu extends React.Component {
  render() {
    return (
      <section className='menu'>
        <img onClick={this.props.toggleMenu} className='menu-icon'src={require('../assets/x.png')}/>
        <ul onClick={this.props.toggleMenu}>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/townhomes'>townhomes</Link></li>
          <li><Link to='/apartments'>apartments</Link></li>
          <li><Link to='/lodge'>the lodge</Link></li>
          <li><Link to='/neighborhood'>the neighborhood</Link></li>
          <li><a href='http://living.bighorncrossing.com'>lifestyle</a></li>
          <li><a href='https://mailchi.mp/3ca59e0cbf86/contact-broker'>contact</a></li>
        </ul>
        <img className='menu-logo'src={require('../assets/bighorn-logo.png')}/>
      </section>
      )
    }
  }
export default NavMenu
