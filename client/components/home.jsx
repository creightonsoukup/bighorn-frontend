import React, { PropTypes } from 'react';
import content from '../content/content';
import ImageGallery from './image-gallery';
import Textblock from './textblock';
import List from './list';
import galleries from '../content/images'
import FullpageImage from './fullpage-image'
import Button from './button'
import SubHeader from './subheader'
import {Link} from 'react-router-dom';
import ContactBroker from './contact_broker';
import Modal from 'react-modal';
import NextSteps from './next_steps';


class Home extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      }
    }

    render() {
      return (
        <div className="homepage">
          <h1 className='gallery-overlay'><span>{'BIGHORN'}</span><span>{'CROSSING'}</span></h1>
          <ImageGallery images={galleries.homepage}/>
          <section className='text-only'>
            <Textblock style={'text-block background right-block margin-bottom'} content={content.homepage.textBlock1}/>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460916/vqu4stpehzaq83rwcia0.jpg'/>

          <section className='overflow'>
            <SubHeader style={'subheader left-header'} text={'TOWNHOMES'}/>
            <Textblock style={'text-block right-block'} content={content.homepage.textBlock2}/>
            <div className='color-block rotate-right'></div>
            <div className='homepage-btn left-homepage-btn'>
              <Link to='/townhomes'> <Button type={'lrg-btn'} text={'EXPLORE'}/></Link>
            </div>

          </section>
          <FullpageImage  src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460913/condos_dhkmg3.jpg'/>
          <section className='overflow'>
            <SubHeader style={'subheader right-header'} text={'APARTMENTS'}/>
            <Textblock style={'text-block left-block'} content={content.homepage.textBlock3}/>
            <div className='color-block rotate-left'></div>
            <div className='homepage-btn right-homepage-btn'>
              <Link to='/apartments'><Button type={'lrg-btn'} text={'EXPLORE'}/></Link>
            </div>

          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516463338/B3_jyhir9.jpg'/>
          <section>
            <SubHeader style={'subheader right-header'} text={'THE LODGE'}/>
            <Textblock style={'text-block left-block2 background'} content={content.homepage.textBlock4}/>
            <div className='button-group left-btn'>
              <Button type={'btn'} text={'COMING SOON'}/>
            </div>
          </section>
          <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516462298/downtown1_lust3v.jpg'}/>
          <section className=''>
            <SubHeader style={'subheader left-header no-margin'} text={'THE NEIGHBORHOOD'}/>
            <Textblock style={'text-block right-block2 background'} content={content.homepage.textBlock5} />
            <div className='button-group right-btn'>
              <Button type={'btn'} text={'LEARN MORE'}/>
            </div>
          </section>
          <FullpageImage src='https://res.cloudinary.com/bighorncrossing/image/upload/v1516460915/sitemap_t0qxrf.jpg'/>
        </div>
      )
    }
  }

export default Home
