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
/*!***********************!*\
  !*** ./src/gifAPI.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gifAPI = (() => {
  const API_KEY = "zphUIXO9rLHrGnLCltLCGtPw3xRvWYe5";

  const getGifUrl = async searchTerm => {
    const data = await fetchData(searchTerm);
    return processData(data);
  };

  const fetchData = async searchTerm => {
    const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=".concat(API_KEY, "&s=").concat(searchTerm));
    const json = await response.json();
    return json;
  };

  const processData = response => {
    return {
      title: response.data.title,
      url: response.data.images.original.url
    };
  };

  return {
    getGifUrl
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gifAPI);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lmQVBJLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLE1BQU1BLE1BQU0sR0FBRyxDQUFDLE1BQU07RUFDcEIsTUFBTUMsT0FBTyxHQUFHLGtDQUFoQjs7RUFFQSxNQUFNQyxTQUFTLEdBQUcsTUFBT0MsVUFBUCxJQUFzQjtJQUN0QyxNQUFNQyxJQUFJLEdBQUcsTUFBTUMsU0FBUyxDQUFDRixVQUFELENBQTVCO0lBQ0EsT0FBT0csV0FBVyxDQUFDRixJQUFELENBQWxCO0VBQ0QsQ0FIRDs7RUFLQSxNQUFNQyxTQUFTLEdBQUcsTUFBT0YsVUFBUCxJQUFzQjtJQUN0QyxNQUFNSSxRQUFRLEdBQUcsTUFBTUMsS0FBSywyREFDeUJQLE9BRHpCLGdCQUNzQ0UsVUFEdEMsRUFBNUI7SUFHQSxNQUFNTSxJQUFJLEdBQUcsTUFBTUYsUUFBUSxDQUFDRSxJQUFULEVBQW5CO0lBQ0EsT0FBT0EsSUFBUDtFQUNELENBTkQ7O0VBUUEsTUFBTUgsV0FBVyxHQUFJQyxRQUFELElBQWM7SUFDaEMsT0FBTztNQUNMRyxLQUFLLEVBQUVILFFBQVEsQ0FBQ0gsSUFBVCxDQUFjTSxLQURoQjtNQUVMQyxHQUFHLEVBQUVKLFFBQVEsQ0FBQ0gsSUFBVCxDQUFjUSxNQUFkLENBQXFCQyxRQUFyQixDQUE4QkY7SUFGOUIsQ0FBUDtFQUlELENBTEQ7O0VBT0EsT0FBTztJQUFFVDtFQUFGLENBQVA7QUFDRCxDQXhCYyxHQUFmOztBQTBCQSxpRUFBZUYsTUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9naWZBUEkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBnaWZBUEkgPSAoKCkgPT4ge1xuICBjb25zdCBBUElfS0VZID0gXCJ6cGhVSVhPOXJMSHJHbkxDbHRMQ0d0UHczeFJ2V1llNVwiO1xuXG4gIGNvbnN0IGdldEdpZlVybCA9IGFzeW5jIChzZWFyY2hUZXJtKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoRGF0YShzZWFyY2hUZXJtKTtcbiAgICByZXR1cm4gcHJvY2Vzc0RhdGEoZGF0YSk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKHNlYXJjaFRlcm0pID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLmdpcGh5LmNvbS92MS9naWZzL3RyYW5zbGF0ZT9hcGlfa2V5PSR7QVBJX0tFWX0mcz0ke3NlYXJjaFRlcm19YFxuICAgICk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4ganNvbjtcbiAgfTtcblxuICBjb25zdCBwcm9jZXNzRGF0YSA9IChyZXNwb25zZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogcmVzcG9uc2UuZGF0YS50aXRsZSxcbiAgICAgIHVybDogcmVzcG9uc2UuZGF0YS5pbWFnZXMub3JpZ2luYWwudXJsLFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIHsgZ2V0R2lmVXJsIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnaWZBUEk7XG4iXSwibmFtZXMiOlsiZ2lmQVBJIiwiQVBJX0tFWSIsImdldEdpZlVybCIsInNlYXJjaFRlcm0iLCJkYXRhIiwiZmV0Y2hEYXRhIiwicHJvY2Vzc0RhdGEiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInRpdGxlIiwidXJsIiwiaW1hZ2VzIiwib3JpZ2luYWwiXSwic291cmNlUm9vdCI6IiJ9