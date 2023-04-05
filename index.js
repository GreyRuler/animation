/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Chat.js":
/*!************************!*\
  !*** ./src/js/Chat.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Chat; }
/* harmony export */ });
class Chat {
  static get selectorBtnChatShow() {
    return '.chat-show';
  }
  static get selectorChat() {
    return '.chat';
  }
  static get selectorBtnChatClose() {
    return '.chat-close';
  }
  static get selectorBtnChatSend() {
    return '.chat-send';
  }
  static get markup() {
    return `
			<button class="chat-show show" type="button"></button>
			<div class="chat">
				<div class="chat-header">
					<div class="title">
						<h4>Напишите нам</h4>
					</div>
					<button class="chat-close" type="button"></button>
				</div>
				<div class="chat-body">
					<textarea name="message" id="chat-message" cols="35" rows="20"></textarea>
				</div>
				<div class="chat-footer">
					<button type="button" class="chat-send">
						Отправить
					</button>
				</div>
			</div>
		`;
  }
  constructor(container) {
    this.container = container;
  }
  init() {
    this.bindToDOM();
    this.registerEvents();
  }
  bindToDOM() {
    this.container.innerHTML = Chat.markup;
  }
  registerEvents() {
    const chat = this.container.querySelector(Chat.selectorChat);
    const btnChatShow = this.container.querySelector(Chat.selectorBtnChatShow);
    const btnChatClose = this.container.querySelector(Chat.selectorBtnChatClose);
    const btnChatSend = this.container.querySelector(Chat.selectorBtnChatSend);
    btnChatShow.addEventListener('click', () => {
      btnChatShow.classList.remove('show');
      chat.classList.add('show');
    });
    btnChatClose.addEventListener('click', () => {
      btnChatShow.classList.add('show');
      chat.classList.remove('show');
    });
    btnChatSend.addEventListener('click', () => {
      btnChatShow.classList.add('show');
      chat.classList.remove('show');
    });
  }
}

/***/ }),

/***/ "./src/js/Collapse.js":
/*!****************************!*\
  !*** ./src/js/Collapse.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Collapse; }
/* harmony export */ });
class Collapse {
  static get up() {
    return 'Свернуть';
  }
  static get down() {
    return 'Развернуть';
  }
  static get selectorBtnCollapse() {
    return '.btn-collapse';
  }
  static get selectorContent() {
    return '.content';
  }
  static get markup() {
    return `
			<button class="btn-collapse">${Collapse.up}</button>
			<div class="content">
				<p>CollapseCollapse
				Collapse<br>
				Collapse</p>
			</div>
			<button class="copy-content">Copy</button>		
		`;
  }
  constructor(container) {
    this.container = container;
  }
  init() {
    this.bindToDOM();
    this.registerEvents();
  }
  bindToDOM() {
    this.container.innerHTML = Collapse.markup;
  }
  registerEvents() {
    const btnCollapse = this.container.querySelector(Collapse.selectorBtnCollapse);
    const content = this.container.querySelector(Collapse.selectorContent);
    btnCollapse.addEventListener('click', () => {
      content.classList.toggle('collapse');
      const isCollapse = btnCollapse.textContent === Collapse.up;
      btnCollapse.textContent = isCollapse ? Collapse.down : Collapse.up;
    });
  }
}

/***/ }),

/***/ "./src/js/Like.js":
/*!************************!*\
  !*** ./src/js/Like.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Like; }
/* harmony export */ });
class Like {
  static get selectorBtnLike() {
    return '.btn-like';
  }
  static get markup() {
    return `
			<button class="btn-like" type="button">Like</button>
		`;
  }
  constructor(container) {
    this.container = container;
  }
  init() {
    this.bindToDOM();
    this.registerEvents();
  }
  bindToDOM() {
    this.container.innerHTML = Like.markup;
  }
  registerEvents() {
    const btnLike = this.container.querySelector(Like.selectorBtnLike);
    btnLike.addEventListener('click', () => {
      btnLike.append(this.createLike());
    });
  }

  // eslint-disable-next-line class-methods-use-this
  createLike() {
    // eslint-disable-next-line no-extend-native
    Array.prototype.random = function () {
      return this[Math.floor(Math.random() * this.length)];
    };
    const like = document.createElement('div');
    const deviation = [50, 0, -50];
    const deviationOne = deviation.random();
    const deviationTwo = deviation.filter(item => item !== deviationOne).random();
    const deviationThree = deviation.filter(item => item !== deviationTwo).random();
    like.classList.add('like');
    const animation = like.animate([{
      transform: 'translate(0, 0)',
      opacity: 1
    }, {
      transform: `translate(${deviationOne}px, -50px)`
    }, {
      transform: `translate(${deviationTwo}px, -100px)`
    }, {
      transform: `translate(${deviationThree}px, -150px)`
    }, {
      transform: 'translate(0, -200px)',
      opacity: 0
    }], 500);
    animation.finished.then(() => {
      like.remove();
    });
    return like;
  }
}

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapse */ "./src/js/Collapse.js");
/* harmony import */ var _Chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat */ "./src/js/Chat.js");
/* harmony import */ var _Like__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Like */ "./src/js/Like.js");



const collapseContainer = document.querySelector('.collapse-container');
const collapse = new _Collapse__WEBPACK_IMPORTED_MODULE_0__["default"](collapseContainer);
collapse.init();
const chatContainer = document.querySelector('.chat-container');
const chat = new _Chat__WEBPACK_IMPORTED_MODULE_1__["default"](chatContainer);
chat.init();
const likeContainer = document.querySelector('.like-container');
const like = new _Like__WEBPACK_IMPORTED_MODULE_2__["default"](likeContainer);
like.init();

/***/ }),

/***/ "./src/css/chat.css":
/*!**************************!*\
  !*** ./src/css/chat.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/collapse.css":
/*!******************************!*\
  !*** ./src/css/collapse.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/like.css":
/*!**************************!*\
  !*** ./src/css/like.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_collapse_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/collapse.css */ "./src/css/collapse.css");
/* harmony import */ var _css_chat_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/chat.css */ "./src/css/chat.css");
/* harmony import */ var _css_like_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/like.css */ "./src/css/like.css");





// Точка входа webpack
// Не пишите код в данном файле
}();
/******/ })()
;
//# sourceMappingURL=index.js.map