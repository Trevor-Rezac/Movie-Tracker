// import functions and grab DOM elements
import { getMovies } from './fetch-utils.js';
import { renderMovie } from './render-utils.js';

const movieListEL = document.querySelector('.movie-list');

window.addEventListener('load', async() => {
    const movies = await getMovies();

    for (let movie of movies) {
        const movieEl = renderMovie(movie);
        movieListEL.append(movieEl);
    }
});
