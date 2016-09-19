import React from 'react';
import { connect } from 'react-redux'
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Component } from 'react';
import ToggleButton from './toggleButton.jsx';
import DisplayCarousel from './displayCarousel.jsx';
import DisplayThumbnail from './DisplayThumbnail.jsx';




class App extends Component {
	
	render(){

		console.log(this.props);

		return (
			<div>
				<ToggleButton />
				<DisplayCarousel />
				<DisplayThumbnail />
			</div>
		);

	}

}


export default App;


