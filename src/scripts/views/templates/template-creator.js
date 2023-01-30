import CONFIG from '../../globals/config';

const getGenre = (genre) => `<p class="movie__genre">${genre.name}</p>`;

const getCast = (actor) => `
  <div class="movie__cast">
    <img src=${actor.profile_path ? CONFIG.BASE_CAST_IMAGE_URL + actor.profile_path : 'https://i.ibb.co/nk4TXHF/Group-12.png'} alt="${actor.name}"/>
    <b>${actor.name}</b>
    <p>${actor.character}</p>
  </div>
`;

const getColor = (vote) => {
  if (vote >= 8) {
    return '#4ADEB7';
  } if (vote >= 5) {
    return '#FFCD4D';
  } if (vote < 5) {
    return '#FF5740';
  }
  return 0;
};

const createMovieDetailTemplate = (movie, cast) => `
  <div class="movie__backdrop" style="background-image: url(${CONFIG.BASE_ORIGINAL_IMAGE_URL + movie.backdrop_path})">
    <div class="movie__backdrop-overlay">
      <div class="movie__poster">
        <img src="${CONFIG.BASE_W500_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
      </div>
      <div class="movie__info">
        <h1 class="movie__title">${movie.title}</h1>
        <div class="movie__genre-list">
          ${movie.genres.map(getGenre).join(' ')}
        </div>
          <h3>Rating <span class="movie-item__header__rating__score" style="color: ${getColor(movie.vote_average)}"> ${movie.vote_average.toFixed(1)}</h3>
        <h3>Release Date</h3>
        <p>${movie.release_date}</p>
        <h3>Duration</h3>
        <p>${movie.runtime} minutes</p>
        <h3>Overview</h3>
        <p>${movie.overview}</p
      </div>
      <h3>Cast</h3>
      <div class="movie__cast-list">
        ${cast.cast.map(getCast).join('')}
      </div>
    </div>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <div class="movie-item__header__rating" style="background-color: ${getColor(movie.vote_average)}">
        <span class="movie-item__header__rating__score">${movie.vote_average.toFixed(1)}</span>
      </div>
      <img class="movie-item__header__poster" alt="${movie.title}"
           src="${movie.poster_path ? CONFIG.BASE_W500_IMAGE_URL + movie.poster_path : 'https://i.ibb.co/S0N5njf/no-poster.png'}">
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
      <p>${movie.release_date}</p>
    </div>
  </div>
`;

export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
};
