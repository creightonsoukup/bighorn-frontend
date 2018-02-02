import React from 'react';
import galleries from '../content/images';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      position: 0,
      caption: ''
    }

    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  componentWillMount() {
    this.setState({imageUrl: this.props.images[0].imageUrl, position: this.props.images[0].position})
  }

  nextImage() {
    let lastPosition = this.props.images.length - 1
    if (this.state.position === lastPosition) {
      this.setState({
        imageUrl: this.props.images[0].imageUrl,
        position: this.props.images[0].position,
      })
      return
    }
    let nextPosition = this.state.position + 1
      this.setState({
        imageUrl: this.props.images[nextPosition].imageUrl,
        position: this.props.images[nextPosition].position,
      })
    return
  }

  previousImage() {
    let lastPosition = this.props.images.length - 1
    if (this.state.position === 0) {
      this.setState({
        imageUrl: this.props.images[lastPosition].imageUrl,
        position: this.props.images[lastPosition].position,
      })
    return
    }
    let previousPosition = this.state.position - 1
    this.setState({
        imageUrl: this.props.images[previousPosition].imageUrl,
        position: this.props.images[previousPosition].position,
    })
    return
  }


  render() {
    return(
      <div className='gallery'>
        <div className='gallery-controls'>
          <span onClick={this.previousImage}><i className="fa fa-angle-left"></i></span>
          <img src={this.state.imageUrl}/>
          <span onClick={this.nextImage}><i className="fa fa-angle-right"></i></span>
        </div>
        <div className='gallery-caption'>
          <p>{this.state.caption}</p>
        </div>
      </div>
    )
  }
}
