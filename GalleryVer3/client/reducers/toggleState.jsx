


export const toggleStateReducer = (state = { button_status : 'SHOW_THUMBNAIL_BUTTON', button_text : 'SHOW THUMBNAIL' },  action) => {


	
    switch(action.type){
    	case 'SHOW_CAROUSEL':
    		
    		return { button_status : action.buttonStatus, button_text : 'SHOW CAROUSEL' }; 

    	case 'SHOW_THUMBNAIL':
    		
    		return { button_status : action.buttonStatus, button_text : 'SHOW THUMBNAIL' }; 


    	default:
    		return state;


    }
    

	

}


