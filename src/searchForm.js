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
  const tempSelectors = document.querySelectorAll(".temperature-selector > p");

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

  const isWeatherValid = () => {
    return cityTitle.textContent !== "";
  };

  const getTodayDate = () => {
    const weekDay = format(new Date(Date.now()), "EEEE");
    const hour = format(new Date(Date.now()), "p");
    return `${weekDay} ${hour}`;
  };

  const listenTempSelectors = () => {
    for (const tempSelector of tempSelectors) {
      tempSelector.addEventListener("click", async (e) => {
        toggleTempSelector(e.target);
        await getData();
      });
    }
  };

  const toggleTempSelector = (tempSelector) => {
    if (tempSelector.classList.contains("c-selector")) {
      weatherAPI.setUnits("metric");
      toggleSelect(tempSelector, "f-selector");
    } else {
      weatherAPI.setUnits("imperial");
      toggleSelect(tempSelector, "c-selector");
    }
  };

  const toggleSelect = (tempSelector, otherTemp) => {
    const otherTempSelector = document.querySelector(`.${otherTemp}`);
    otherTempSelector.classList.remove("selected");
    tempSelector.classList.add("selected");
  };

  listenTempSelectors();

  return { getData, isWeatherValid };
};

export default searchForm;
