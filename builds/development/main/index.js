/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1! ***!
  \*************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(()=>{\"use strict\";var e={n:r=>{var o=r&&r.__esModule?()=>r.default:()=>r;return e.d(o,{a:o}),o},d:(r,o)=>{for(var t in o)e.o(o,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:o[t]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})}},r={};e.r(r);const o=__webpack_require__(/*! electron */ \"electron\"),t=__webpack_require__(/*! fs */ \"fs\");var n=e.n(t);const a=__webpack_require__(/*! path */ \"path\");var l=e.n(a),d=[];o.app.on(\"browser-window-created\",((e,r)=>{d.push(r),r.on(\"closed\",(()=>{console.log(d.indexOf(r)),d.splice(d.indexOf(r),1)}))})),n().watch(l().resolve(__dirname,\"..\",\"renderer\"),{},(()=>{Object.values(d).forEach((e=>{e&&e.webContents.reloadIgnoringCache()}))})),module.exports=r})();\n\n//# sourceURL=webpack://ElDa/?./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1");

/***/ }),

/***/ "./src/main/index.js":
/*!***************************!*\
  !*** ./src/main/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ \"electron\");\n/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);\n// In this file you can include the rest of your app's specific main process\n// code. You can also put them in separate files and require them here.\n\n\n\nconst ctxMenuTemplate = [\n  { label: 'option1'},\n  { label: 'option2'},\n  { label: 'option3'},\n]\nconst ctxMenu = new electron__WEBPACK_IMPORTED_MODULE_0__.Menu.buildFromTemplate(ctxMenuTemplate);\n\n\nconst createMenu = () => {\n  const menu = new electron__WEBPACK_IMPORTED_MODULE_0__.Menu.buildFromTemplate([\n    {\n      label: 'el_da',\n      submenu: [\n        {\n          role: 'about'\n        },\n        {\n          role: 'services'\n        }, \n        {\n          role: 'hide'\n        },\n        {\n          label: 'Option 1',\n          click() {\n            console.log('Option 1 clicked')\n          }\n        },\n      ]\n    },\n    {\n      label: 'Quit',\n      submenu: [\n        {\n          role: 'quit'\n        },\n      ]\n    }\n  ]);\n\n  electron__WEBPACK_IMPORTED_MODULE_0__.Menu.setApplicationMenu(menu);\n};\n\nconst createWindow = (width, height) => {\n\n  let window = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({\n    minWidth: 400,\n    minHeight: 400,\n    width: 800,\n    height: 800,\n    maxHeight: height,\n    maxWidth: width,\n    show: false,\n    backgroundColor: '#778beb',\n    titleBarStyle: 'hidden',\n  });\n\n  window.loadFile('renderer/index.html');\n  window.webContents.openDevTools();\n\n  window.on('ready-to-show', () => {\n    window.show()\n  });\n\n  window.webContents.on('context-menu', (e, params) => {\n    ctxMenu.popup(window, params.x, params.y)\n  })\n}\n\nelectron__WEBPACK_IMPORTED_MODULE_0__.app.on('ready', () => {\n  const { width, height } = electron__WEBPACK_IMPORTED_MODULE_0__.screen.getPrimaryDisplay().workAreaSize;\n\n  createMenu();\n  createWindow(width, height);\n\n})\n\n//# sourceURL=webpack://ElDa/./src/main/index.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-1!");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main/index.js");
/******/ 	
/******/ })()
;