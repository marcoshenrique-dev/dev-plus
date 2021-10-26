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

/***/ "./src/contexts/shared/core/utils/handleResponse/index.ts":
/*!****************************************************************!*\
  !*** ./src/contexts/shared/core/utils/handleResponse/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InternalServerError\": () => (/* reexport safe */ _internalServerError__WEBPACK_IMPORTED_MODULE_0__.InternalServerError),\n/* harmony export */   \"NotFound\": () => (/* reexport safe */ _notFound__WEBPACK_IMPORTED_MODULE_1__.NotFound),\n/* harmony export */   \"Success\": () => (/* reexport safe */ _success__WEBPACK_IMPORTED_MODULE_2__.Success)\n/* harmony export */ });\n/* harmony import */ var _internalServerError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internalServerError */ \"./src/contexts/shared/core/utils/handleResponse/internalServerError/index.ts\");\n/* harmony import */ var _notFound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notFound */ \"./src/contexts/shared/core/utils/handleResponse/notFound/index.ts\");\n/* harmony import */ var _success__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success */ \"./src/contexts/shared/core/utils/handleResponse/success/index.ts\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlUmVzcG9uc2UvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1hcGkvLi9zcmMvY29udGV4dHMvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlUmVzcG9uc2UvaW5kZXgudHM/ZGZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2ludGVybmFsU2VydmVyRXJyb3InO1xuZXhwb3J0ICogZnJvbSAnLi9ub3RGb3VuZCc7XG5leHBvcnQgKiBmcm9tICcuL3N1Y2Nlc3MnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/shared/core/utils/handleResponse/index.ts\n");

/***/ }),

/***/ "./src/contexts/shared/core/utils/handleResponse/internalServerError/index.ts":
/*!************************************************************************************!*\
  !*** ./src/contexts/shared/core/utils/handleResponse/internalServerError/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InternalServerError\": () => (/* binding */ InternalServerError)\n/* harmony export */ });\nfunction InternalServerError({ statusCode = 500, body = \"\" }) {\n    return {\n        statusCode: statusCode,\n        body: JSON.stringify(body),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlUmVzcG9uc2UvaW50ZXJuYWxTZXJ2ZXJFcnJvci9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1hcGkvLi9zcmMvY29udGV4dHMvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlUmVzcG9uc2UvaW50ZXJuYWxTZXJ2ZXJFcnJvci9pbmRleC50cz84ZjQ2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBJbnRlcm5hbFNlcnZlckVycm9yKHtzdGF0dXNDb2RlID0gNTAwLCBib2R5ID0gXCJcIn0pIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/shared/core/utils/handleResponse/internalServerError/index.ts\n");

/***/ }),

/***/ "./src/contexts/shared/core/utils/handleResponse/notFound/index.ts":
/*!*************************************************************************!*\
  !*** ./src/contexts/shared/core/utils/handleResponse/notFound/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotFound\": () => (/* binding */ NotFound)\n/* harmony export */ });\nfunction NotFound({ statusCode = 404, body = \"\" }) {\n    return {\n        statusCode: statusCode,\n        body: JSON.stringify(body),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlUmVzcG9uc2Uvbm90Rm91bmQvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtYXBpLy4vc3JjL2NvbnRleHRzL3NoYXJlZC9jb3JlL3V0aWxzL2hhbmRsZVJlc3BvbnNlL25vdEZvdW5kL2luZGV4LnRzP2EwOGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIE5vdEZvdW5kKHtzdGF0dXNDb2RlID0gNDA0LCBib2R5ID0gXCJcIn0pIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/shared/core/utils/handleResponse/notFound/index.ts\n");

/***/ }),

/***/ "./src/contexts/shared/core/utils/handleResponse/success/index.ts":
/*!************************************************************************!*\
  !*** ./src/contexts/shared/core/utils/handleResponse/success/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Success\": () => (/* binding */ Success)\n/* harmony export */ });\nfunction Success({ statusCode = 200, body = \"\" }) {\n    return {\n        statusCode: statusCode,\n        body: JSON.stringify(body),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlUmVzcG9uc2Uvc3VjY2Vzcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVybGVzcy1hcGkvLi9zcmMvY29udGV4dHMvc2hhcmVkL2NvcmUvdXRpbHMvaGFuZGxlUmVzcG9uc2Uvc3VjY2Vzcy9pbmRleC50cz9jODJjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBTdWNjZXNzKHtzdGF0dXNDb2RlID0gMjAwLCBib2R5ID0gXCJcIn0pIHtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXNDb2RlOiBzdGF0dXNDb2RlLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/shared/core/utils/handleResponse/success/index.ts\n");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers */ \"./src/contexts/users/infra/controllers/index.ts\");\n/* harmony import */ var _utils_handleResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/handleResponse */ \"./src/contexts/shared/core/utils/handleResponse/index.ts\");\n\n\nconst testeController = new _controllers__WEBPACK_IMPORTED_MODULE_0__.TesteController();\nconst handle = async (event) => {\n    const result = await testeController.handle(event);\n    return (0,_utils_handleResponse__WEBPACK_IMPORTED_MODULE_1__.Success)({ body: result });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvdXNlcnMvaW5mcmEvaGFuZGxlcnMvdGVzdGVIYW5kbGVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MtYXBpLy4vc3JjL2NvbnRleHRzL3VzZXJzL2luZnJhL2hhbmRsZXJzL3Rlc3RlSGFuZGxlcnMudHM/NDJmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIYW5kbGVyIH0gZnJvbSBcImF3cy1sYW1iZGFcIjtcbmltcG9ydCB7IFRlc3RlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyc1wiO1xuXG5pbXBvcnQge1N1Y2Nlc3N9IGZyb20gJ0B1dGlscy9oYW5kbGVSZXNwb25zZSc7XG5cbmNvbnN0IHRlc3RlQ29udHJvbGxlciA9IG5ldyBUZXN0ZUNvbnRyb2xsZXIoKTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZTogSGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB0ZXN0ZUNvbnRyb2xsZXIuaGFuZGxlKGV2ZW50KTtcblxuICByZXR1cm4gU3VjY2Vzcyh7Ym9keTogcmVzdWx0fSk7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/users/infra/handlers/testeHandlers.ts\n");

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