
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

       		/* To Vegar: Want to put the picture somewhere else on the site? Edit film_title to your id here. */
       		results.appendChild(item_link); 

}


/* Mange funksjoner som gjør nesten helt det samme. Mulig dette kan gjøre enklere. Brukt toUpperCase for
å gjøre søk case insensitive. Refaktorere ved å bruke insensitive, nevnt i forelesning. */
function mainSearch() {
	var results = [];

	for (movie_id in movies_object) {
		movie_details = movies_object[movie_id];
		if ((movie_details["otitle"].toUpperCase()).includes(query_params.main_search.toUpperCase()))
			addMoviePicture();
    }
}


function searchForTitle() {
	var results = [];

	for (movie_id in movies_object) {
		movie_details = movies_object[movie_id];
		if ((movie_details["otitle"].toUpperCase()).includes(query_params.film_title.toUpperCase()))
			addMoviePicture();
    }
}


function searchForActor() {
	var results = [];

	for (movie_id in movies_object) {
		movie_details = movies_object[movie_id];
		if ((movie_details["folk"] != null) && (movie_details["folk"].toUpperCase()).includes(query_params.actor.toUpperCase()))
			addMoviePicture();
    }
}


function searchForDirector() {
	var results = [];

	for (movie_id in movies_object) {
		movie_details = movies_object[movie_id];
		if ((movie_details["dir"] != null) && (movie_details["dir"].toUpperCase()).includes(query_params.director.toUpperCase()))
			addMoviePicture();
    }
}


/* Funker ikke. Finne ut hvordan hente ut value fra array uten noen identifikasjon. */
function searchForGenre() {
	var results = [];

	for (var i in genres_object) {
		genre_details = genres_object[i];
		if ((genre_details != null) && (genre_details).includes(query_params.genre))
			console.log(genre_details);
		
    }
}



function searchForCountry() {
	var results = [];

	for (movie_id in movies_object) {
		movie_details = movies_object[movie_id];
		if ((movie_details["country"] != null) && (movie_details["country"].toUpperCase()).includes(query_params.country.toUpperCase()))
			addMoviePicture();
    }
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