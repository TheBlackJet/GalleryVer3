import { Images } from '../../import/api/images.js';
const img = [
              { _id: 1, path: 'Chrysanthemum.jpg', status: 'active' },
              { _id: 2, path: 'Desert.jpg' , status: '' },
              { _id: 3, path: 'Hydrangeas.jpg', status: ''},
              { _id: 3, path: 'Jellyfish.jpg', status: ''},
              { _id: 3, path: 'Koala.jpg', status: ''},
              { _id: 3, path: 'Lighthouse.jpg', status: ''}
            ];

export const thumbnailReducer = (state = { display_thumb_status : 'HIDE', images: Images.find({}).fetch() },  action) => {


	
    switch(action.type){
    	case 'SHOW_CAROUSEL':
    		
    		return { display_thumb_status : 'HIDE', images: Images.find({}).fetch() }; 

    	

        case 'SHOW_THUMBNAIL':
            
            return { display_thumb_status : 'SHOW', images: Images.find({}).fetch() }; 

        

    	default:
    		return state;


    }
    

	

}


