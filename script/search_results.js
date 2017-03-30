
var resultList = document.querySelector("#results");


/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/
function searchTitle() {
	search_results = movies_object;
	var results = [];
	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
		for (movie in movies_object) {
			if (film_title === otitle) {
				results.push(movie);
			}
		}
    }

    // Kall en metode som viser resultatene på skjermen for brukeren
	displayResults(results);
}



/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
function display_X() {
}
*/
/*
	Denne metoden viser elementene på skjermen for brukeren
*/
function displayResults(results) {
	// Først resetter vi søkeresultatene, dersom det har vært søkt på noe tidligere. 
	// Prøv å kommentere ut metodekallet under og se hva som skjer
	// For hvert element i resultatlisten
	for(var i = 0; i < results.length; i++) {
		// Opprett en ny li-tagg
		var li = document.createElement("li");
		// Sett en tekststreng som innhold
		li.innerHTML = results[i].film_title + " har en " + results[i].film_title.toLowerCase() + " farge";

		// Legg li-taggen til i resultList (resultList er en ol-tagg)
		resultList.appendChild(li);
	}
}

function displayMovieResults() {
    list_element = document.getElementById("film_title");
    var movies = [];

    for (movie_id in movies_object){
    	if (query_params === movies_object.otitle) {
        	movie_details = movies_object[movie_id];
        	list_item = document.createElement("LI");

	// prepare the link
        item_link = document.createElement("A");
        item_link.href = "show_movie.html?id=" + movie_id;
		link_text = document.createTextNode(movie_details["otitle"]);
        item_link.appendChild(link_text);
	
        list_item.appendChild(item_link);
        list_element.appendChild(list_item); 
    
       	movies.push(list_element);
			}
		}
		console.log(movies);
	}



window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;

	var results = [];
	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.

		for (movie_id in movies_object) {
			movie_details = movies_object[movie_id];
			if (movie_details["otitle"] === query_params.film_title)
				console.log(movie_details);
			
		}
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