const API_KEY = `e3b7c510abba11f8292f426af585cd3b`;
const API_URL = ` https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
////////////////////////////////////////////////
const form = document.querySelector(".form");
const search = document.querySelector(".search");
const main = document.querySelector("#main");
////////////////////////////////////////////////
async function getMovies(url) {
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}
//

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const {
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img
        src="${IMG_PATH}${poster_path}"
        alt="${title}"
        />
     <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
     </div>
    <div class="overview">
        <h3>Overview</h3>
        ${overview}
    </div>
    `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) return `green`;
  else if (vote >= 5) return "orange";
  else return "red";
}
//
getMovies(API_URL);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchTem = search.value;
  if (searchTem && searchTem !== "") {
    getMovies(SEARCH_API + searchTem);
    search.value = "";
  } else {
    window.location.reload();
  }
});

//
//
//
//
//

//
//
//
//
//
//
//
//
//
//

// console.log(API_URL);
// getMovies(API_URL);
// https://api.themoviedb.org/3/search/movie?api_key=e3b7c510abba11f8292f426af585cd3b&query=Chucky
// https://api.themoviedb.org/3/search/company?api_key=e3b7c510abba11f8292f426af585cd3b&query=Chucky&page=1

// https://api.themoviedb.org/3/search/movie?api_key=e3b7c510abba11f8292f426af585cd3b&language=en-US&query=Chucky&page=1&include_adult=false
