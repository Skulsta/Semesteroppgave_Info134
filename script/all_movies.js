window.onload = function() {
    list_element = document.getElementById("all_movies");

    var movie_id = 830;  // The ID the loop starts at.
    var i = 0;          // Should make sure only 14 movies are shown at each category.
    while (i < 14) {
            if (movies_object[movie_id] != null) {
            movie_details = movies_object[movie_id];
        
        
    	    // prepare the link
            item_link = document.createElement("A");
            item_link.href = "show_movie.html?id=" + movie_id;


            /** If we want the movie title to be shown aswell, uncomment this.
    		link_text = document.createTextNode(movie_details["otitle"]);
            item_link.appendChild(link_text);
            */


            link_pic = document.createElement('img');
            link_pic.style.height = '200px';
            link_pic.style.width = '140px';


            var pic_id = 0;
            if (movie_id > 1000) 
                pic_id = movie_id.toString().charAt(0);


            var src = 'http://nelson.uib.no/o/' + pic_id + '/' + movie_id + '.jpg';
            link_pic.src = src;


            item_link.appendChild(link_pic);

            all_movies.appendChild(item_link);


            

            all_movies.appendChild(item_link);

            movie_id++;
            i++;
            
            }
            else movie_id = movie_id + 1;
        }
    }


function addMoviePicture() {
            item_link = document.createElement("A");
            item_link.href = "show_movie.html?id=" + movie_id;

            link_pic = document.createElement('img');
            link_pic.style.height = '200px';
            link_pic.style.width = '140px';

            var pic_id = 0;
            if (movie_id > 1000) 
                pic_id = movie_id.toString().charAt(0);
            

            var src = 'http://nelson.uib.no/o/' + pic_id + '/' + movie_id + '.jpg';
            link_pic.src = src;

            item_link.appendChild(link_pic);

            /* Want to put the picture somewhere else on the site? Edit results to your id here. */
            all_movies.appendChild(item_link); 
}