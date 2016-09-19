import React from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Component } from 'react';


class displayThumbnail extends Component {

	renderCarouselElement(){

		return this.props.images.map((image, index) => (
			
			<div key={index} className = "col-sm-6 col-md-3 thumb">
			      <a href = "#" className = "thumbnail">
			         <img src = {"images/" + image.path} alt = "Generic placeholder thumbnail" />
			      </a>
			   </div>
   
		));

	}

	render(){


		if (this.props.display_status == 'HIDE'){

			return (<div></div>);	

		}

		return (

			<div>

				<div className="row" id="thumbnail-holder">

					<div className="col-md-12">

						

						{this.renderCarouselElement()}

					</div>

				</div>

			</div>

		);
	};

}



const mapStateToProps = (state) => {
  return {
    images: state.thumbnailState.images,
    display_status : state.thumbnailState.display_thumb_status
  }
}

const FilterdisplayThumbnail = connect(
  mapStateToProps
)(displayThumbnail)

export default FilterdisplayThumbnail;