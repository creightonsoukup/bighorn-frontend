import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <section>
        <div className='bottom-nav'>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/townhomes'>townhomes</Link></li>
            <li><Link to='/condos'>condos</Link></li>
            <li><Link to='/neighborhood'>the neighborhood</Link></li>
            <li><Link to='/blog'>bighorn blog</Link></li>
          </ul>
        </div>
        <div className='address'>
          <h4>{'SALES CENTER'}</h4>
          <p>{'Argent Real Estate'}</p>
          <p>{'612 6th St Unit B'}</p>
          <p>{'Georgetown, CO '}</p>
        </div>
        <div className='social'>

        </div>
        <div className='legal'>

        </div>
      </section>
    )
  }
}
