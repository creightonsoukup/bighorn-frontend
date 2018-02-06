import React from 'react';
import ImageGallery from './image-gallery'
import FullpageImage from './fullpage-image';
import Subheader from './subheader';
import List from './list';
import content from '../content/content'
import Textblock from './textblock';

class Neighborhood extends React.Component {

  render() {
    return (
      <div className='neighborhood'>
        <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516462298/downtown2_affj00.jpg'}/>
        <section className='neighborhood-intro'>
          <Subheader text={content.neighborhood.intro.title.toUpperCase()} style={'subheader left-header'}/>
          <p>{content.neighborhood.intro.paragraph1}</p>
        </section>
        <section >
          <Subheader style={'subheader left-header'} text={'LAKEFRONT TO SLOPESIDE IN MINUTES'}/>
          <div className='neighborhood-section'>
            <img src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1517891935/dsds_vac7qw.jpg'}/>
            <List style={'list left-list'}content={content.neighborhood.ski}/>
          </div>
        </section>
        <section className='neighborhood-section'>
          <Subheader style={'subheader right-header'} text={'ENDLESS RECREATION'}/>
          <div className='neighborhood-section'>
            <img src='https://res.cloudinary.com/bighorncrossing/image/upload/c_crop,g_west,h_1080,w_1387,x_0/v1514344512/neighborhood-hero_upzlox.jpg'/>
            <List style={'list right-list'} content={content.neighborhood.recreation}/>
          </div>
        </section>
        <section className='neighborhood-section'>
          <Subheader style={'subheader left-header'} text={'JUST LOOKING FOR A VIEW?'}/>
          <div className='neighborhood-section'>
            <img src='https://res.cloudinary.com/bighorncrossing/image/upload/v1517893889/jens-herrndorff-404712_or29xt.jpg'/>
            <List style={'list left-list'} content={content.neighborhood.view}/>
          </div>
        </section>
        <section className='neighborhood-section'>
          <Subheader style={'subheader right-header '} text={'CALLING ALL HISTORY BUFFS'}/>
          <div className='neighborhood-section'>
            <img src='https://res.cloudinary.com/bighorncrossing/image/upload/v1517892250/marie-hoffman-295580_fuuwhz.jpg'/>
            <List style={'list right-list'} content={content.neighborhood.history}/>
          </div>
        </section>
      </div>
          )
          }
          }

export default Neighborhood
