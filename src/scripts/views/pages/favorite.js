import FavoriteMovieIdb from '../../data/favorite-movies-idb';
import { createMovieItemTemplate, movieFavoriteEmpty } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies"></div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    const contentContainer = document.querySelector('.content');

    if (movies.length === 0) {
      contentContainer.innerHTML = movieFavoriteEmpty();
    } else {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createMovieItemTemplate(movie);
      });
    }
  },
};

export default Favorite;
