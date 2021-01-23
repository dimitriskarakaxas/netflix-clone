// Navigation Scroll feature
const navigation = document.getElementById("navigation");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    navigation.style.transition = "background 0.2s ease-in";
    navigation.style.background = "rgba(20, 20, 20, 1)";
  } else {
    navigation.style.transition = "background 0.4s 0.15s";
    navigation.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0)";
  }
});


const callFetch = function () {
  const API_KEY = "92bcc12799d8068995c7c9650f414f3e";
  addTvShows(API_KEY);
}

const addTvShows = function (API_KEY) {
  fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&sort_by=vote_average.desc&vote_count.gte=5000`)
    .then(response => {
      // console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong")
      }
    })
    .then(data => {
      // console.log(data);
      displayTvShows(data);
    })
    .catch(error => {
      console.log(error);
    });
}

const displayTvShows = function (tvShows) {
  const tvShowsEl = document.getElementById("tvShows");
  tvShows.results.forEach(tvShow => {
    const imgHtml = `<img src="https://image.tmdb.org/t/p/original${tvShow.backdrop_path}" alt="${tvShow.original_name}">`;
    tvShowsEl.innerHTML += imgHtml;
  });
}

const findGenreID = function (genre_name) {
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=92bcc12799d8068995c7c9650f414f3e&language=en-US`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong!");
      }

    })
    .then(data => {
      // console.log(data);
      const genre_obj = data.genres.filter(genre => genre.name === genre_name);
      console.log(genre_obj);
    })
    .catch(error => {
      console.log(error);
    })
}


// function calls
callFetch();
findGenreID("Drama");

// Giving back the GENRES
//  https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

