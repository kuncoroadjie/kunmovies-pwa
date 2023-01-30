import TheMovieDbSource from '../../data/tmdb-source';

const NowPlaying = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Now Playing in Cinema</h2>
    </div>
  `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
  },
};

export default NowPlaying;
