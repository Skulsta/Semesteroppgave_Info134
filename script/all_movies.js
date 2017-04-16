/** Javascript that will create basically the whole front page by
creating new elements and adding information from the movies. */

var movie_id = 2345; // Global variable so that the different categories don't just repeat the same movies.


window.onload = function() {
    addMoviePicture();

    }

/** Adds the picture of a movie and a link to the movies' web page. */
function addMoviePicture() {
    left = document.getElementsByClassName("left");

    main_bilder = document.createElement("section");
    main_bilder.className = "main_bilder";

    var i = 0;          // Should make sure only 14 movies are shown at each category.
    while (i < 14) {
            if (movies_object[movie_id] != null) {
            movie_details = movies_object[movie_id];

            // prepare the link
            dropDown = document.createElement("div");
            dropDown.className = "dropDown";

            dropDownKnapp = document.createElement("div");
            dropDownKnapp.className = "dropDownKnapp";

            item_link = document.createElement("A");
            item_link.href = "show_movie.html?id=" + movie_id;


            /** If we want the movie title to be shown aswell, uncomment this.
            link_text = document.createTextNode(movie_details["otitle"]);
            item_link.appendChild(link_text);
            */


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

            if (content.length > 140)
                content = content.substring(0,140) + "...";
            description.textContent = content;


            /** A lot of appending children */

            movieTitle.appendChild(boldTitle);

            dropDownInnholdFilm.appendChild(ratingItem);

            dropDownInnholdFilm.appendChild(star);

            dropDownInnholdFilm.appendChild(movieTitle);

            dropDownInnholdFilm.appendChild(description);


            item_link.appendChild(forsideBilde);

            dropDownKnapp.appendChild(item_link);


            dropDown.appendChild(dropDownKnapp);

            dropDown.appendChild(dropDownInnholdFilm);


            main_bilder.appendChild(dropDown);

            left[0].appendChild(main_bilder);


            movie_id++;
            i++;
            
            }
            else movie_id = movie_id + 1;
        }
}


function getRating() {

}