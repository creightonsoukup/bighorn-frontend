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
                <li><a href='http://living.bighorncrossing.com/'>{"LIFESTYLE"}</a></li>
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
          { window.innerWidth < 600 ? (
            <Link to='/contact-broker'><div className='fixed-contact-btn'>
              {"CONTACT US"}
            </div></Link>
          ) : (
            <div className='fixed-contact-btn' onClick={this.openModal}>
              {"CONTACT US"}
            </div>
          )}
          { window.innerWidth < 999 ? (
            <Modal
              style={{
                content: {
                  padding: '0',
                  top: '100px'
                }
              }}
              isOpen={this.state.contactBroker}
              ariaHideApp={false}
              shouldCloseOnOverlayClick={true}
              onRequestClose={this.closeModal}>
              <ContactBroker close={this.closeModal}/>
            </Modal>
          ) : (
            <Modal
              style={{
                content : {
                  top: '55%',
                  left: '50%',
                  right: 'auto',
                  bottom: 'auto',
                  marginRight: '-50%',
                  transform: 'translate(-50%, -50%)',
                  padding: '0',
                }
              }}
              isOpen={this.state.contactBroker}
              ariaHideApp={false}
              shouldCloseOnOverlayClick={true}
              onRequestClose={this.closeModal}>
              <ContactBroker close={this.closeModal}/>
            </Modal>
          )}
        </header>
    )
  }
}

export default Header
