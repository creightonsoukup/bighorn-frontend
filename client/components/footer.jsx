import React from 'react';
import {Link} from 'react-router-dom';
import ContactBroker from './contact_broker';
import Modal from 'react-modal'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactBroker: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    if(window.innerWidth < 600) {
      this.props.history.push('/contact-broker');
    }
    this.setState({
      contactBroker: true
    })
    return
  }
  closeModal() {
    if(window.innerWidth < 600) {
      this.props.history.push('/');
    }
    this.setState({
      contactBroker: false
    })
    return
  }

  render() {
    return (
      <section className='footer'>
        <div className='bottom-nav'>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/townhomes'>TOWNHOMES</Link></li>
            <li><Link to='/apartments'>APARTMENTS</Link></li>
            <li><Link to='/neighborhood'>THE NEIGHBORHOOD</Link></li>
            <li><a href='http://lifestyle.bighorncrossing.com'>{"BLOG"}</a></li>
          </ul>
        </div>
        <div className='addresses'>
          <div className='address'>
            <h4>{'BIGHORN CROSSING'}</h4>
            <p>{'Georgetown Lake'}</p>
            <p>{'Georgetown, CO '}</p>
            <p>{'720-526-0617'}</p>
            <a href="mailto:hello@bighorncrossing.com?Subject=BighornCrossing">{'hello@bighorncrossing.com'}</a>
          </div>
          <div className='address'>

          </div>
          <div className='address'>
            <h4><a href="https://living.bighorncrossing.com/contact-us">{'CONTACT US'}</a></h4>
          </div>
        </div>
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
      </section>
    )
  }
}
