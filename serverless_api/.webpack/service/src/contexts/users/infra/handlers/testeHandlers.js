/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contexts/users/infra/controllers/Teste/testeController.ts":
/*!***********************************************************************!*\
  !*** ./src/contexts/users/infra/controllers/Teste/testeController.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TesteController\": () => (/* binding */ TesteController)\n/* harmony export */ });\nclass TesteController {\n    async handle(event) {\n        try {\n            return Promise.resolve({\n                success: true\n            });\n        }\n        catch (e) {\n            return Promise.resolve({\n                error: true\n            });\n        }\n    }\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlcnMvaW5mcmEvY29udHJvbGxlcnMvVGVzdGUvdGVzdGVDb250cm9sbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLWFwaS8uL3NyYy9jb250ZXh0cy91c2Vycy9pbmZyYS9jb250cm9sbGVycy9UZXN0ZS90ZXN0ZUNvbnRyb2xsZXIudHM/N2Y1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUZXN0ZUNvbnRyb2xsZXIge1xuXG4gIGFzeW5jIGhhbmRsZShldmVudDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgIHN1Y2Nlc3M6IHRydWVcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7VGVzdGVDb250cm9sbGVyfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/users/infra/controllers/Teste/testeController.ts\n");

/***/ }),

/***/ "./src/contexts/users/infra/controllers/index.ts":
/*!*******************************************************!*\
  !*** ./src/contexts/users/infra/controllers/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TesteController\": () => (/* reexport safe */ _Teste_testeController__WEBPACK_IMPORTED_MODULE_0__.TesteController)\n/* harmony export */ });\n/* harmony import */ var _Teste_testeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Teste/testeController */ \"./src/contexts/users/infra/controllers/Teste/testeController.ts\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlcnMvaW5mcmEvY29udHJvbGxlcnMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtYXBpLy4vc3JjL2NvbnRleHRzL3VzZXJzL2luZnJhL2NvbnRyb2xsZXJzL2luZGV4LnRzP2FjNTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9UZXN0ZS90ZXN0ZUNvbnRyb2xsZXInOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/users/infra/controllers/index.ts\n");

/***/ }),

/***/ "./src/contexts/users/infra/handlers/testeHandlers.ts":
/*!************************************************************!*\
  !*** ./src/contexts/users/infra/handlers/testeHandlers.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/contexts/users/infra/controllers/index.ts\");\n\nconst testeController = new _controllers__WEBPACK_IMPORTED_MODULE_0__.TesteController();\nconst handle = async (event) => {\n    const result = await testeController.handle(event);\n    return {\n        statusCode: 201,\n        body: JSON.stringify(result),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlcnMvaW5mcmEvaGFuZGxlcnMvdGVzdGVIYW5kbGVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtYXBpLy4vc3JjL2NvbnRleHRzL3VzZXJzL2luZnJhL2hhbmRsZXJzL3Rlc3RlSGFuZGxlcnMudHM/NDJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmltcG9ydCB7IFRlc3RlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyc1wiO1xuXG5jb25zdCB0ZXN0ZUNvbnRyb2xsZXIgPSBuZXcgVGVzdGVDb250cm9sbGVyKCk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGU6IEhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGVzdGVDb250cm9sbGVyLmhhbmRsZShldmVudCk7XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiAyMDEsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzdWx0KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH1cbiAgfVxuICBcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/users/infra/handlers/testeHandlers.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/contexts/users/infra/handlers/testeHandlers.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;