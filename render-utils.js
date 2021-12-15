export function renderMovie(movie) {
    const a = document.createElement('a');
    const movieDiv = document.createElement('div');
    const titleEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    
    a.classList.add('details-link');
    movieDiv.classList.add('movie-container');
    titleEl.classList.add('title');
    genreEl.classList.add('genre');
    ratingEl.classList.add('rating');

    a.href = `./details/?id=${movie.id}`;
    titleEl.textContent = movie.Title;
    genreEl.textContent = `Genre: ${movie.genre}`;
    ratingEl.textContent = `Rating(out of 5): ${movie.rating}`;

    movieDiv.append(titleEl, genreEl, ratingEl);

    a.append(movieDiv);

    return a;
}

export function renderMovieDetail(movie) {
    const movieDiv = document.createElement('div');
    const titleEl = document.createElement('p');
    const genreEl = document.createElement('p');
    const ratingEl = document.createElement('p');
    const yearEl = document.createElement('p');
    const directorEl = document.createElement('p');
    const synopsisEl = document.createElement('p');

    movieDiv.classList.add('movie-details');
    titleEl.classList.add('title');
    genreEl.classList.add('genre');
    ratingEl.classList.add('rating');
    yearEl.classList.add('release-year');
    directorEl.classList.add('director');
    synopsisEl.classList.add('synopsis');

    titleEl.textContent = movie.Title;
    genreEl.textContent = `Genre: ${movie.genre}`;
    ratingEl.textContent = `Rating(out of 5): ${movie.rating}`;
    yearEl.textContent = `Released: ${movie.Released}`;
    directorEl.textContent = `Director: ${movie.Director}`;
    synopsisEl.textContent = `"${movie.Synopsis}"`;

    movieDiv.append(titleEl, genreEl, ratingEl, yearEl, directorEl, synopsisEl);

    return movieDiv;
}

