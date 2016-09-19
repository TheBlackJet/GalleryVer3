import { combineReducers } from 'redux';
import { toggleStateReducer } from './toggleState.jsx';
import { carouselReducer } from './displayCarousel.jsx';
import { thumbnailReducer } from './displayThumb.jsx';


export const rootReducer  =  combineReducers({
    toggleState: toggleStateReducer,
    carouselState: carouselReducer,
    thumbnailState: thumbnailReducer
})

export default rootReducer;