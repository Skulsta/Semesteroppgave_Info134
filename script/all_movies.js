/** Javascript that will create basically the whole front page by
creating new elements and adding information from the movies. */

var movie_id = 2345; // Global variable so that the different categories don't just repeat the same movies.

left = document.getElementsByClassName("left");

window.onload = function() {
    addMoviePicture(0);
    addMoviePicture(1);
    addMoviePicture(2);
}

/** Adds the picture of a movie and a link to the movies' web page. */
function addMoviePicture(num) {

    main_bilder = document.createElement("section");
    main_bilder.className = "main_bilder";

    var i = 0;          // Should make sure only 14 movies are shown at each category.
    while (i < 14) {
           
           if (movies_object[movie_id] != null) {
           addMovieLink();

            left[num].appendChild(main_bilder);


            movie_id++;
            i++;
            
            }
            else movie_id = movie_id + 1;
        }
    }