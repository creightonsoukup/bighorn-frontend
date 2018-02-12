import React from 'react';

export default class StayUpdated extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      lastName: '',
      firstName: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]:value
    })
  }

  handleSubmit(event) {
    this.props.close()
    event.preventDefault()
  }

  render() {
    return (
      <div className='contact-broker'>
        <form className='contact-broker' onSubmit={this.handleSubmit}>
          <h2>{'SUBSRIBE TO STAY UPDATED'}</h2>
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
          <div className='form-btns'>
            <button  onClick={this.handleSubmit}>
              SUBMIT
            </button>
            <button onClick={this.props.close}>
              CANCEL
            </button>
          </div>
        </form>

      </div>
    )
  }
}
