function rutiner() {
	alert("Rutiner\nFølgende kan låne:\nstaben ved Institutt for informasjons- og medievitenskap, studenter ved instituttet, på grunnlag av faglig begrunnelse, andre ved UiB etter særlig avtale for et avgrenset tidsrom eller for et avgrenset prosjekt.\nBestillinger vil bli effektuert hver arbeidsdag mellom klokken 14:00 og 15:00.\nAnsatte ved instituttet får filmen lagt i posthyllen, studenter og andre får tilbakemelding om hvor og når filmen kan hentes.\nFor alt utlån gjelder en generell regel om lånetid på 1 uke, som kan forlenges med ytterligere en uke.\nØnskes en film lånt over en lengre periode må dette begrunnes, og hver enkelt forespørsel vil bli vurdert.\nFilm skal leveres tilbake i posthyllen merket retur av film.")
}

var knapp = document.getElementById("knapp");
var kommentarList = document.getElementById("kommentarList");
knapp.addEventListener("click",kommentar);

function kommentar(e) {
	e.preventDefault();
	var text = document.getElementById("kommentarArea").value;
	var p = document.createElement("p");
	if(text === ""){
		alert("Tomt felt.");
	} else {
	p.innerHTML = text;
	kommentarList.appendChild(li);
	kommentarForm.reset();
	}

}