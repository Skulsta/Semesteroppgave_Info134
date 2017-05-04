
/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/

var results = [];


// prepare the link
main_bilder = document.createElement("section");
main_bilder.className = "main_bilder";

movieCounter = 0;

function addMoviePicture() {

	left = document.getElementById("left");	

	addMovieLink();
	left.appendChild(main_bilder);
	movieCounter++;
}


/* Methods for each search field. Using toUpperCase to make searches case insencitive */
function mainSearch() {

	for (movie_id in movies_object) {
		if (movieCounter < 14) {
			movie_details = movies_object[movie_id];
			if ((movie_details["otitle"].toUpperCase()).includes(query_params.main_search.toUpperCase()))
				addMoviePicture();
		}
	}
}


function searchForTitle() {
	for (movie_id in movies_object) {
		if (movieCounter < 14) {
			movie_details = movies_object[movie_id];
			if ((movie_details["otitle"].toUpperCase()).includes(query_params.film_title.toUpperCase()))
				addMoviePicture();
		}
	}
}



function searchForActor() {

	for (movie_id in movies_object) {
		if (movieCounter < 14) {
			movie_details = movies_object[movie_id];
			if ((movie_details["folk"] != null) && (movie_details["folk"].toUpperCase()).includes(query_params.actor.toUpperCase()))
				addMoviePicture();
		}
	}
}


function searchForDirector() {

	for (movie_id in movies_object) {
		if (movieCounter < 14) {
			movie_details = movies_object[movie_id];
			if ((movie_details["dir"] != null) && (movie_details["dir"].toUpperCase()).includes(query_params.director.toUpperCase()))
				addMoviePicture();
		}
	}
}



function searchForCountry() {

	for (movie_id in movies_object) {
		if (movieCounter < 14) {
			movie_details = movies_object[movie_id];
			if ((movie_details["country"] != null) && (movie_details["country"].toUpperCase()).
				includes(query_params.country.substring(0,3).toUpperCase())) {
				addMoviePicture();
			}
		}
	}
}



function searchForGenre() {
	for (movie_id in genres_object) {
		if (movieCounter < 14) {
			movie_details = movie_id;
			movie_obj = genres_object[movie_id]
			for (values in movie_obj) {
				var genres = movie_obj[values];

				if (genres === query_params.genre.toLowerCase()) {
					addMoviePicture();
				}
			}
		}
	}
}




window.onload = function() {

	query_params = get_query_string_parameters();

	search_results = movies_object;


	if (query_params.main_search) {
		main_search = document.getElementById("main_search");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
		mainSearch();
	}

	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title"); 
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
		searchForTitle();
	}
	
	if (query_params.actor) {
		actor = document.getElementById("actor");
		actor.innerHTML = query_params.actor;
		searchForActor();
	}
	
	if (query_params.director) {
		director = document.getElementById("director");
		director.innerHTML = query_params.director;
		searchForDirector();
	}
	
	if (query_params.genre) {
		genre = document.getElementById("genre");
		genre.innerHTML = query_params.genre;
		searchForGenre();
	}
	
	if (query_params.country) {
		country = document.getElementById("country");
		country.innerHTML = query_params.country;
		searchForCountry();
	}
}

	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 