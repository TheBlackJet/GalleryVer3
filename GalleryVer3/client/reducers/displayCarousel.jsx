
const img = [
              { _id: 1, path: 'Chrysanthemum.jpg', status: 'active' },
              { _id: 2, path: 'Desert.jpg' , status: '' },
              { _id: 3, path: 'Hydrangeas.jpg', status: ''},
              { _id: 3, path: 'Jellyfish.jpg', status: ''},
              { _id: 3, path: 'Koala.jpg', status: ''},
              { _id: 3, path: 'Lighthouse.jpg', status: ''}
            ];

export const carouselReducer = (state = { display_carousel_status : 'SHOW', images: img },  action) => {


	
    switch(action.type){
    	case 'SHOW_CAROUSEL':
    		
    		return { display_carousel_status : 'SHOW', images: img }; 

    	

        case 'SHOW_THUMBNAIL':
            
            return { display_carousel_status : 'HIDE', images: img }; 

        

    	default:
    		return state;


    }
    

	

}


