import React from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Component } from 'react';


class displayCarousel extends Component {

	renderCarouselIndicator(){

		return this.props.images.map((image, index) => (
			<li data-target="#myCarousel" data-slide-to="0" key={index} className={image.status}></li>
		));

	}

	renderCarouselElement(){

		

		return this.props.images.map((image, index) => (
			<div key={index} className={"item " + image.status}>
				<img src={"images/" + image.path} alt="Flower"/>
			</div>
		));

	}
	
	render(){

		

		if (this.props.display_status == 'HIDE' || this.props.images.length == 0 ){

			return (<div></div>);	

		}

		

		return (
					<div>
						<div id="myCarousel" className="carousel slide" data-ride="carousel">
							  
							  <ol className="carousel-indicators">

							  	{this.renderCarouselIndicator()}
							   
							  </ol>

							 
							  <div className="carousel-inner" role="listbox">

							    	 {this.renderCarouselElement()}
		  				
							  </div>

							  
							  <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
							    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							    <span className="sr-only">Previous</span>
							  </a>
							  <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
							    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							    <span className="sr-only">Next</span>
							  </a>
							</div>
					</div>
				);


		

	}

}


//export default displayCarousel;


const mapStateToProps = (state) => {
  return {
    images: state.carouselState.images,
    display_status: state.carouselState.display_carousel_status
  }
}

const FilterLink = connect(
  mapStateToProps
)(displayCarousel)

export default FilterLink;