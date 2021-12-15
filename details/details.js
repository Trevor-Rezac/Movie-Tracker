import { getMovie } from '../fetch-utils.js';
import { renderMovieDetail } from '../render-utils.js';

const detailsContainer = document.querySelector('.movie-details-container');

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const movie = await getMovie(id);

    const movieEl = renderMovieDetail(movie);
    detailsContainer.append(movieEl);
});