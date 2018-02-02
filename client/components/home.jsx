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
      if(window.scrollY === 200) {
        console.log('hi')
      }
      return (
        <div className="homepage">
          <h1 className='gallery-overlay'><span>{'BIGHORN'}</span><span>{'CROSSING'}</span></h1>
          <ImageGallery images={galleries.homepage}/>
          <section className='text-only'>
            <Textblock style={'text-block background right-block'} content={content.homepage.textBlock1}/>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460916/vqu4stpehzaq83rwcia0.jpg'/>
          <section className='overflow'>
            <SubHeader style={'subheader left-header'} text={'TOWNHOMES'}/>
            <Textblock style={'text-block right-block no-margin'} content={content.homepage.textBlock2}/>
            <div className='color-block rotate-right'></div>

            <div className='homepage-btn left-homepage-btn'>
              <Button type={'lrg-btn'} text={'EXPLORE'}/>
            </div>
            <div className='button-group right-btn'>
              <Button type={'btn'} text={'JOIN THE WAITLIST'}/>
              <Button type={'btn'} text={'LEARN ABOUT PURCHASE INCENTIVES'}/>
            </div>
          </section>
          <FullpageImage  src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460913/condos_dhkmg3.jpg'/>
          <section className='overflow'>
            <SubHeader style={'subheader right-header'} text={'CONDOMINIUMS'}/>
            <Textblock style={'text-block left-block'} content={content.homepage.textBlock3}/>
            <div className='color-block rotate-left'></div>
            <div className='homepage-btn right-homepage-btn'>
              <Button type={'lrg-btn'} text={'EXPLORE'}/>
            </div>
            <div className='button-group left-btn'>
              <Button type={'btn'} text={'JOIN THE WATILIST'}/>
              <Button type={'btn'} text={'LEARN ABOUT PURCHASE INCENTIVES'}/>
            </div>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516463338/B3_jyhir9.jpg'/>
          <section>
            <SubHeader style={'subheader right-header no-margin'} text={'THE LODGE'}/>
            <Textblock style={'text-block left-block2 background'} content={content.homepage.textBlock4}/>
            <div className='button-group left-btn2'>
              <Button type={'btn'} text={'COMING SOON'}/>
            </div>
          </section>
          <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516462298/downtown1_lust3v.jpg'}/>
          <section className='neighborhood'>
            <SubHeader style={'subheader left-header no-margin'} text={'THE NEIGHBORHOOD'}/>
            <Textblock style={'text-block right-block background'} content={content.homepage.textBlock5} />
            <div className='homepage-btn left-homepage-btn'>
              <Button type={'lrg-btn'} text={'EXPLORE'}/>
            </div>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460915/sitemap_t0qxrf.jpg'/>
        </div>
      )
    }
  }

export default Home
