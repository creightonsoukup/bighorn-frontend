import React from 'react';
import ContactBroker from './contact_broker';
import Button from './button';
import StayUpdated from './stay_updated'
import {Link} from 'react-router-dom';

export default class NextSteps extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

      }
  }




  render() {
    return (
      <div className='next-steps'>
        <div className='steps-header'>
          <h2>{'INTERESTED? HERE ARE THE NEXT STEPS'}</h2>
          <Link to='/contact'></Link>
        </div>
        <div className='contact-forms'>
          <StayUpdated />
        </div>
      </div>
    )
  }
}
