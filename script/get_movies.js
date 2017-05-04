/** Javascript that will create basically the whole front page by
creating new elements and adding information from the movies. */

var movie_id = 1410; // Global variable so that the different categories don't just repeat the same movies.

var left = document.getElementsByClassName("left");

window.onload = function() {
    addMoviePicture(0);
}

/** Adds the picture of a movie and a link to the movies' web page. */
function addMoviePicture(num) {

    main_bilder = document.createElement("section");
    main_bilder.className = "main_bilder";

    var i = 0;          // Should make sure only 5 movies are shown at each category.
    while (i < 5) {
     
     
     if (lån_object[movie_id] != null) {
         addMovieLink();

         left[num].appendChild(main_bilder);


         movie_id++;
         i++;
         
     }
     else movie_id = movie_id + 1;
 }
}