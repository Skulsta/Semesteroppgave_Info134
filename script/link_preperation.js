
function addMovieLink() {



            movie_details = movies_object[movie_id];

            // prepare the link
            dropDown = document.createElement("div");
            dropDown.className = "dropDown";

            dropKnapp = document.createElement("div");
            dropKnapp.className = "dropKnapp";

            item_link = document.createElement("A");
            item_link.href = "show_movie.html?id=" + movie_id;


            forsideBilde = document.createElement('img');
            forsideBilde.className = "forsideBilde";



            var pic_id = 0;
            if (movie_id > 1000) 
                pic_id = movie_id.toString().charAt(0);


            var src = 'http://nelson.uib.no/o/' + pic_id + '/' + movie_id + '.jpg';
            forsideBilde.src = src;


            dropDownInnholdFilm = document.createElement("div");
            dropDownInnholdFilm.className = "dropDownInnholdFilm";





            /**
            details = reviews_object[movie_id];

            if (details) {
            console.log(details);
        }

            
            for (object in reviews_object) {
                if (object == movie_id) {
                    review_details = reviews_object[object];
                    rating = document.createTextNode(review_details["rating"] + "/6");

                    dropDownInnholdFilm.appendChild(rating);
                }
            }
            



            for (var object in reviews_object) {
                if (object == movie_id)
                console.log(object);
                }

                */
                var rating = 0;

                /** Retrieves rating from reviews.js. */
                for (var key in reviews_object) {
                    if (key == movie_id) {
                        if (!reviews_object.hasOwnProperty(key)) continue;

                        var object = reviews_object[key];
                        for (var property in object) {
                            if (!object.hasOwnProperty(property)) continue;

                            userinfo = object[property];

                            if (userinfo["rating"]) {
                                rating = (userinfo["rating"]);
                            } 
                        }
                    }
                }


                /** Get the star icon next to the rating. */
                star = document.createElement("img");
                star.className = "star";
                var starSrc = 'star-icon.png';
                star.src = starSrc;

                ratingItem = document.createTextNode(rating + "/6");


                /** Movie title */
                var movieTitle = document.createElement("p");
                var boldTitle = document.createElement("b");
                boldTitle.textContent = movie_details["otitle"];

                /** The movie description. Set a limit of 140 characters. */
                var description = document.createElement("p");
                content = movie_details["description"];

                if (content == null)
                    content = " [ Ingen beskrivelse ] ";

                if (content.length > 100)
                    content = content.substring(0,100) + "...";
                description.textContent = content;


                /** Add logo and link for "Vurdering" and "Min liste". */

                /** The section box that contains the elements. */
                var forsideButtons = document.createElement("section");
                forsideButtons.className = "forsideButtons";


                /** Button for my list */
                var minListeButton = document.createElement("A");
                minListeButton.className = "minListeButton";

                var minListeButtonPic = document.createElement("img");
                minListeButtonPic.className = "ikon";
                var listSrc = "pluss_icon.ico";
                minListeButtonPic.src = listSrc;

                var minListeTekst = document.createTextNode("Min liste");

                minListeButton.appendChild(minListeButtonPic);

                minListeButton.appendChild(minListeTekst);





                /** Button for review button */
                var vurdering = document.createElement("A");
                vurdering.className = "vurdering";

                var vurderingTekst = document.createTextNode("Vurdering");

                /** Get the star icon next to the rating. REPEATING MYSELF, REMEMBER TO FIX. */
                vurderingStar = document.createElement("img");
                vurderingStar.className = "star";
                vurderingStar.src = starSrc;







                /** A lot of appending children */

                vurdering.appendChild(vurderingStar);

                vurdering.appendChild(vurderingTekst);


                forsideButtons.appendChild(vurdering);

                forsideButtons.appendChild(minListeButton);

                movieTitle.appendChild(boldTitle);


                dropDownInnholdFilm.appendChild(ratingItem);

                dropDownInnholdFilm.appendChild(star);

                dropDownInnholdFilm.appendChild(movieTitle);

                dropDownInnholdFilm.appendChild(description);

                dropDownInnholdFilm.appendChild(forsideButtons);


                item_link.appendChild(forsideBilde);

                dropKnapp.appendChild(item_link);


                dropDown.appendChild(dropKnapp);

                dropDown.appendChild(dropDownInnholdFilm);


                main_bilder.appendChild(dropDown);

            }
