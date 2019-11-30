/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/*! exports provided: canvas, canvas2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvas2", function() { return canvas2; });
var canvas = function canvas() {
  var svgContainer = d3.select(".circles").append("svg").attr("width", 200).attr("height", 200);
  var circle = svgContainer.append("circle").attr("cx", 30).attr("cy", 30).attr("r", 20).attr("fill", "red");
};
var canvas2 = function canvas2() {
  var svgContainer = d3.select(".circles").append("svg").attr("width", 200).attr("height", 200);
  var another = svgContainer.append("circle").attr("cx", 20).attr("cy", 30).attr("r", 20).attr("fill", "yellow");
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./src/canvas.js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("whats uppppp");
  Object(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas"])();
  Object(_canvas__WEBPACK_IMPORTED_MODULE_0__["canvas2"])();
  var apiKey = 'a0d411fa7c676669092342d66c4913d8';
  var apiSecret = '23bc040fcc0ff37a3b0e766029226950'; // let cache = new LastFMcache();
  // var lastfm = new LastFM({
  //     apiKey: apiKey,
  //     apiSecret : apiSecret,
  //     cache : cache
  // });
  // var topArtistName = '';
  //     lastfm.tag.getWeeklyArtistChart({tag: 'reggae', limit:6}, {success: function(data){
  //         $('#top_artists').html(
  //             $('#lastfmTemplateArtists').render(data.weeklyartistchart.artist)
  //         );
  //         topArtistName = data.weeklyartistchart.artist[0].name;
  //         lastfm.artist.getInfo({artist: topArtistName}, {success: function(data){
  //             $('#top_tracks').html(
  //                 $('#lastfmTemplateTracks').render(data.toptracks.track)
  //             );
  //         }, error: function(code,message){
  //             alert('Error #'+code+': '+message);
  //         }});
  //     }});
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY2FudmFzIiwic3ZnQ29udGFpbmVyIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiY2lyY2xlIiwiY2FudmFzMiIsImFub3RoZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiYXBpS2V5IiwiYXBpU2VjcmV0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDeEIsTUFBSUMsWUFBWSxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxVQUFWLEVBQXNCQyxNQUF0QixDQUE2QixLQUE3QixFQUNrQkMsSUFEbEIsQ0FDdUIsT0FEdkIsRUFDK0IsR0FEL0IsRUFFa0JBLElBRmxCLENBRXVCLFFBRnZCLEVBRWdDLEdBRmhDLENBQW5CO0FBSUEsTUFBSUMsTUFBTSxHQUFHTCxZQUFZLENBQUVHLE1BQWQsQ0FBcUIsUUFBckIsRUFDWUMsSUFEWixDQUNpQixJQURqQixFQUNzQixFQUR0QixFQUVZQSxJQUZaLENBRWlCLElBRmpCLEVBRXNCLEVBRnRCLEVBR1lBLElBSFosQ0FHaUIsR0FIakIsRUFHcUIsRUFIckIsRUFJWUEsSUFKWixDQUlpQixNQUpqQixFQUl3QixLQUp4QixDQUFiO0FBTUgsQ0FYTTtBQWFBLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDekIsTUFBSU4sWUFBWSxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxVQUFWLEVBQXNCQyxNQUF0QixDQUE2QixLQUE3QixFQUNrQkMsSUFEbEIsQ0FDdUIsT0FEdkIsRUFDK0IsR0FEL0IsRUFFa0JBLElBRmxCLENBRXVCLFFBRnZCLEVBRWdDLEdBRmhDLENBQW5CO0FBSUEsTUFBSUcsT0FBTyxHQUFHUCxZQUFZLENBQUVHLE1BQWQsQ0FBcUIsUUFBckIsRUFDV0MsSUFEWCxDQUNnQixJQURoQixFQUNxQixFQURyQixFQUVXQSxJQUZYLENBRWdCLElBRmhCLEVBRXFCLEVBRnJCLEVBR1dBLElBSFgsQ0FHZ0IsR0FIaEIsRUFHb0IsRUFIcEIsRUFJV0EsSUFKWCxDQUlnQixNQUpoQixFQUl1QixRQUp2QixDQUFkO0FBS0gsQ0FWTSxDOzs7Ozs7Ozs7Ozs7QUNiUDtBQUFBO0FBQUE7QUFFQUksUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNoREMsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNBWix3REFBTTtBQUNOTyx5REFBTztBQUVQLE1BQUlNLE1BQU0sR0FBRyxrQ0FBYjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxrQ0FBaEIsQ0FOZ0QsQ0FRaEQ7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVILENBaENELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgY2FudmFzID0gKCkgPT4ge1xuICAgIHZhciBzdmdDb250YWluZXIgPSBkMy5zZWxlY3QoXCIuY2lyY2xlc1wiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsMjAwKTtcblxuICAgIHZhciBjaXJjbGUgPSBzdmdDb250YWluZXIgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwzMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImN5XCIsMzApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsMjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCJyZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbn1cblxuZXhwb3J0IGNvbnN0IGNhbnZhczIgPSAoKSA9PiB7XG4gICAgdmFyIHN2Z0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIi5jaXJjbGVzXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwyMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwyMDApO1xuXG4gICAgdmFyIGFub3RoZXIgPSBzdmdDb250YWluZXIgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY3hcIiwyMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImN5XCIsMzApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsMjApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJmaWxsXCIsXCJ5ZWxsb3dcIilcbn1cblxuICAgICAgICAgICAgXG5cblxuIiwiaW1wb3J0IHsgY2FudmFzLCBjYW52YXMyIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIndoYXRzIHVwcHBwcFwiKTtcbiAgICBjYW52YXMoKTtcbiAgICBjYW52YXMyKCk7XG5cbiAgICBsZXQgYXBpS2V5ID0gJ2EwZDQxMWZhN2M2NzY2NjkwOTIzNDJkNjZjNDkxM2Q4J1xuICAgIGxldCBhcGlTZWNyZXQgPSAnMjNiYzA0MGZjYzBmZjM3YTNiMGU3NjYwMjkyMjY5NTAnXG5cbiAgICAvLyBsZXQgY2FjaGUgPSBuZXcgTGFzdEZNY2FjaGUoKTtcblxuICAgIC8vIHZhciBsYXN0Zm0gPSBuZXcgTGFzdEZNKHtcbiAgICAvLyAgICAgYXBpS2V5OiBhcGlLZXksXG4gICAgLy8gICAgIGFwaVNlY3JldCA6IGFwaVNlY3JldCxcbiAgICAvLyAgICAgY2FjaGUgOiBjYWNoZVxuICAgIC8vIH0pO1xuXG4gICAgLy8gdmFyIHRvcEFydGlzdE5hbWUgPSAnJztcblxuICAgIC8vICAgICBsYXN0Zm0udGFnLmdldFdlZWtseUFydGlzdENoYXJ0KHt0YWc6ICdyZWdnYWUnLCBsaW1pdDo2fSwge3N1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuICAgIC8vICAgICAgICAgJCgnI3RvcF9hcnRpc3RzJykuaHRtbChcbiAgICAvLyAgICAgICAgICAgICAkKCcjbGFzdGZtVGVtcGxhdGVBcnRpc3RzJykucmVuZGVyKGRhdGEud2Vla2x5YXJ0aXN0Y2hhcnQuYXJ0aXN0KVxuICAgIC8vICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgIHRvcEFydGlzdE5hbWUgPSBkYXRhLndlZWtseWFydGlzdGNoYXJ0LmFydGlzdFswXS5uYW1lO1xuICAgIC8vICAgICAgICAgbGFzdGZtLmFydGlzdC5nZXRJbmZvKHthcnRpc3Q6IHRvcEFydGlzdE5hbWV9LCB7c3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG4gICAgLy8gICAgICAgICAgICAgJCgnI3RvcF90cmFja3MnKS5odG1sKFxuICAgIC8vICAgICAgICAgICAgICAgICAkKCcjbGFzdGZtVGVtcGxhdGVUcmFja3MnKS5yZW5kZXIoZGF0YS50b3B0cmFja3MudHJhY2spXG4gICAgLy8gICAgICAgICAgICAgKTtcbiAgICAvLyAgICAgICAgIH0sIGVycm9yOiBmdW5jdGlvbihjb2RlLG1lc3NhZ2Upe1xuICAgIC8vICAgICAgICAgICAgIGFsZXJ0KCdFcnJvciAjJytjb2RlKyc6ICcrbWVzc2FnZSk7XG4gICAgLy8gICAgICAgICB9fSk7XG4gICAgLy8gICAgIH19KTtcbiAgICBcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=