/** Javascript that will create basically the whole front page by
creating new elements and adding information from the movies. */

var movie_id = 2274; // Global variable so that the different categories don't just repeat the same movie.

left = document.getElementsByClassName("left");

window.onload = function() {
    addMoviePicture(0);
    addMoviePicture(1);
    addMoviePicture(2);
}

/** Calls addMovieLink to add all relevant information about the movies */
function addMoviePicture(num) {

    main_bilder = document.createElement("section");
    main_bilder.className = "main_bilder";

    var i = 0;          // Limitation of 14 movies for each category.
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