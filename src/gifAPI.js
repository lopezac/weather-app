const gifAPI = (() => {
  const API_KEY = "zphUIXO9rLHrGnLCltLCGtPw3xRvWYe5";

  const getGifUrl = async (searchTerm) => {
    const data = await fetchData(searchTerm);
    return processData(data);
  };

  const fetchData = async (searchTerm) => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${searchTerm}`
    );
    const json = await response.json();
    return json;
  };

  const processData = (response) => {
    return {
      title: response.data.title,
      url: response.data.images.original.url,
    };
  };

  return { getGifUrl };
})();

export default gifAPI;
