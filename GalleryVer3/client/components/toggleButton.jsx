import React from 'react';
import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';
import { Component } from 'react';
import { galleryStatus } from '../actions/index.jsx';
import { bindActionCreators } from 'redux';



class toggleButton extends Component {

	

	render(){
		return (

			<div>

				<div className="row">

					<div className="col-md-12">

						
						<button type="button" className="btn btn-primary btn-block" onClick={() =>  { this.props.galleryStatus(this.props.toggleState.button_status); console.log(this.props); } }> { this.props.toggleState.button_text } </button>
					

					</div>

				</div>

			</div>

		);
	};

}




//export default ToggleButton;


const mapStateToProps = (state) => {
  return {
    toggleState: state.toggleState
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    galleryStatus: (status) => {
      dispatch(galleryStatus(status))
    }
  }
}


const FilterToggleButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(toggleButton);

export default FilterToggleButton;