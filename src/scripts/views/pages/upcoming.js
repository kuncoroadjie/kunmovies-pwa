import TheMovieDbSource from '../../data/tmdb-source';

const Upcoming = {
  async render() {
    return `
    <div class="content">
        <h2 class="content__heading">Upcoming in Cinema</h2>
    </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    console.log(movies);
  },
};

export default Upcoming;
