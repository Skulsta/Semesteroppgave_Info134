/** Javascript that will create basically the whole front page by
creating new elements and adding information from the movies. */


function sistReturnerte() {
	var results = [];

	/** No more than 14 movies in each category */
	for (movie_id in movies_object) {
		for (var i = 0; i < 15; i++) {
			if (movies_object[movie_id] != null)
				addMoviePicture();
		}	
	}
}




function addMoviePicture() {
			item_link = document.createElement("A");
			item_link.href = "show_movie.html?id=" + movie_id;

       		link_pic = document.createElement('img');
       		link_pic.style.height = '200px';
       		link_pic.style.width = '140px';

       		var pic_id = 0;
       		if (movie_id > 1000) 
       			pic_id = movie_id.toString().charAt(0);
       		

    		var src = 'http://nelson.uib.no/o/' + pic_id + '/' + movie_id + '.jpg';
    		link_pic.src = src;

    		item_link.appendChild(link_pic);

       		/* Want to put the picture somewhere else on the site? Edit results to your id here. */
       		results.appendChild(item_link); 
}