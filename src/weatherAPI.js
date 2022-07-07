const weatherAPI = (() => {
  const API_KEY = "e185190e436ac4dd5d57136155d2e9ca";
  let units = "metric";

  const fetchData = async (cityName) => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=${units}`,
      { mode: "cors" }
    );
    const json = await data.json();
    return json;
  };

  const processData = (data, cityName) => {
    return {
      cityName: cityName,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      weatherName: data.weather[0].main,
      weatherInfo: data.weather[0].description,
      windSpeed: data.wind.speed,
    };
  };

  const getCityData = async (cityName) => {
    const rawData = await fetchData(cityName);
    return processData(rawData, cityName);
  };

  const setUnits = (unit) => {
    units = unit;
  };

  return { getCityData, setUnits };
})();

export default weatherAPI;
