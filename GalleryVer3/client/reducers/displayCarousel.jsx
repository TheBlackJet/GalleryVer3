import { Images } from '../../import/api/images.js';



export const carouselReducer = (state = { display_carousel_status : 'SHOW', images: Images.find({}).fetch() },  action) => {


	
    switch(action.type){
    	case 'SHOW_CAROUSEL':

       
    		
    		return { display_carousel_status : 'SHOW', images: Images.find({}).fetch() }; 

    	

        case 'SHOW_THUMBNAIL':
            
            return { display_carousel_status : 'HIDE', images: Images.find({}).fetch() }; 

        

    	default:
    		return state;


    }
    

	

}


