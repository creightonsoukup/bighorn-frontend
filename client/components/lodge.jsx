import React from 'react';
import ImageGallery from './image-gallery'
import FullpageImage from './fullpage-image';
import Subheader from './subheader';
import List from './list';
import content from '../content/content'
import Textblock from './textblock';
import NextSteps from './next_steps';

class Lodge extends React.Component {

  render() {
    return (
      <div className='lodge'>
        <FullpageImage src={'https://res.cloudinary.com/bighorncrossing/image/upload/v1516463338/B3_jyhir9.jpg'}/>
        <section>
          <div>

          </div>
        </section>
        
      </div>
    )
  }
}

export default Lodge
