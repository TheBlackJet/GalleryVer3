export const galleryStatus = (currentStatus) =>{

	const showThumbnail = {type : 'SHOW_THUMBNAIL', buttonStatus : 'SHOW_THUBNAIL_BUTTON'};

	const showCarousel = {type : 'SHOW_CAROUSEL', buttonStatus : 'SHOW_CAROUSEL_BUTTON'};

	if (currentStatus === "SHOW_CAROUSEL_BUTTON") 
		return showThumbnail 
	else

		return showCarousel;
	
	

}


