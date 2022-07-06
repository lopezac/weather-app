import weatherAPI from "./weatherAPI.js";
import gifAPI from "./gifAPI.js";
import SearchForm from "./searchForm.js";
import ChangeGifs from "./changeGifs.js";

import "./styles.css";
import "modern-normalize";

const searchForm = SearchForm(weatherAPI);
const changeGifs = ChangeGifs(gifAPI);

const searchBtn = document.querySelector(".search-city-btn");
searchBtn.addEventListener("click", async () => {
  await searchForm.getData();
  changeGifs.changeBackground();
  await changeGifs.changeGif();
});
