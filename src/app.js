import React, { Component } from 'react';
import Quotes from './quotes'
import Footer from './footer'
import Home from './home'

class App extends React.Component {
  
  render() {
    return (
        <div>
          <Quotes/>
          <Footer/>
        </div>
      );
  }
}

export default App;
