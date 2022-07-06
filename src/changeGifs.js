const changeGifs = (gifAPI) => {
  const weatherNamePara = document.querySelector(".weather-name");
  const gifHolder = document.querySelector(".weather-gif");
  const mainDiv = document.querySelector(".main-div");

  const changeGif = async () => {
    const weatherName = weatherNamePara.textContent;
    if (weatherName === "") return;
    const imgData = await gifAPI.getGifUrl(weatherName);
    gifHolder.src = imgData.url;
    gifHolder.alt = imgData.title;
  };

  const changeBackground = () => {
    const weatherName = weatherNamePara.textContent.toLowerCase();
    if (weatherName === "clear") toggleColor("color-1");
    else if (weatherName === "clouds") toggleColor("color-2");
    else if (weatherName === "drizzle") toggleColor("color-3");
    else if (weatherName === "thunderstorm") toggleColor("color-4");
    else if (weatherName === "mist") toggleColor("color-5");
    else if (weatherName === "rain") toggleColor("color-6");
  };

  const toggleColor = (colorSet) => {
    mainDiv.classList.remove(mainDiv.classList[1]);
    mainDiv.classList.add(colorSet);
  };

  return { changeGif, changeBackground };
};

export default changeGifs;
