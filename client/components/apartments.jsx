import React from 'react';
import Textblock from './textblock';
import content from '../content/content'
import images from '../content/images'

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
      floorplan: 'https://res.cloudinary.com/bighorncrossing/image/upload/v1515281948/one-bedroom-floorplan_tjk8tu.png'
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
      <div>
        <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344511/apartment-hero_uhsy64.jpg'} />
        <img src={require('../assets/apartments-logo.png')}/>
        <Textblock content={content.apartments.textBlock1}/>
        <div>
          <button onClick={this.twoBedroom}>{'TWO BEDROOM'}</button>
          <button onClick={this.oneBedroom}>{'ONE BEDROOM'}</button>
          <img src={this.state.floorplan} />
        </div>
      </div>
    )
  }
}

export default Apartments
