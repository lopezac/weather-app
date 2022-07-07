import weatherAPI from "./weatherAPI.js";
import gifAPI from "./gifAPI.js";
import SearchForm from "./searchForm.js";
import ChangeGifs from "./changeGifs.js";

import "./styles.css";
import "modern-normalize";

(() => {
  const searchForm = SearchForm(weatherAPI);
  const changeGifs = ChangeGifs(gifAPI);
  const content = document.querySelector(".content");
  const gifRelated = document.querySelector(".gif-related");

  const searchBtn = document.querySelector(".search-city-btn");
  searchBtn.addEventListener("click", async () => {
    await searchForm.getData();
    changeGifs.changeBackground();
    await changeGifs.changeGif();
    checkIfShowContent();
  });

  const showContent = () => {
    content.classList.remove("hidden");
    gifRelated.classList.remove("hidden");
  };

  const hideContent = () => {
    content.classList.add("hidden");
    gifRelated.classList.add("hidden");
  };

  const checkIfShowContent = () => {
    hideContent();
    if (searchForm.isWeatherValid()) showContent();
  };
})();
