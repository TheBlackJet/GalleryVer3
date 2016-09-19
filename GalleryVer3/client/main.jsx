import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import rootReducer from './reducers/index.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App.jsx';

const store = createStore(rootReducer);




Meteor.startup(() => {
  render(
	  <Provider store={store}>
	  		<App />
	  </Provider>,

	  document.getElementById('root'));
});
