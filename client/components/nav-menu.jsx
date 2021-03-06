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
          <li><a href='http://lifestyle.bighorncrossing.com'>lifestyle blog</a></li>
          <li><a href='https://living.bighorncrossing.com/contact-us'>contact</a></li>
        </ul>
        <img className='menu-logo'src={require('../assets/bighorn-logo.png')}/>
      </section>
      )
    }
  }
export default NavMenu
