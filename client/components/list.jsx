import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this)
  }

  renderList(item) {
    return <li key={this.props.content.listItems.indexOf(item)}>{`${item}`}</li>
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.content.listItems.map(this.renderList)}
        </ul>
      </div>
    )
  }
}
