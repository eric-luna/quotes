import React, { Component } from 'react';
import Quotes from './quotes'
import Footer from './footer'

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
