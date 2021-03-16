const navigationEl = document.querySelector('.navigation');
console.log(navigationEl);
window.addEventListener("scroll", () => {
    console.log(document.body.scrollTop, document.documentElement.scrollTop);
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        navigationEl.style.background = "rgba(20, 20, 20, 1)";
    } else {
        // console.log("back to the top");
        navigationEl.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, .7) 10%, rgba(0, 0, 0, 0))";
    }
})

const displayedMovies = [];

const fetchData = (URL, id) => {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error: Something went wrong...");
            } else {
                return response.json();
            }
        })
        .then((data) => {
            // console.log(data);
            displayMovies(data, id);

        })
        .catch((error) => {
            console.log(error)
        });
}

const displayMovies = (data, id) => {
    const containerEl = document.getElementById(id);

    data.results.forEach((result) => {
        const { backdrop_path: img, id: imgId } = result;
        if (alreadyDisplayed(imgId)) {
            const imageEl = `<img src="https://image.tmdb.org/t/p/original/${img}" alt="">`;
            containerEl.innerHTML += imageEl;
        }
    })
}

const alreadyDisplayed = (imgID) => {
    if (!displayedMovies.includes(imgID)) {
        displayedMovies.push(imgID);
        return true;
    } else {
        return false;
    }
}

fetchData('https://api.themoviedb.org/3/discover/tv?api_key=92bcc12799d8068995c7c9650f414f3e&sort_by=popularity.desc&vote_count.gte=5000', 'row-1');

fetchData('https://api.themoviedb.org/3/trending/tv/week?api_key=92bcc12799d8068995c7c9650f414f3e', 'row-2');