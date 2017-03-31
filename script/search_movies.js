// Disse elementene bruker vi gjennom koden, så vi oppretter variabler i toppen
// Da har vi tilgang til de i alle metoder
var input = document.forms.search.title;
var searchBtn = document.forms.search.submit;
var resultList = document.querySelector("#results");

// En liste med objekter som representerer dyr. Hvert objekt har egenskapen type og color.
var animals = [
	{
		type: "Giraff",
		color: "Gul"
	},
	{
		type: "Elefant",
		color: "Grå"
	},
	{
		type: "Antilope",
		color: "Beige"
	},
	{
		type: "Neshorn",
		color: "Grå"
	},
	{
		type: "Anakonda",
		color: "Grønn"
	},
	{
		type: "Skilpadde",
		color: "Grønn"
	},
	{
		type: "Pingvin",
		color: "Hvit og svart"
	},
	{
		type: "Flamingo", 
		color: "Rosa"
	},
	{
		type: "Oter",
		color: "Brun"
	},
	{
		type: "Brunbjørn",
		color: "Brun"
	},
	{
		type: "Isbjørn",
		color: "Hvit"
	},
	{
		type: "Måke",
		color: "Hvit"
	}
]

var movies = movies_object


/* 
function searchAnimalsTheEasyWay(e) {
	e.preventDefault();
	// Filter itererer gjennom hvert element og returnerer en ny liste med de elementene som består testen
	// vi har spesifisert. I dette tilfelle kan vi lese: Legg kun til de elementene som returnerer true for a.type === input.value
	var results = animals.filter(a => a.type === input.value);
	displayResults(results);
}
*/

function searchAnimalsTheEasyWay(e) {
	e.preventDefault();
	// Filter itererer gjennom hvert element og returnerer en ny liste med de elementene som består testen
	// vi har spesifisert. I dette tilfelle kan vi lese: Legg kun til de elementene som returnerer true for a.type === input.value
	var results = movies_object.filter(a => a.otitle === input.value);
	displayResults(results);
}


/*
	Denne metoden viser elementene på skjermen for brukeren

function displayResults(results) {
	// Først resetter vi søkeresultatene, dersom det har vært søkt på noe tidligere. 
	// Prøv å kommentere ut metodekallet under og se hva som skjer
	resetSearchResults();
	// For hvert element i resultatlisten
	for(var i = 0; i < results.length; i++) {
		// Opprett en ny li-tagg
		var li = document.createElement("li");
		// Sett en tekststreng som innhold
		li.innerHTML = results[i].type + " har en " + results[i].color.toLowerCase() + " farge";

		// Legg li-taggen til i resultList (resultList er en ol-tagg)
		resultList.appendChild(li);
	}
}
*/


function displayResults(results) {
	// Først resetter vi søkeresultatene, dersom det har vært søkt på noe tidligere. 
	// Prøv å kommentere ut metodekallet under og se hva som skjer
	resetSearchResults();
	// For hvert element i resultatlisten
	for(var i = 0; i < results.length; i++) {
		// Opprett en ny li-tagg
		var li = document.createElement("li");
		// Sett en tekststreng som innhold
		li.innerHTML = results[i].otitle + " har " + results[i].ntitle.toLowerCase() + " som tittel";

		// Legg li-taggen til i resultList (resultList er en ol-tagg)
		resultList.appendChild(li);
	}
}


/*
	Denne metoden gjør det samme som displayResults, men med mye mindre kode.
	Her bruker vi map-funksjonen fra ES6
	Map itererer gjennom hvert element i results, og returnerer det vi spesifiserer, i dette tilfelle en tekststreng
	som representerer hver li-tagg med tekstinnhold. 

	Map returnerer en ny liste, så vi kan bruke .join("") for å returnere en lang tekststreng.
	Prøv gjerne console.log(html) for å se hva som blir returnert.

function displayResultsTheEasyWay(results) {
	var html = results.map(animal => `<li>${animal.type} har en ${animal.color.toLowerCase()} farge</li>`).join("");
	resultList.innerHTML = html;
}
*/

function displayResultsTheEasyWay(results) {
	var html = results.map(movies_object => `<li>${movies_object.otitle} har en ${movies_object.ntitle.toLowerCase()} tittel</li>`).join("");
	resultList.innerHTML = html;
}

function resetSearchResults() {
	resultList.innerHTML = "";
}

/*
	Denne metoden søker etter både type og farge og bryr seg ikke om store eller små bokstaver.
	Igjen bruker vi filter-metoden for å filtrere ut de elementene som består testene våres
*/
function fuzzyAnimalSearch(searchTerm) {
	// Siden filter tar en eller flere funksjoner som returnerer true eller false
	// som argument kan vi lagre funksjonene til variabler, slik at det blir lettere å lese koden
	
	// Vi lagrer funksjonen som returnerer true hvis typen til dyret inneholder deler av searchTerm
	// i typeMatches
	var typeMatches = function(a) {
		return a.type.toLowerCase().includes(searchTerm.toLowerCase());
	}

	var colorMatches = function(a) {
		return a.color.toLowerCase().includes(searchTerm.toLowerCase());
	}

	// Her returnerer vi en liste med dyr som består typeMatches-funksjonen eller colorMatches-funksjonen
	return movies_object.filter(a => typeMatches(a) || colorMatches(a));
}

/*
	Denne metoden blir kalt når en bruker skriver i input-feltet
*/
function instantSearch(e) {
	// Hvis verdien i input-feltet er tom
	if(this.value === '') {
		// Da resetter vi søkeresultatene 
		resetSearchResults();
		// og returnerer fra metoden
		return;
	}

	// Ellers så bruker vi fuzzyAnimalSearch-metoden
	var results = fuzzyAnimalSearch(this.value);
	// Og viser resultatene
	displayResultsTheEasyWay(results);
}

// searchBtn.addEventListener("click", searchAnimalsTheHardWay);
// searchBtn.addEventListener("click", searchAnimalsTheEasyWay);
input.addEventListener("keyup", instantSearch);