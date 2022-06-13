const Base_API_URL = "https://api.themoviedb.org/3";

const API_KEY = "0cbbba603989a0d60607543a31e38ba9";

export const getTvShows = () => {
  try {
    const fetchURLs = [
      fetch(
        `${Base_API_URL}/discover/tv?language=en-US&with_watch_providers=8&watch_region=CA&api_key=${API_KEY}`
      ),

      fetch(
        `${Base_API_URL}/discover/tv?language=en-US&with_watch_providers=230&watch_region=CA&api_key=${API_KEY}`
      ),

      fetch(
        `${Base_API_URL}/discover/tv?language=en-US&with_watch_providers=337&watch_region=CA&api_key=${API_KEY}`
      ),

      fetch(
        `${Base_API_URL}/discover/tv?language=en-US&with_watch_providers=350&watch_region=CA&api_key=${API_KEY}`
      ),
    ];

    let result = Promise.all(fetchURLs).then((responses) => {
      return Promise.all(responses.map((response) => response.json()));
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getTvShow = (id) => {
  try {
    const fetchURL = fetch(
      `${Base_API_URL}/tv/${id}?language=en-US&api_key=${API_KEY}`
    );

    let result = fetchURL.then((response) => response.json());

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const querySearch = (query) => {
  try {
    const fetchURL = fetch(
      `${Base_API_URL}/search/tv?language=en-US&query=${query}&api_key=${API_KEY}`
    );

    let result = fetchURL.then((response) => response.json());

    return result;
  } catch (error) {
    console.log(error);
  }
};
