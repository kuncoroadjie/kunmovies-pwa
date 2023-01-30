const CONFIG = {
  KEY: process.env.API_KEY_TMDB,
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_W500_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  BASE_ORIGINAL_IMAGE_URL: 'https://image.tmdb.org/t/p/original/',
  BASE_CAST_IMAGE_URL: 'https://www.themoviedb.org/t/p/w276_and_h350_face/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'kunmovies-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
};

export default CONFIG;
