import React, { Component } from 'react';
import Nav from './nav'
import Arrays from './arrays';

let num=0;

class Quotes extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        num:0,
        set:'books'
      };

      this.handleClickNext = this.handleClickNext.bind(this);
      this.handleClickLast = this.handleClickLast.bind(this);
      this.changeArray = this.changeArray.bind(this);

      window.addEventListener('keydown', e => this.arrow(e));
    }

  handleClickLast(){
    if( this.state.num > 0){
      this.setState({num:this.state.num-1});
    }else{
      this.setState({num:Arrays[this.state.set].length-1});
    }
  }

  handleClickNext(){
    if(this.state.num < Arrays[this.state.set].length-1){
      this.setState({num:this.state.num+1});
    }else{
      this.setState({num:0});
    }
  }

  arrow(event){
      if(event.keyCode == 37){
        event.preventDefault();
            this.handleClickLast();
         }

         if(event.keyCode == 39){
        event.preventDefault();
            this.handleClickNext();
         }
    }

  changeArray(e){
    this.setState({set:e.target.innerHTML.toLowerCase()});
  }

  render() {
    return (
        <div>
          <Nav selected={this.state.set} myFunc={this.changeArray.bind(this)} />
          <div className="quote-container">
            <div className="quote">
              {Arrays[this.state.set][this.state.num][0]}
              {Arrays[this.state.set][this.state.num][1]}
            </div>
            <div className="buttons">
              <button className="left" onClick={this.handleClickLast} onKeyDown={this.arrowLeft}>Previous Quote<br/>(Or use left arrow key)</button>
              <button className="right" onClick={this.handleClickNext} onKeyDown={this.arrowRight}>Next Quote<br/>(Or use right arrow key)</button>
            </div>
          </div>
        </div>
      );
  }
}

export default Quotes;
