window.onload = function() {
    list_element = document.getElementById("all_movies");
    var i = 0;

   for (movie_id in movies_object){
        for (i; i < 10; i++) {
            movie_details = movies_object[movie_id];
            img_item = document.createElement("IMG");
            img_item.style.height ="200px";
            img_item.style.height ="140px";

            var pic_id = 0;
            if (movie_id > 1000) 
                pic_id = movie_id.toString().charAt(0);
            

            var src = 'http://nelson.uib.no/o/' + pic_id + '/' + movie_id + '.jpg';
            img_item.src = src;

    	// prepare the link
            item_link = document.createElement("A");
            item_link.href = "show_movie.html?id=" + movie_id;
    		link_text = document.createTextNode(movie_details["otitle"]);
            item_link.appendChild(link_text);

            item_link.appendChild(img_item);
            list_element.appendChild(item_link); 
        }      
    }
}

