const navigationEl = document.querySelector('.navigation');

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