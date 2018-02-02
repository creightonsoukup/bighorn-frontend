import React from 'react';
import Subheader from './subheader';
import FloorplansMobile from './FloorplansMobile';
import galleries from '../content/images';
import TownhomeIntro from './townhomes'
import ImageGallery from './image-gallery';
import Textblock from './textblock';
import content from '../content/content'


export default class TwoBedroom extends React.Component {
  render() {
    return (
      <div className='two-bedroom'>
        <Subheader style={'subheader left-header'} text={'TWO BEDROOM'}/>
        <Textblock style={'text-block left-block background'} content={content.townhomes.textBlock3}/>
        <div className='mobile'>
          <Subheader style={'subheader left-header'} text={'ELEVATION'}/>
          <ImageGallery images={galleries.townhomesAttached}/>
          <Subheader style={'subheader left-header'} text={'FLOORPLANS'}/>
          <FloorplansMobile images={galleries.attachedFloorplans}/>
        </div>
      </div>

    )
  }
}
