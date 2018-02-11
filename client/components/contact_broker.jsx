import React from 'react';

export default class ContactBroker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      text: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name

    this.setState({
      [name]:value
    });
  }

  handleSubmit(event) {
    console.log(this.state)
    this.props.cancel()
    event.preventDefault()
  }

  render() {
    return (
      <div className='contact-broker'>
        <form className='contact-broker' onSubmit={this.handleSubmit}>
          <h2>{'CONTACT A BROKER'}</h2>
          <label>
            <span>{'First Name'}</span>
            <input
              name='firstName'
              value={this.state.firstName}
              onChange={this.handleInputChange}/>
          </label>
          <label>
            <span>{'Last Name'}</span>
            <input
              name='lastName'
              value={this.state.lastName}
              onChange={this.handleInputChange}/>
          </label>
          <label>
            <span>{'Email'}</span>
            <input
              name='email'
              value={this.state.email}
              onChange={this.handleInputChange}/>
          </label>
          <label>
            <span>{'Phone Number'}</span>
            <input
              name='phone'
              value={this.state.phone}
              onChange={this.handleInputChange}/>
          </label>
          <label>
            <span>{'Message'}</span>
            <textarea
              name='text'
              value={this.state.text}
              onChange={this.handleInputChange}/>
          </label>
          <button onClick={this.handleSubmit}>
            Submit
          </button>
          <button onClick={this.props.cancel}>
            Cancel
          </button>
        </form>
      </div>
    )
  }
}
