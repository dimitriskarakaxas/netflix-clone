// Navigation Scroll feature
// const navigation = document.getElementById("navigation");

// window.addEventListener("scroll", () => {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     navigation.style.transition = "background 0.2s ease-in";
//     navigation.style.background = "rgba(20, 20, 20, 1)";
//   } else {
//     navigation.style.transition = "background 0.4s 0.15s";
//     navigation.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0)";
//   }
// });


const alreadyDisplayed = [];

const getPopular = function () {
  const popularURL = "https://api.themoviedb.org/3/discover/tv?api_key=92bcc12799d8068995c7c9650f414f3e&sort_by=vote_average.desc&vote_count.gte=5000";
  callFetch(popularURL, "popular");
}

const getTrending = function () {
  const trendingURL = "https://api.themoviedb.org/3/trending/tv/week?api_key=92bcc12799d8068995c7c9650f414f3e";
  callFetch(trendingURL, "trending")
}

const callFetch = function (URL, id) {
  console.log(URL);
  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error("Something went wrong")
      } else {
        return response.json();
      }
    })
    .then(data => {
      displayMovies(data, id);
    })
    .catch(error => {
      console.log(error);
    });
}

// Check if a movie is already displayed
const movieIsNotDisplayed = function (movieID) {
  // push movie_id in the array when is NOT DISPLAYED
  if (!alreadyDisplayed.includes(movieID)) {
    alreadyDisplayed.push(movieID);
    return true; // When the movie is not in the [alreadyDisplayed] array
  }
  return false; // When the movie is already displayed
}

const displayMovies = function (data, id) {
  const containerEL = document.getElementById(id);

  data.results.forEach(movie => {
    if (movieIsNotDisplayed(movie.id)) {
      const imageEl = ` <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="${id}">`;
      containerEL.innerHTML += imageEl;
    }
  });
  console.log(alreadyDisplayed);
};


getPopular();
getTrending();

//  https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US

