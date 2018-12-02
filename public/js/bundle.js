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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Numbers = __webpack_require__(/*! ./models/numbers.js */ \"./src/models/numbers.js\");\nconst NumberSearchView = __webpack_require__(/*! ./views/number_search_view.js */ \"./src/views/number_search_view.js\");\nconst NumberView = __webpack_require__(/*! ./views/number_view.js */ \"./src/views/number_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log('JavaScript Loaded');\n\n  const selectElement = document.querySelector('select#pick-a-number');\n  const numberDropdown = new NumberSearchView(selectElement);\n  numberDropdown.bindEvents();\n\n\n  const infoDiv = document.querySelector('div#number-display');\n  const numberView = new NumberView(infoDiv);\n  numberView.bindEvents();\n\n  const numbers = new Numbers();\n  numbers.bindEvents();\n\n})\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function (channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n\n  subscribe: function (channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n  this.url = url;\n}\n\nRequestHelper.prototype.get = function () {\n  return fetch(this.url)\n    .then((response) => {\n      return response.json();\n    });\n};\n\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/numbers.js":
/*!*******************************!*\
  !*** ./src/models/numbers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\n\nconst Numbers = function() {\n  this.numbers = [];\n};\n\nNumbers.prototype.bindEvents = function () {\n  this.getData();\n\n  PubSub.subscribe('NumberSeachView:number-selected', (event) => {\n    const selectedIndex = event.detail;\n    this.publishNumberInfo(selectedIndex);\n  });\n};\n\nNumbers.prototype.getData = function () {\n  const url = 'http://numbersapi.com/1..100';\n  const request = new RequestHelper(url);\n  request.get()\n    .then((numbers) => {\n      this.numbers = numbers;\n      PubSub.publish('Numbers:all-numbers-ready', this.numbers);\n    });\n};\n\nNumbers.prototype.publishNumberInfo = function (index) {\n  const selectedNumberInfo = this.numbers[index];\n  PubSub.publish('Number:selected-number-info', selectedNumberInfo);\n};\n\nmodule.exports = Numbers;\n\n\n//# sourceURL=webpack:///./src/models/numbers.js?");

/***/ }),

/***/ "./src/views/number_search_view.js":
/*!*****************************************!*\
  !*** ./src/views/number_search_view.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\n\nconst NumberSearchView = function(container) {\n  this.container = container;\n  this.numbers = [];\n};\n\nNumberSearchView.prototype.bindEvents = function () {\n  PubSub.subscribe('Numbers:all-numbers-ready', (event) => {\n    this.numbers = event.detail;\n    this.populate(this.numbers);\n  });\n\n  this.container.addEventListener('change', (event) => {\n    const selectedIndex = event.target.value;\n    PubSub.publish('NumberSeachView:number-selected', selectedIndex);\n  });\n};\n\nNumberSearchView.prototype.populate = function (numbers) {\n\n  const numbersData = Object.entries(numbers);\n\n  numbersData.forEach((number, index) => {\n    const option = document.createElement('option');\n    option.textContent = number[0];\n    option.value = number[0];\n    this.container.appendChild(option);\n  });\n\n};\n\nmodule.exports = NumberSearchView;\n\n\n//# sourceURL=webpack:///./src/views/number_search_view.js?");

/***/ }),

/***/ "./src/views/number_view.js":
/*!**********************************!*\
  !*** ./src/views/number_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\n\nconst NumberView = function(container) {\n  this.container = container;\n};\n\nNumberView.prototype.bindEvents = function () {\n  PubSub.subscribe('Number:selected-number-info', (event) => {\n    const number = event.detail;\n    this.render(number);\n  });\n};\n\nNumberView.prototype.render = function (number) {\n\n  const numberInfo = this.createCustomElement('div', 'id', 'number-info');\n  numberInfo.appendChild(this.createCustomElement('p', \"textContent\", number));\n\n  this.container.innerHTML = '';\n  this.container.appendChild(numberInfo);\n};\n\nNumberView.prototype.createCustomElement = function (type, attr, value) {\n  const element = document.createElement(type);\n  element[attr] = value;\n  return element;\n};\n\n\nmodule.exports = NumberView;\n\n\n//# sourceURL=webpack:///./src/views/number_view.js?");

/***/ })

/******/ });