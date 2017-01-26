import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';

class Home extends React.Component {
	constructor(props) {
    	super(props);
  	}

	render() {
		return (
				<div className={this.props.class}>
					<h1 className="header">Quote Space</h1>
					<span className="subtitle">(Choose a quote topic)</span>
					<div className="container">
						<a><img src={require('./img/books.jpg')} id="books" onClick={this.props.alert}/><p>Books</p></a>
						<a><img src={require('./img/sports.jpg')} id="sports" onClick={this.props.alert}/><p>Sports</p></a>
						<a><img src={require('./img/science.jpg')} id="science" onClick={this.props.alert}/><p>Science</p></a>
						<a><img src={require('./img/life.jpg')} id="life" onClick={this.props.alert}/><p>Life</p></a>
					</div>
					<div className="container">
						<a><img src={require('./img/movies.jpg')} id="movies" onClick={this.props.alert}/><p>Movies</p></a>
						<a><img src={require('./img/music.jpg')} id="music" onClick={this.props.alert}/><p>Music</p></a>
						<a><img src={require('./img/funny.jpg')} id="funny" onClick={this.props.alert}/><p>Funny</p></a>
						<a><img src={require('./img/success.jpg')} id="success" onClick={this.props.alert}/><p>Success</p></a>
					</div>
				</div>
			);
	}
}





export default Home;