/** Javascript that will create basically the whole front page by
creating new elements and adding information from the movies. */

var movie_id = 830; // Global variable so that the different categories don't just repeat the same movies.


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

            rating = movie_details["rating"];

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


            item_link.appendChild(forsideBilde);

            dropDownKnapp.appendChild(item_link);

            dropDown.appendChild(dropDownKnapp);

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