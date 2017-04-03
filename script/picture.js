window.onload = function(){
  bilde = document.getElementById('forsideBilde')
  var id = get_query_string_parameters();

function addMoviePicture() {
       		image = document.createElement('img');
       		link_pic.style.height = '200px';
       		link_pic.style.width = '140px';

       		var pic_id = 0;
       		if (movie_id > 1000) 
       			pic_id = movie_id.toString().charAt(0);
       		

    		var src = 'http://nelson.uib.no/o/' + pic_id + '/' + movie_id + '.jpg';
    		link_pic.src = src;

    		bilde.appendChild(image);

}
}