
/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/

/*
function searchForTitle() {

	var results = [];

	for (movie_id in movies_object) {
		movie_details = movies_object[movie_id];
		// Comparing input to titles in movies_object. Making them upper case in order to make them case insensitive.
		if ((movie_details["otitle"].toUpperCase()).includes(query_params.film_title.toUpperCase())) {
			list_item = document.createElement("li");
			item_link = document.createElement("A");
			item_link.href = "show_movie.html?id=" + movie_id;
			link_text = document.createTextNode(movie_details["otitle"]);
       		item_link.appendChild(link_text);
	
       		list_item.appendChild(item_link);
       		film_title.appendChild(list_item); 
    	}
    }

    	for (var i = 0; i < 5; i++){
        results.push(film_title[i]);
    	}

}
*/

function addMoviePicture() {
			list_item = document.createElement("li");
			item_link = document.createElement("A");
			item_link.href = "show_movie.html?id=" + movie_id;

       		link_pic = document.createElement('img');

       		var pic_id = 0;
       		if (movie_id > 1000)
       			pic_id = movie_id.toString().charAt(0);


    		src = 'http://vindkast.infomedia.uib.no/mediadb/images/o/' + pic_id + '/' + movie_id + '.jpg';
    		link_pic.src = src;



    		item_link.appendChild(link_pic);
       		list_item.appendChild(item_link);

       		/* To Vegar: Want to put the picture somewhere else on the site? Edit film_title to your id here. */
       		results.appendChild(list_item); 
}

function searchForTitle() {
	var results = [];

	for (movie_id in movies_object) {
		movie_details = movies_object[movie_id];
		if ((movie_details["otitle"].toUpperCase()).includes(query_params.main_search.toUpperCase() || query_params.film_title.toUpperCase())) {
			addMoviePicture();
       	}
    }
}

/* Makes the search function case insensitive */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
function display_X() {
}
*/
/*
	Denne metoden viser elementene på skjermen for brukeren
*/




window.onload = function() {

	query_params = get_query_string_parameters();

	search_results = movies_object;


	if (query_params.main_search) {
    	main_search = document.getElementById("main_search");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
		searchForTitle();
	}

	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
		searchForTitle();
	}
	
	if (query_params.actor) {
        actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor;
    }
	
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director;
    }
	
	if (query_params.genre) {
        genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre;
    }
	
	if (query_params.country) {
        country = document.getElementById("country");
		country.innerHTML = query_params.country;
    }
}
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 