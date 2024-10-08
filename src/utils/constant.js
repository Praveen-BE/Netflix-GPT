export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg";

export const USER_PROFILE = "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

export const BG_PLAY_MOVIES = "https://api.themoviedb.org/3/movie/533535/videos?language=en-US";
export const WATCH_MOVIE_1 = "https://api.themoviedb.org/3/movie/";
export const WATCH_MOVIE_2 = "/videos?language=en-US";

export const CDN_TMDB = "https://image.tmdb.org/t/p/w500";

export const PLAYING_DATA = "https://api.themoviedb.org/3/movie/533535?api_key=";
export const WATCH_MOVIE_DATA1 = "https://api.themoviedb.org/3/movie/";
export const WATCH_MOVIE_DATA2 = "?api_key=";

export const CREDITS1 = "https://api.themoviedb.org/3/movie/";
export const CREDITS2 = "/credits";

export const NOW_PLAYING_API = "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const POPULAR_API = "https://api.themoviedb.org/3/movie/popular?&page=1";
export const TOP_RATED_API = "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const UPCOMMING_API = "https://api.themoviedb.org/3/movie/upcoming?&page=1";

export const SEARCH_TMDB = "https://api.themoviedb.org/3/search/movie?query=";

export const GEMINI_AI_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const OPTIONS_TOKEN =(TOKEN)=> {
    return {method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+TOKEN,
    }
}
};