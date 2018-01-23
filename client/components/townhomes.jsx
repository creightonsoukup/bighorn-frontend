import React from 'react';
import Textblock from './textblock';
import content from '../content/content';
import galleries from '../content/images';
import ImageGallery from './image-gallery';

class Townhomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 1,
      images: galleries.townhomesDetached
    }
    this.threeBedroom = this.threeBedroom.bind(this)
    this.twoBedroom = this.twoBedroom.bind(this)
  }

  twoBedroom() {
    this.setState({activeTab:2, images: galleries.townhomesAttached})
  }

  threeBedroom() {
    this.setState({activeTab:1, images: galleries.townhomesDetached})
  }
  render() {
    return (
      <div>
        <img src="https://res.cloudinary.com/bighorncrossing/image/upload/v1514344512/townhome-hero_cyhc8r.jpg"/>
        <img className='sub-logo' src={require('../assets/townhomes-logo.png')}/>
        <Textblock className='' content={content.townhomes.textBlock1}/>
        <section>
          <button onClick={this.threeBedroom}>
            <img src={require('../assets/D1.png')}/>
            <span>{'THREE BEDROOM'}</span>
          </button>
          <button onClick={this.twoBedroom}>
            <img src={require('../assets/D1.png')}/>
            <span>{'TWO BEDROOM'}</span>
          </button>
          <div>
            <h2>{'EXTERIOR'}</h2>
            <ImageGallery images={this.state.images}/>
          </div>
        </section>
      </div>
    )
  }
}

export default Townhomes;
