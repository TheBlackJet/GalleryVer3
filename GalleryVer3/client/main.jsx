import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import rootReducer from './reducers/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx';

import { Images } from '../import/api/images.js';


const initialState = { 
	 carouselState: {display_carousel_status:'SHOW', images:Images.find({}).fetch()}
};


const store = createStore(rootReducer,initialState, window.devToolsExtension && window.devToolsExtension());

const handle = Meteor.subscribe('Images');

const isReady = handle.ready();

console.log(isReady);

Meteor.startup(() => {

  $(function(){
  render(
	  <Provider store={store}>
	  		<App />
	  </Provider>,

	  document.getElementById('root')

	  )

	  
  })

})




    


