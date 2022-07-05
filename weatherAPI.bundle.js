/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weatherAPI = (() => {
  const API_KEY = "e185190e436ac4dd5d57136155d2e9ca";

  const fetchData = async cityName => {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&appid=").concat(API_KEY, "&units=metric"), {
      mode: "cors"
    });
    const json = await data.json();
    return json;
  };

  const processData = (data, cityName) => {
    return {
      cityName: cityName,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      // tempFeels: data.main.feels_like,
      humidity: data.main.humidity,
      weatherName: data.weather[0].main,
      weatherInfo: data.weather[0].description,
      windSpeed: data.wind.speed
    };
  };

  const getCityData = async cityName => {
    console.log(cityName);
    const rawData = await fetchData(cityName);
    return processData(rawData, cityName);
  };

  return {
    getCityData
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckFQSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQyxNQUFNO0VBQ3hCLE1BQU1DLE9BQU8sR0FBRyxrQ0FBaEI7O0VBRUEsTUFBTUMsU0FBUyxHQUFHLE1BQU9DLFFBQVAsSUFBb0I7SUFDcEMsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssNkRBQytCRixRQUQvQixvQkFDaURGLE9BRGpELG9CQUV0QjtNQUFFSyxJQUFJLEVBQUU7SUFBUixDQUZzQixDQUF4QjtJQUlBLE1BQU1DLElBQUksR0FBRyxNQUFNSCxJQUFJLENBQUNHLElBQUwsRUFBbkI7SUFDQSxPQUFPQSxJQUFQO0VBQ0QsQ0FQRDs7RUFTQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0osSUFBRCxFQUFPRCxRQUFQLEtBQW9CO0lBQ3RDLE9BQU87TUFDTEEsUUFBUSxFQUFFQSxRQURMO01BRUxNLElBQUksRUFBRUwsSUFBSSxDQUFDTSxJQUFMLENBQVVELElBRlg7TUFHTEUsT0FBTyxFQUFFUCxJQUFJLENBQUNNLElBQUwsQ0FBVUUsUUFIZDtNQUlMQyxPQUFPLEVBQUVULElBQUksQ0FBQ00sSUFBTCxDQUFVSSxRQUpkO01BS0w7TUFDQUMsUUFBUSxFQUFFWCxJQUFJLENBQUNNLElBQUwsQ0FBVUssUUFOZjtNQU9MQyxXQUFXLEVBQUVaLElBQUksQ0FBQ2EsT0FBTCxDQUFhLENBQWIsRUFBZ0JQLElBUHhCO01BUUxRLFdBQVcsRUFBRWQsSUFBSSxDQUFDYSxPQUFMLENBQWEsQ0FBYixFQUFnQkUsV0FSeEI7TUFTTEMsU0FBUyxFQUFFaEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVQztJQVRoQixDQUFQO0VBV0QsQ0FaRDs7RUFjQSxNQUFNQyxXQUFXLEdBQUcsTUFBT3BCLFFBQVAsSUFBb0I7SUFDdENxQixPQUFPLENBQUNDLEdBQVIsQ0FBWXRCLFFBQVo7SUFDQSxNQUFNdUIsT0FBTyxHQUFHLE1BQU14QixTQUFTLENBQUNDLFFBQUQsQ0FBL0I7SUFDQSxPQUFPSyxXQUFXLENBQUNrQixPQUFELEVBQVV2QixRQUFWLENBQWxCO0VBQ0QsQ0FKRDs7RUFNQSxPQUFPO0lBQUVvQjtFQUFGLENBQVA7QUFDRCxDQWpDa0IsR0FBbkI7O0FBbUNBLGlFQUFldkIsVUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQVBJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qgd2VhdGhlckFQSSA9ICgoKSA9PiB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcImUxODUxOTBlNDM2YWM0ZGQ1ZDU3MTM2MTU1ZDJlOWNhXCI7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz1tZXRyaWNgLFxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICAgKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gICAgcmV0dXJuIGpzb247XG4gIH07XG5cbiAgY29uc3QgcHJvY2Vzc0RhdGEgPSAoZGF0YSwgY2l0eU5hbWUpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY2l0eU5hbWU6IGNpdHlOYW1lLFxuICAgICAgdGVtcDogZGF0YS5tYWluLnRlbXAsXG4gICAgICB0ZW1wTWluOiBkYXRhLm1haW4udGVtcF9taW4sXG4gICAgICB0ZW1wTWF4OiBkYXRhLm1haW4udGVtcF9tYXgsXG4gICAgICAvLyB0ZW1wRmVlbHM6IGRhdGEubWFpbi5mZWVsc19saWtlLFxuICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgIHdlYXRoZXJOYW1lOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgIHdlYXRoZXJJbmZvOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICB3aW5kU3BlZWQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGdldENpdHlEYXRhID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XG4gICAgY29uc29sZS5sb2coY2l0eU5hbWUpO1xuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBmZXRjaERhdGEoY2l0eU5hbWUpO1xuICAgIHJldHVybiBwcm9jZXNzRGF0YShyYXdEYXRhLCBjaXR5TmFtZSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0Q2l0eURhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJBUEk7XG4iXSwibmFtZXMiOlsid2VhdGhlckFQSSIsIkFQSV9LRVkiLCJmZXRjaERhdGEiLCJjaXR5TmFtZSIsImRhdGEiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwicHJvY2Vzc0RhdGEiLCJ0ZW1wIiwibWFpbiIsInRlbXBNaW4iLCJ0ZW1wX21pbiIsInRlbXBNYXgiLCJ0ZW1wX21heCIsImh1bWlkaXR5Iiwid2VhdGhlck5hbWUiLCJ3ZWF0aGVyIiwid2VhdGhlckluZm8iLCJkZXNjcmlwdGlvbiIsIndpbmRTcGVlZCIsIndpbmQiLCJzcGVlZCIsImdldENpdHlEYXRhIiwiY29uc29sZSIsImxvZyIsInJhd0RhdGEiXSwic291cmNlUm9vdCI6IiJ9