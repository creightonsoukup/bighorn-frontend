import React from 'react';

export default class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageUrl:'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344514/homepage1_aualev.jpg',
                  position: 2}
    this.changeUrl = this.changeUrl.bind(this)
  }
  componentDidMount() {
    setInterval(this.changeUrl, 3000);
  }

  changeUrl() {
    if (this.state.position == 0) {
      this.setState({imageUrl: 'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344512/homepage3_qbndhr.jpg', position: 1})
    } else if (this.state.position == 1) {
      this.setState({imageUrl:'http://res.cloudinary.com/bighorncrossing/image/upload/v1514344512/homepage2_hi4e1r.jpg', position: 2})
    } else if (this.state.position == 2) {
      this.setState({imageUrl:'https://res.cloudinary.com/bighorncrossing/image/upload/v1514344514/homepage1_aualev.jpg', position: 0})
    }
  }


  render() {
    return (
      <div>
        <img src={ this.state.imageUrl } />
      </div>
    )
  }
}
