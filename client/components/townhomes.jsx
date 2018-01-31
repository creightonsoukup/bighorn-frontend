import React from 'react';
import Textblock from './textblock';
import content from '../content/content';
import galleries from '../content/images';
import ImageGallery from './image-gallery';
import Logo from './logo'
import SubHeader from './subheader';
import ThreeBedroom from './three-bedroom'

class Townhomes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: ''
    }
    this.threeBedroom = this.threeBedroom.bind(this)
    this.twoBedroom = this.twoBedroom.bind(this)
  }

  twoBedroom() {
    this.setState({activeTab:'two'})
  }

  threeBedroom() {
    this.setState({activeTab:'three'})
  }
  render() {
    return (
      <div className='townhomes'>
        <img src="https://res.cloudinary.com/bighorncrossing/image/upload/v1514344512/townhome-hero_cyhc8r.jpg"/>
        <section className='townhome-intro'>
          <Logo src={require('../assets/townhomes-logo.png')}/>
          <Textblock style='text-block right-block top-margin' content={content.townhomes.textBlock1}/>
        </section>
        <section>
          <SubHeader style={'subheader left-header'} text={'SELECT A MODEL'}/>
          <div className='model-buttons'>
            <button onClick={this.threeBedroom}>
              <img src={require('../assets/D1.png')}/>
              <div>{'THREE BEDROOM'}</div>
            </button>
            <button onClick={this.twoBedroom}>
              <img src={require('../assets/D1.png')}/>
              <div>{'TWO BEDROOM'}</div>
            </button>
          </div>
          { this.state.activeTab === 'three' &&
            <ThreeBedroom />
          }
          { this.state.activeTab === 'two' &&
            <TwoBedroom />
          }
        </section>
      </div>
    )
  }
}

export default Townhomes;
