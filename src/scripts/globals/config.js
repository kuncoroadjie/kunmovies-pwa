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
  WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
  PUSH_MSG_VAPID_PUBLIC_KEY: process.env.PUSH_MSG_VAPID_PUBLIC_KEY,
  PUSH_MSG_SUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/subscribe',
  PUSH_MSG_UNSUBSCRIBE_URL: 'https://dicoding-movie-push-notif.netlify.app/.netlify/functions/unsubscribe',
};

export default CONFIG;
