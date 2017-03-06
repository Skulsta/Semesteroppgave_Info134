# Semesteroppgave_Info134
Ny utforming for UiB sin filmutleie-tjeneste.
Gammel, original versjon: http://vindkast.infomedia.uib.no/mediadb/

Del 1.
Lage en samling av HTML-dokumenter som viser startsiden, detaljert informasjon om en film, søkeresultater, skjema for å utføre søk og skrive vurderinger.

Del 2.
Startsiden og søkfunksjonen Startsiden skal ha enkelt tilgjengelig mulighet for  ̊a søke etter filmer. Dere skal denne gangen implementere søkefunksjonen ved bruk av JavaScript. En bruker kan søke (avansert søk) etter filmer basert p ̊a tittel, skuespillere, sjangere, land og regissører. Dere skal hente informasjon for søket fra database-filen “object.js”. I “index.html” er inkludert en hurtig søk (for bare tit- tel). I deres versjon, skal dere ligge ved siden av hurtigsøk, en mulighet for (lenke til)  ̊a gjøre et avansert søk.
Trailere Ikke alle filmer i databasen har en trailer. Det er bare 10 filmer som har en verdi i feltet “youtube trailer id”. Det er forventet av dere  ̊a gjøre det slik at en side skal vises p ̊a en fornuftig m ̊ate, med eller uten trailer. De som i utganspunktet har “youtube trailer id” har de følgende film id: “3823”, “3818”, “1027”, “3597”, “2274”, “2754”, “46”, “3308”, “3429”, “83”.
Bilder For  ̊a inkudere bildene i websiden, m ̊a dere lage en JavaScript funksjon som hen- ter bildene fra http://vindkast.infomedia.uib.no/mediadb/images/o/X, hvor X er første siffer n ̊ar tallet er formatert som firesifret tall. For eksempel, for  ̊a hente bildene av en film med id=“1234”, m ̊a søkefunksjonen hente bildene fra URLen http://vindkast.infomedia.uib.no/mediadb/images/o/1/1234.jpg. [...]
Reviews Dere m ̊a vise for hver film dens gjennomsnitlige vurdering, samt individu- elle vurderinger og kommentarer. Merk at mange filmer har ingen vurderinger. Dere m ̊a ogs ̊a gjøre det mulig  ̊a vurdere filmen og skrive en kommentar, men ikke implementere funksjonen (ikke ta hensyn til brukerens input).
Min liste og mine l ̊an I denne oppgaven skal dere ogs ̊a skrive to objekter som repre- senterer listen av filmene brukeren vil l ̊ane, og en liste av l ̊ante filmer. Dere m ̊a selv bestemme strukturen til objektene som representerer disse listene.
