import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/tmdb-source';
import { createMovieDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const cast = await TheMovieDbSource.castMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    movieContainer.innerHTML = createMovieDetailTemplate(movie, cast);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
