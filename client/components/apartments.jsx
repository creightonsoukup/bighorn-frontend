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
      floorplan: 'https://res.cloudinary.com/bighorncrossing/image/upload/v1518024674/twobed_bfo75y.jpg'
    }
    this.oneBedroom = this.oneBedroom.bind(this)
    this.twoBedroom = this.twoBedroom.bind(this)
  }

  oneBedroom() {
    this.setState({
      activeTab: 2,
      floorplan: 'https://res.cloudinary.com/bighorncrossing/image/upload/v1518024678/onebed_a5tyfs.jpg'
    })
  }

  twoBedroom() {
    this.setState({
      activeTab: 1,
      floorplan: 'https://res.cloudinary.com/bighorncrossing/image/upload/v1518024674/twobed_bfo75y.jpg'
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
        <Textblock style={'text-block outline'} content={content.apartments.textBlock2} />
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
