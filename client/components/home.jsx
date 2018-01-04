import React from 'react';
import content from '../content/content';
import ImageGallery from './image-gallery';
import Textblock from './textblock';
import List from './list';
import galleries from '../content/images'

class Home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div className="homepage">
          <h1><span>{'Bighorn'}</span><span>{'Crossing'}</span></h1>
          <ImageGallery images={galleries.homepage}/>
          <Textblock content={content.homepage.textBlock1}/>
          <img src='https://res.cloudinary.com/bighorncrossing/image/upload/v1514406147/homepage-townhome-hero_j3uis2.jpg'/>
          <h2>{'Townhomes'}</h2>
          <Textblock content={content.homepage.textBlock2}/>
          <button>{'Explore'}</button>
          <button>{'Join The Waitlist'}</button>
          <button>{'Learn About Purchase Incentives'}</button>
          <img src='http://res.cloudinary.com/bighorncrossing/image/upload/v1514406093/apartment-homepage-hero_inholb.jpg'/>
          <h2>{'Apartments'}</h2>
          <Textblock content={content.homepage.textBlock3}/>
          <button>{'Join The Waitlist'}</button>
          <button>{'Learn About Purchase Incentives'}</button>
          <img src='https://res.cloudinary.com/bighorncrossing/image/upload/v1514406821/hotel-homepage_zlkdlj.jpg'/>
          <h2>{'Stay'}</h2>
          <Textblock content={content.homepage.textBlock4}/>
          <button>{'Coming Soon'}</button>
          <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344512/neighborhood-hero_upzlox.jpg'}/>
          <Textblock content={content.homepage.textBlock5} />
          <List content={content.homepage.list1}/>
        </div>
      )
    }
}

export default Home
