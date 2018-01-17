import React from 'react';
import content from '../content/content';
import ImageGallery from './image-gallery';
import Textblock from './textblock';
import List from './list';
import galleries from '../content/images'
import FullpageImage from './fullpage-image'
import Button from './button'
import SubHeader from './subheader'

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
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1514406147/homepage-townhome-hero_j3uis2.jpg'/>
          <SubHeader text={'TOWNHOMES'}/>
          <Textblock content={content.homepage.textBlock2}/>
          <div className='homepage-btn'>
            <Button type={'lrg-btn'} text={'EXPLORE'}/>
          </div>
          <div className='button-group'>
            <Button type={'btn'} text={'JOIN THE WAITLIST'}/>
            <Button type={'btn'} text={'LEARN ABOUT PURCHASE INCENTIVES'}/>
          </div>
          <FullpageImage  src='http://res.cloudinary.com/bighorncrossing/image/upload/v1514406093/apartment-homepage-hero_inholb.jpg'/>
          <SubHeader text={'CONDOS'}/>
          <Textblock content={content.homepage.textBlock3}/>
          <div className='homepage-btn'>
            <Button type={'lrg-btn'} text={'EXPLORE'}/>
          </div>
          <div className='button-group'>
            <Button type={'btn'} text={'JOIN THE WATILIST'}/>
            <Button type={'btn'} text={'LEARN ABOUT PURCHASE INCENTIVES'}/>
          </div>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1514406821/hotel-homepage_zlkdlj.jpg'/>
          <SubHeader text={'STAY'}/>
          <Textblock content={content.homepage.textBlock4}/>
          <Button type={'btn'} text={'COMING SOON'}/>
          <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344512/neighborhood-hero_upzlox.jpg'}/>
          <SubHeader text={'THE NEIGHBORHOOD'}/>
          <Textblock content={content.homepage.textBlock5} />
          <List content={content.homepage.list1}/>
        </div>
      )
    }
  }

export default Home
