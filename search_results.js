


/* Her kan dere implementere en søkefunksjon. For eksempel:
function search_for_X() {
}
*/
function search_for_title(searchTerm) {

	var otitleMach = function(a) {
		return a.otitle.toLowerCase().includes(searchTerm.toLowerCase());
	}
	return movies_object.filter(a => otitleMach(a));
	console.log(search_for_title);
}

/* Her kan dere implementere en display function som viser resulatetene av søket. For eksempel:
function display_X() {
}
*/

function displayTitle(results) {
	// Først resetter vi søkeresultatene, dersom det har vært søkt på noe tidligere. 
	// Prøv å kommentere ut metodekallet under og se hva som skjer
	resetSearchResults();
	// For hvert element i resultatlisten
	for(var i = 0; i < results.length; i++) {
		// Opprett en ny li-tagg
		var li = document.createElement("li");
		// Sett en tekststreng som innhold
		li.innerHTML = results[i].otitle.toLowerCase();

		// Legg li-taggen til i resultList (resultList er en ol-tagg)
		resultList.appendChild(li);
}
}

function resetSearchResults() {
	res_list.innerHTML = "";
}

window.onload = function() {
	query_params = get_query_string_parameters();

	search_results = movies_object;
	
	if (query_params.film_title) {
        film_title = document.getElementById("film_title");
		//Her kan dere for eksempel kalle en søkefunksjon som søker for tittel.
    	search_for_title();
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
	
	//Her kan dere for eksempel kalle en (display) funksjon som viser søkeresultater 
	return displayTitle();
}