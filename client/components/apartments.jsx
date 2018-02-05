import React from 'react';
import Textblock from './textblock';
import content from '../content/content'
import images from '../content/images'
import FullpageImage from './fullpage-image';
import Logo from './logo';
import SubHeader from './subheader';


class Apartments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      floorplan: 'https://res.cloudinary.com/bighorncrossing/image/upload/v1515281948/two-bedroom-floorplan_mno1uu.png'
    }
    this.oneBedroom = this.oneBedroom.bind(this)
    this.twoBedroom = this.twoBedroom.bind(this)
  }

  oneBedroom() {
    this.setState({
      activeTab: 2,
      floorplan: 'https://res.cloudinary.com/bighorncrossing/image/upload/a_90/v1515281948/one-bedroom-floorplan_tjk8tu.png'
    })
  }

  twoBedroom() {
    this.setState({
      activeTab: 1,
      floorplan: 'https://res.cloudinary.com/bighorncrossing/image/upload/v1515281948/two-bedroom-floorplan_mno1uu.png'
    })
  }
  render() {
    return (
      <div className='condos'>
        <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344511/apartment-hero_uhsy64.jpg'} />
        <section className='unit-intro'>
          <Logo src={require('../assets/apartments-logo.png')}/>
          <Textblock style={'text-block right-block background'} content={content.apartments.textBlock1}/>
        </section>
        <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516460912/condoelevation_jl1n8b.jpg'}/>
        <SubHeader style={'left-header subheader'} text={'SELECT A UNIT'}/>
        <div className='condo-buttons'>
          <button onClick={this.twoBedroom}>{'TWO BEDROOM'}</button>
          <button onClick={this.oneBedroom}>{'ONE BEDROOM'}</button>
        </div>
        <img className='unit-plans' src={this.state.floorplan} />
      </div>
    )
  }
}

export default Apartments
