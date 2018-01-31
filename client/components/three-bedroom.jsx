import React from 'react';
import Subheader from './subheader';
import FloorplansMobile from './FloorplansMobile';
import galleries from '../content/images';
import TownhomeIntro from './townhomes'
import ImageGallery from './image-gallery';


export default class ThreeBedroom extends React.Component {
  render() {
    return (
      <div className='three-bedroom'>
        <div className='mobile'>
          <Subheader style={'subheader left-header'} text={'ELEVATION'}/>
          <ImageGallery images={galleries.townhomesDetached}/>
          <Subheader style={'subheader left-header'} text={'FLOORPLANS'}/>
          <FloorplansMobile/>
        </div>
      </div>

    )
  }
}
