import React from 'react';
import galleries from '../content/images';

export default class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
      position: 0
    }

    this.changeImage = this.changeImage.bind(this);
  }

  componentWillMount() {
    this.setState({imageUrl: this.props.images[0].imageUrl, position: this.props.images[0].position})
  }

  changeImage() {
    let imageCount = this.props.images.length
    console.log(imageCount)
  }


  render() {
    return(
      <div>
        <span></span>
        <img src={this.state.imageUrl}/>
        <span></span>
      </div>
    )
  }
}
