const navigation = document.getElementById("navigation");



window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      navigation.style.background = "rgba(20, 20, 20, 1)";
    } else {
		  navigation.style.background = "rgba(20, 20, 20, 0.1)";
    }
});


fetch("https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213")
  .then(response => {
    if(response.ok) return response.json();
    throw new Error("Something Happened!");
  })
  .then(data => {
    console.log(data);
    addMovies(data.results);
  })
  .catch(error => {
    console.log(error);
  });


function addMovies(movies) {
  const tvShowsEl= document.getElementById("tvShows");
  tvShowsEl.innerHTML = "";
  movies.forEach(movie => {
    const html = `<img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}" alt="">`
    tvShowsEl.innerHTML += html;
  });
}

// showMovies = (movies, element_selector, path_type ) => {
//   var moviesEl = document.querySelector(element_selector);
//   for(var movie of movies.results){
//       var imageElement = document.createElement('img');
//       imageElement.setAttribute('data-id', movie.id);

//       imageElement.src = `https://image.tmdb.org/t/p/original${movie[path_type]}`;
      
//       imageElement.addEventListener('click', (e)=>{
//           handleMovieSelection(e); 
//       });
//       moviesEl.appendChild(imageElement);
//   }
// }
