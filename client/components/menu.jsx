import React from 'react';

export default class Mennu extends React.Component {
  render() {
    return (
      <section>
        <ul>
          <li><Link to='/'>home</Link></li>
          <li><Link to='/townhomes'>townhomes</Link></li>
          <li><Link to='/condos'>condos</Link></li>
          <li><Link to='/neighborhood'>the neighborhood</Link></li>
          <li><Link to='/blog'>bighorn blog</Link></li>
          <li><Link to='/contact'>contact</Link></li>
        </ul>
      </section>
    )
  }
}
