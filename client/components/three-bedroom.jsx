import React from 'react';
import Subheader from './subheader';
import FloorplansMobile from './FloorplansMobile';
import galleries from '../content/images';
import TownhomeIntro from './townhomes'
import ImageGallery from './image-gallery';
import Textblock from './textblock';
import content from '../content/content'
import Floorplans from './floorplans';
import FullpageImage from './fullpage-image';


export default class ThreeBedroom extends React.Component {
  render() {
    return (
      <div className='three-bedroom'>
        <Subheader style={'subheader left-header center'} text={'THREE BEDROOM'}/>
        <Textblock style={'text-block left-block2 background'} content={content.townhomes.textBlock2}/>
        <div className='mobile'>
          <Subheader style={'subheader left-header'} text={'ELEVATION'}/>
          <ImageGallery images={galleries.townhomesDetached}/>
          <Subheader style={'subheader left-header'} text={'FLOORPLANS'}/>
          <FloorplansMobile images={galleries.detachedFloorplans}/>
          <Floorplans images={galleries.detachedFloorplans}/>
          <Subheader style={'subheader left-header'} text={'INTERIOR'}/>
          <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516460914/interior_i1y2r3.jpg'}/>
        </div>
      </div>

    )
  }
}
