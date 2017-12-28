import React from 'react';
import Header from './components/header';
import Main from './components/main';

export default class App extends React.Component {
  componentDidMount(){
    const element = document.getElementById('loader')
    if(element){
      setTimeout(() => {
        element.classList.add('available')
        element.outerHTML = ''
      }, 3000)
    }
  }
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}
