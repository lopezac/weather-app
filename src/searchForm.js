import { format } from "date-fns";

const searchForm = (weatherAPI) => {
  const searchInput = document.getElementById("citySearch");
  const cityTitle = document.querySelector(".city-name");
  const datePara = document.querySelector(".today-date");
  const weatherNamePara = document.querySelector(".weather-name");
  const weatherInfoPara = document.querySelector(".weather-info");
  const windPara = document.querySelector(".wind");
  const humidityPara = document.querySelector(".humidity");
  const tempPara = document.querySelector(".temp");
  const minTempPara = document.querySelector(".min-temp");
  const maxTempPara = document.querySelector(".max-temp");

  const getData = async () => {
    const cityName = searchInput.value;
    const cityData = await weatherAPI.getCityData(cityName);
    await updateWeatherData(cityData);
  };

  const updateWeatherData = (data) => {
    cityTitle.textContent = data.cityName;
    weatherNamePara.textContent = data.weatherName;
    weatherInfoPara.textContent = data.weatherInfo;
    windPara.textContent = `Wind: ${data.windSpeed} km/h`;
    humidityPara.textContent = `Humidity: ${data.humidity}%`;
    tempPara.textContent = `Temperature: ${data.temp}`;
    minTempPara.textContent = `Min temperature: ${data.tempMin}`;
    maxTempPara.textContent = `Max temperature: ${data.tempMax}`;
    datePara.textContent = getTodayDate();
  };

  const getTodayDate = () => {
    const weekDay = format(new Date(Date.now()), "EEEE");
    const hour = format(new Date(Date.now()), "p");
    return `${weekDay} ${hour}`;
  };

  return { getData };
};

export default searchForm;
