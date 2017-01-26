import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
	 
	render() {
		return (
				<div className="nav-bar">
					<div className="nav-links">
						<a><li onClick={this.props.alert}>Home</li></a>
						<a><li className={(this.props.selected === "books") ? "selected" : ""} onClick={this.props.myFunc}>Books</li></a>
						<a><li className={(this.props.selected === "sports") ? "selected" : ""} onClick={this.props.myFunc}>Sports</li></a>
						<a><li className={(this.props.selected === "science") ? "selected" : ""} onClick={this.props.myFunc}>Science</li></a>
						<a><li className={(this.props.selected === "life") ? "selected" : ""} onClick={this.props.myFunc}>Life</li></a>
						<a><li className={(this.props.selected === "movies") ? "selected" : ""} onClick={this.props.myFunc}>Movies</li></a>
						<a><li className={(this.props.selected === "music") ? "selected" : ""} onClick={this.props.myFunc}>Music</li></a>
						<a><li className={(this.props.selected === "funny") ? "selected" : ""} onClick={this.props.myFunc}>Funny</li></a>
						<a><li className={(this.props.selected === "success") ? "selected" : ""} onClick={this.props.myFunc}>Success</li></a>
					</div>
				</div>
			);
	}
}

Nav.propTypes = {
  myFunc: React.PropTypes.func,
};

export default Nav;