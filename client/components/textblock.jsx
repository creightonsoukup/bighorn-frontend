import React from 'react';

export default class Textblock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.content.title && <h2>{this.props.content.title}</h2>}
        <h3>{this.props.content.paragraph1}</h3>
        {this.props.content.paragraph2 && <h3>{this.props.content.paragraph2}</h3>}
      </div>
        )
  }
}
