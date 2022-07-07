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
  !*** ./src/changeGifs.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const changeGifs = gifAPI => {
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
    if (weatherName === "clear") toggleColor("color-1");else if (weatherName === "clouds") toggleColor("color-2");else if (weatherName === "drizzle") toggleColor("color-3");else if (weatherName === "thunderstorm") toggleColor("color-4");else if (weatherName === "mist") toggleColor("color-5");else if (weatherName === "rain") toggleColor("color-6");
  };

  const toggleColor = colorSet => {
    mainDiv.classList.remove(mainDiv.classList[1]);
    mainDiv.classList.add(colorSet);
  };

  return {
    changeGif,
    changeBackground
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeGifs);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlR2lmcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxNQUFNQSxVQUFVLEdBQUlDLE1BQUQsSUFBWTtFQUM3QixNQUFNQyxlQUFlLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUF4QjtFQUNBLE1BQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWxCO0VBQ0EsTUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7O0VBRUEsTUFBTUcsU0FBUyxHQUFHLFlBQVk7SUFDNUIsTUFBTUMsV0FBVyxHQUFHTixlQUFlLENBQUNPLFdBQXBDO0lBQ0EsSUFBSUQsV0FBVyxLQUFLLEVBQXBCLEVBQXdCO0lBQ3hCLE1BQU1FLE9BQU8sR0FBRyxNQUFNVCxNQUFNLENBQUNVLFNBQVAsQ0FBaUJILFdBQWpCLENBQXRCO0lBQ0FILFNBQVMsQ0FBQ08sR0FBVixHQUFnQkYsT0FBTyxDQUFDRyxHQUF4QjtJQUNBUixTQUFTLENBQUNTLEdBQVYsR0FBZ0JKLE9BQU8sQ0FBQ0ssS0FBeEI7RUFDRCxDQU5EOztFQVFBLE1BQU1DLGdCQUFnQixHQUFHLE1BQU07SUFDN0IsTUFBTVIsV0FBVyxHQUFHTixlQUFlLENBQUNPLFdBQWhCLENBQTRCUSxXQUE1QixFQUFwQjtJQUNBLElBQUlULFdBQVcsS0FBSyxPQUFwQixFQUE2QlUsV0FBVyxDQUFDLFNBQUQsQ0FBWCxDQUE3QixLQUNLLElBQUlWLFdBQVcsS0FBSyxRQUFwQixFQUE4QlUsV0FBVyxDQUFDLFNBQUQsQ0FBWCxDQUE5QixLQUNBLElBQUlWLFdBQVcsS0FBSyxTQUFwQixFQUErQlUsV0FBVyxDQUFDLFNBQUQsQ0FBWCxDQUEvQixLQUNBLElBQUlWLFdBQVcsS0FBSyxjQUFwQixFQUFvQ1UsV0FBVyxDQUFDLFNBQUQsQ0FBWCxDQUFwQyxLQUNBLElBQUlWLFdBQVcsS0FBSyxNQUFwQixFQUE0QlUsV0FBVyxDQUFDLFNBQUQsQ0FBWCxDQUE1QixLQUNBLElBQUlWLFdBQVcsS0FBSyxNQUFwQixFQUE0QlUsV0FBVyxDQUFDLFNBQUQsQ0FBWDtFQUNsQyxDQVJEOztFQVVBLE1BQU1BLFdBQVcsR0FBSUMsUUFBRCxJQUFjO0lBQ2hDYixPQUFPLENBQUNjLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCZixPQUFPLENBQUNjLFNBQVIsQ0FBa0IsQ0FBbEIsQ0FBekI7SUFDQWQsT0FBTyxDQUFDYyxTQUFSLENBQWtCRSxHQUFsQixDQUFzQkgsUUFBdEI7RUFDRCxDQUhEOztFQUtBLE9BQU87SUFBRVosU0FBRjtJQUFhUztFQUFiLENBQVA7QUFDRCxDQTdCRDs7QUErQkEsaUVBQWVoQixVQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NoYW5nZUdpZnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjaGFuZ2VHaWZzID0gKGdpZkFQSSkgPT4ge1xuICBjb25zdCB3ZWF0aGVyTmFtZVBhcmEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItbmFtZVwiKTtcbiAgY29uc3QgZ2lmSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWdpZlwiKTtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1kaXZcIik7XG5cbiAgY29uc3QgY2hhbmdlR2lmID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHdlYXRoZXJOYW1lID0gd2VhdGhlck5hbWVQYXJhLnRleHRDb250ZW50O1xuICAgIGlmICh3ZWF0aGVyTmFtZSA9PT0gXCJcIikgcmV0dXJuO1xuICAgIGNvbnN0IGltZ0RhdGEgPSBhd2FpdCBnaWZBUEkuZ2V0R2lmVXJsKHdlYXRoZXJOYW1lKTtcbiAgICBnaWZIb2xkZXIuc3JjID0gaW1nRGF0YS51cmw7XG4gICAgZ2lmSG9sZGVyLmFsdCA9IGltZ0RhdGEudGl0bGU7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlQmFja2dyb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyTmFtZSA9IHdlYXRoZXJOYW1lUGFyYS50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICh3ZWF0aGVyTmFtZSA9PT0gXCJjbGVhclwiKSB0b2dnbGVDb2xvcihcImNvbG9yLTFcIik7XG4gICAgZWxzZSBpZiAod2VhdGhlck5hbWUgPT09IFwiY2xvdWRzXCIpIHRvZ2dsZUNvbG9yKFwiY29sb3ItMlwiKTtcbiAgICBlbHNlIGlmICh3ZWF0aGVyTmFtZSA9PT0gXCJkcml6emxlXCIpIHRvZ2dsZUNvbG9yKFwiY29sb3ItM1wiKTtcbiAgICBlbHNlIGlmICh3ZWF0aGVyTmFtZSA9PT0gXCJ0aHVuZGVyc3Rvcm1cIikgdG9nZ2xlQ29sb3IoXCJjb2xvci00XCIpO1xuICAgIGVsc2UgaWYgKHdlYXRoZXJOYW1lID09PSBcIm1pc3RcIikgdG9nZ2xlQ29sb3IoXCJjb2xvci01XCIpO1xuICAgIGVsc2UgaWYgKHdlYXRoZXJOYW1lID09PSBcInJhaW5cIikgdG9nZ2xlQ29sb3IoXCJjb2xvci02XCIpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZUNvbG9yID0gKGNvbG9yU2V0KSA9PiB7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QucmVtb3ZlKG1haW5EaXYuY2xhc3NMaXN0WzFdKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoY29sb3JTZXQpO1xuICB9O1xuXG4gIHJldHVybiB7IGNoYW5nZUdpZiwgY2hhbmdlQmFja2dyb3VuZCB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlR2lmcztcbiJdLCJuYW1lcyI6WyJjaGFuZ2VHaWZzIiwiZ2lmQVBJIiwid2VhdGhlck5hbWVQYXJhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2lmSG9sZGVyIiwibWFpbkRpdiIsImNoYW5nZUdpZiIsIndlYXRoZXJOYW1lIiwidGV4dENvbnRlbnQiLCJpbWdEYXRhIiwiZ2V0R2lmVXJsIiwic3JjIiwidXJsIiwiYWx0IiwidGl0bGUiLCJjaGFuZ2VCYWNrZ3JvdW5kIiwidG9Mb3dlckNhc2UiLCJ0b2dnbGVDb2xvciIsImNvbG9yU2V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==