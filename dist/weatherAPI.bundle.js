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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlckFQSS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxNQUFNQSxVQUFVLEdBQUcsQ0FBQyxNQUFNO0VBQ3hCLE1BQU1DLE9BQU8sR0FBRyxrQ0FBaEI7O0VBRUEsTUFBTUMsU0FBUyxHQUFHLE1BQU9DLFFBQVAsSUFBb0I7SUFDcEMsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssNkRBQytCRixRQUQvQixvQkFDaURGLE9BRGpELG9CQUV0QjtNQUFFSyxJQUFJLEVBQUU7SUFBUixDQUZzQixDQUF4QjtJQUlBLE1BQU1DLElBQUksR0FBRyxNQUFNSCxJQUFJLENBQUNHLElBQUwsRUFBbkI7SUFDQSxPQUFPQSxJQUFQO0VBQ0QsQ0FQRDs7RUFTQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0osSUFBRCxFQUFPRCxRQUFQLEtBQW9CO0lBQ3RDLE9BQU87TUFDTEEsUUFBUSxFQUFFQSxRQURMO01BRUxNLElBQUksRUFBRUwsSUFBSSxDQUFDTSxJQUFMLENBQVVELElBRlg7TUFHTEUsT0FBTyxFQUFFUCxJQUFJLENBQUNNLElBQUwsQ0FBVUUsUUFIZDtNQUlMQyxPQUFPLEVBQUVULElBQUksQ0FBQ00sSUFBTCxDQUFVSSxRQUpkO01BS0w7TUFDQUMsUUFBUSxFQUFFWCxJQUFJLENBQUNNLElBQUwsQ0FBVUssUUFOZjtNQU9MQyxXQUFXLEVBQUVaLElBQUksQ0FBQ2EsT0FBTCxDQUFhLENBQWIsRUFBZ0JQLElBUHhCO01BUUxRLFdBQVcsRUFBRWQsSUFBSSxDQUFDYSxPQUFMLENBQWEsQ0FBYixFQUFnQkUsV0FSeEI7TUFTTEMsU0FBUyxFQUFFaEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVQztJQVRoQixDQUFQO0VBV0QsQ0FaRDs7RUFjQSxNQUFNQyxXQUFXLEdBQUcsTUFBT3BCLFFBQVAsSUFBb0I7SUFDdEMsTUFBTXFCLE9BQU8sR0FBRyxNQUFNdEIsU0FBUyxDQUFDQyxRQUFELENBQS9CO0lBQ0EsT0FBT0ssV0FBVyxDQUFDZ0IsT0FBRCxFQUFVckIsUUFBVixDQUFsQjtFQUNELENBSEQ7O0VBS0EsT0FBTztJQUFFb0I7RUFBRixDQUFQO0FBQ0QsQ0FoQ2tCLEdBQW5COztBQWtDQSxpRUFBZXZCLFVBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckFQSS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHdlYXRoZXJBUEkgPSAoKCkgPT4ge1xuICBjb25zdCBBUElfS0VZID0gXCJlMTg1MTkwZTQzNmFjNGRkNWQ1NzEzNjE1NWQyZTljYVwiO1xuXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eU5hbWV9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYCxcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICAgICk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IGRhdGEuanNvbigpO1xuICAgIHJldHVybiBqc29uO1xuICB9O1xuXG4gIGNvbnN0IHByb2Nlc3NEYXRhID0gKGRhdGEsIGNpdHlOYW1lKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpdHlOYW1lOiBjaXR5TmFtZSxcbiAgICAgIHRlbXA6IGRhdGEubWFpbi50ZW1wLFxuICAgICAgdGVtcE1pbjogZGF0YS5tYWluLnRlbXBfbWluLFxuICAgICAgdGVtcE1heDogZGF0YS5tYWluLnRlbXBfbWF4LFxuICAgICAgLy8gdGVtcEZlZWxzOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgIGh1bWlkaXR5OiBkYXRhLm1haW4uaHVtaWRpdHksXG4gICAgICB3ZWF0aGVyTmFtZTogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICB3ZWF0aGVySW5mbzogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgd2luZFNwZWVkOiBkYXRhLndpbmQuc3BlZWQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBnZXRDaXR5RGF0YSA9IGFzeW5jIChjaXR5TmFtZSkgPT4ge1xuICAgIGNvbnN0IHJhd0RhdGEgPSBhd2FpdCBmZXRjaERhdGEoY2l0eU5hbWUpO1xuICAgIHJldHVybiBwcm9jZXNzRGF0YShyYXdEYXRhLCBjaXR5TmFtZSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0Q2l0eURhdGEgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXJBUEk7XG4iXSwibmFtZXMiOlsid2VhdGhlckFQSSIsIkFQSV9LRVkiLCJmZXRjaERhdGEiLCJjaXR5TmFtZSIsImRhdGEiLCJmZXRjaCIsIm1vZGUiLCJqc29uIiwicHJvY2Vzc0RhdGEiLCJ0ZW1wIiwibWFpbiIsInRlbXBNaW4iLCJ0ZW1wX21pbiIsInRlbXBNYXgiLCJ0ZW1wX21heCIsImh1bWlkaXR5Iiwid2VhdGhlck5hbWUiLCJ3ZWF0aGVyIiwid2VhdGhlckluZm8iLCJkZXNjcmlwdGlvbiIsIndpbmRTcGVlZCIsIndpbmQiLCJzcGVlZCIsImdldENpdHlEYXRhIiwicmF3RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=