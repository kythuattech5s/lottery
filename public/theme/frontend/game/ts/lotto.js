var lotto;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lotto.ts":
/*!**********************!*\
  !*** ./src/lotto.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_Socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base/Socket */ "./src/Base/Socket.ts");
/* harmony import */ var _Lotto_Games_FormBet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lotto/Games/FormBet */ "./src/Lotto/Games/FormBet.ts");
/* harmony import */ var _Lotto_Games_GameChoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lotto/Games/GameChoose */ "./src/Lotto/Games/GameChoose.ts");
/* harmony import */ var _Lotto_Games_GameSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lotto/Games/GameSelect */ "./src/Lotto/Games/GameSelect.ts");
/* harmony import */ var _Lotto_LottoGameTimer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Lotto/LottoGameTimer */ "./src/Lotto/LottoGameTimer.ts");
/* harmony import */ var _Lotto_LottoSocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Lotto/LottoSocket */ "./src/Lotto/LottoSocket.ts");
/* harmony import */ var _Lotto_LottoUi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Lotto/LottoUi */ "./src/Lotto/LottoUi.ts");
/* harmony import */ var _Lotto_TabPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Lotto/TabPanel */ "./src/Lotto/TabPanel.ts");








var tabPanel = new _Lotto_TabPanel__WEBPACK_IMPORTED_MODULE_7__["default"]();
var socket = new _Base_Socket__WEBPACK_IMPORTED_MODULE_0__["default"](SOCKET_URL);
var lottoSocket = new _Lotto_LottoSocket__WEBPACK_IMPORTED_MODULE_5__["default"](socket);
var plinkoGameTimer = new _Lotto_LottoGameTimer__WEBPACK_IMPORTED_MODULE_4__["default"](lottoSocket);
lottoSocket.onOpenSocketCallback = function () { };
lottoSocket.onInitGameCallback = function (data) {
    plinkoGameTimer.initInfo(data);
};
lottoSocket.init();
var formBet = new _Lotto_Games_FormBet__WEBPACK_IMPORTED_MODULE_1__["default"](lottoSocket);
var gameChoose = new _Lotto_Games_GameChoose__WEBPACK_IMPORTED_MODULE_2__["default"](formBet);
var gameSelect = new _Lotto_Games_GameSelect__WEBPACK_IMPORTED_MODULE_3__["default"](formBet);
var lottoUi = new _Lotto_LottoUi__WEBPACK_IMPORTED_MODULE_6__["default"](formBet, gameChoose, gameSelect);
lottoUi.init();


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"lotto": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdoanso"] = self["webpackChunkdoanso"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["src_Base_Socket_ts-src_Lotto_Games_FormBet_ts-src_Lotto_Games_GameChoose_ts-src_Lotto_Games_G-a0c846"], () => (__webpack_require__("./src/lotto.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	lotto = __webpack_exports__;
/******/ 	
/******/ })()
;