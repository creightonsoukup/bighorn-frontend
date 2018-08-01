import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavMenu from './nav-menu';
import ContactBroker from './contact_broker';
import Modal from 'react-modal';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      mobile: true,
      menu: false,
      contactBroker: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggleMenu() {
    if(this.state.menu === false) {
      this.setState({menu: true})
      window.scrollTo(0, 0)
      return
    }
    this.setState({menu: false})
  }

  openModal() {
    this.setState({
      contactBroker: true
    })
    return
  }
  closeModal() {

    this.setState({
      contactBroker: false
    })
    return
  }

  render() {
    return (
        <header>
          <nav className={this.state.navClasses}>
            <Link to='/'><img className='logo' src={require('../assets/bighorn-logo.png')}/></Link>
            <div className='nav-items'>
              <ul className='nav-links'>
                <li><Link to='/townhomes'>{'TOWNHOMES'}</Link></li>
                <li><Link to='/apartments'>{"APARTMENTS"}</Link></li>
                <li><Link to='/neighborhood'>{"NEIGHBORHOOD"}</Link></li>
                <li><Link to='/lodge'>{'LODGE'}</Link></li>
                <li><a href='http://lifestyle.bighorncrossing.com/'>{"BLOG"}</a></li>
              </ul>
              <div className="nav-menu" onClick={this.toggleMenu}>
                <span>{'MENU'}</span>
                <img src={require('../assets/hamburger.png')}/>
              </div>
            </div>
          </nav>
          { this.state.menu &&
            <NavMenu toggleMenu={this.toggleMenu} />
          }

          <a href='https://living.bighorncrossing.com/contact-us'><div className='fixed-contact-btn'>
            {"CONTACT US"}
          </div></a>


        </header>
    )
  }
}

export default Header
