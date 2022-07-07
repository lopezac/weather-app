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
  let units = "metric";

  const fetchData = async cityName => {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(cityName, "&appid=").concat(API_KEY, "&units=").concat(units), {
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
      humidity: data.main.humidity,
      weatherName: data.weather[0].main,
      weatherInfo: data.weather[0].description,
      windSpeed: data.wind.speed
    };
  };

  const getCityData = async cityName => {
    const rawData = await fetchData(cityName);
    return processData(rawData, cityName);
  };

  const setUnits = unit => {
    units = unit;
  };

  return {
    getCityData,
    setUnits
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckFQSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQyxNQUFNO0VBQ3hCLE1BQU1DLE9BQU8sR0FBRyxrQ0FBaEI7RUFDQSxJQUFJQyxLQUFLLEdBQUcsUUFBWjs7RUFFQSxNQUFNQyxTQUFTLEdBQUcsTUFBT0MsUUFBUCxJQUFvQjtJQUNwQyxNQUFNQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyw2REFDK0JGLFFBRC9CLG9CQUNpREgsT0FEakQsb0JBQ2tFQyxLQURsRSxHQUV0QjtNQUFFSyxJQUFJLEVBQUU7SUFBUixDQUZzQixDQUF4QjtJQUlBLE1BQU1DLElBQUksR0FBRyxNQUFNSCxJQUFJLENBQUNHLElBQUwsRUFBbkI7SUFDQSxPQUFPQSxJQUFQO0VBQ0QsQ0FQRDs7RUFTQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0osSUFBRCxFQUFPRCxRQUFQLEtBQW9CO0lBQ3RDLE9BQU87TUFDTEEsUUFBUSxFQUFFQSxRQURMO01BRUxNLElBQUksRUFBRUwsSUFBSSxDQUFDTSxJQUFMLENBQVVELElBRlg7TUFHTEUsT0FBTyxFQUFFUCxJQUFJLENBQUNNLElBQUwsQ0FBVUUsUUFIZDtNQUlMQyxPQUFPLEVBQUVULElBQUksQ0FBQ00sSUFBTCxDQUFVSSxRQUpkO01BS0xDLFFBQVEsRUFBRVgsSUFBSSxDQUFDTSxJQUFMLENBQVVLLFFBTGY7TUFNTEMsV0FBVyxFQUFFWixJQUFJLENBQUNhLE9BQUwsQ0FBYSxDQUFiLEVBQWdCUCxJQU54QjtNQU9MUSxXQUFXLEVBQUVkLElBQUksQ0FBQ2EsT0FBTCxDQUFhLENBQWIsRUFBZ0JFLFdBUHhCO01BUUxDLFNBQVMsRUFBRWhCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUM7SUFSaEIsQ0FBUDtFQVVELENBWEQ7O0VBYUEsTUFBTUMsV0FBVyxHQUFHLE1BQU9wQixRQUFQLElBQW9CO0lBQ3RDLE1BQU1xQixPQUFPLEdBQUcsTUFBTXRCLFNBQVMsQ0FBQ0MsUUFBRCxDQUEvQjtJQUNBLE9BQU9LLFdBQVcsQ0FBQ2dCLE9BQUQsRUFBVXJCLFFBQVYsQ0FBbEI7RUFDRCxDQUhEOztFQUtBLE1BQU1zQixRQUFRLEdBQUlDLElBQUQsSUFBVTtJQUN6QnpCLEtBQUssR0FBR3lCLElBQVI7RUFDRCxDQUZEOztFQUlBLE9BQU87SUFBRUgsV0FBRjtJQUFlRTtFQUFmLENBQVA7QUFDRCxDQXBDa0IsR0FBbkI7O0FBc0NBLGlFQUFlMUIsVUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyQVBJLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qgd2VhdGhlckFQSSA9ICgoKSA9PiB7XG4gIGNvbnN0IEFQSV9LRVkgPSBcImUxODUxOTBlNDM2YWM0ZGQ1ZDU3MTM2MTU1ZDJlOWNhXCI7XG4gIGxldCB1bml0cyA9IFwibWV0cmljXCI7XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKGNpdHlOYW1lKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5TmFtZX0mYXBwaWQ9JHtBUElfS0VZfSZ1bml0cz0ke3VuaXRzfWAsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgICApO1xuICAgIGNvbnN0IGpzb24gPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbiAgfTtcblxuICBjb25zdCBwcm9jZXNzRGF0YSA9IChkYXRhLCBjaXR5TmFtZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjaXR5TmFtZTogY2l0eU5hbWUsXG4gICAgICB0ZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICAgIHRlbXBNaW46IGRhdGEubWFpbi50ZW1wX21pbixcbiAgICAgIHRlbXBNYXg6IGRhdGEubWFpbi50ZW1wX21heCxcbiAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICB3ZWF0aGVyTmFtZTogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICB3ZWF0aGVySW5mbzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgd2luZFNwZWVkOiBkYXRhLndpbmQuc3BlZWQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBnZXRDaXR5RGF0YSA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBmZXRjaERhdGEoY2l0eU5hbWUpO1xuICAgIHJldHVybiBwcm9jZXNzRGF0YShyYXdEYXRhLCBjaXR5TmFtZSk7XG4gIH07XG5cbiAgY29uc3Qgc2V0VW5pdHMgPSAodW5pdCkgPT4ge1xuICAgIHVuaXRzID0gdW5pdDtcbiAgfTtcblxuICByZXR1cm4geyBnZXRDaXR5RGF0YSwgc2V0VW5pdHMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJBUEk7XG4iXSwibmFtZXMiOlsid2VhdGhlckFQSSIsIkFQSV9LRVkiLCJ1bml0cyIsImZldGNoRGF0YSIsImNpdHlOYW1lIiwiZGF0YSIsImZldGNoIiwibW9kZSIsImpzb24iLCJwcm9jZXNzRGF0YSIsInRlbXAiLCJtYWluIiwidGVtcE1pbiIsInRlbXBfbWluIiwidGVtcE1heCIsInRlbXBfbWF4IiwiaHVtaWRpdHkiLCJ3ZWF0aGVyTmFtZSIsIndlYXRoZXIiLCJ3ZWF0aGVySW5mbyIsImRlc2NyaXB0aW9uIiwid2luZFNwZWVkIiwid2luZCIsInNwZWVkIiwiZ2V0Q2l0eURhdGEiLCJyYXdEYXRhIiwic2V0VW5pdHMiLCJ1bml0Il0sInNvdXJjZVJvb3QiOiIifQ==