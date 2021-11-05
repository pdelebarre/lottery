"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// /api/new-meetup\nasync function handler(req, res) {\n    // console.log(\"req :>> \", req);\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        const DATABASE_URL = \"mongodb://192.168.86.100:27017/udemy-react\";\n        const MONGO_DB = \"udemy-react\";\n        const MONGO_COLLECTION = \"meetups\";\n        console.log(\"data :>> \", data);\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(DATABASE_URL);\n        const db = client.db();\n        const meetupsCollection = db.collection(MONGO_COLLECTION);\n        const result = await meetupsCollection.insertOne(data);\n        console.log(`result`, result);\n        client.close();\n        res.status(201).json({\n            message: \"Meetup inserted\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsRUFBa0I7ZUFDSEMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLEVBQWdDO0lBQ2hDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUVyQixLQUFLLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxXQUFXLEVBQUMsQ0FBQyxHQUFHTCxJQUFJO1FBRW5ELEtBQUssQ0FBQ00sWUFBWSxHQUFHLENBQTRDO1FBQ2pFLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLENBQWE7UUFDOUIsS0FBSyxDQUFDQyxnQkFBZ0IsR0FBRyxDQUFTO1FBRWxDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFXLFlBQUVWLElBQUk7UUFFN0IsS0FBSyxDQUFDVyxNQUFNLEdBQUcsS0FBSyxDQUFDaEIsd0RBQW1CLENBQUNXLFlBQVk7UUFDckQsS0FBSyxDQUFDTyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRTtRQUVwQixLQUFLLENBQUNDLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQVUsQ0FBQ1AsZ0JBQWdCO1FBRXhELEtBQUssQ0FBQ1EsTUFBTSxHQUFHLEtBQUssQ0FBQ0YsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ2pCLElBQUk7UUFFckRTLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFLE1BQU0sR0FBR00sTUFBTTtRQUU1QkwsTUFBTSxDQUFDTyxLQUFLO1FBRVpwQixHQUFHLENBQUNxQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBaUI7UUFBQyxDQUFDO0lBQ3JELENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWV6QixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbi8vIC9hcGkvbmV3LW1lZXR1cFxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAvLyBjb25zb2xlLmxvZyhcInJlcSA6Pj4gXCIsIHJlcSk7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgIGNvbnN0IHsgdGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbiB9ID0gZGF0YTtcblxuICAgIGNvbnN0IERBVEFCQVNFX1VSTCA9IFwibW9uZ29kYjovLzE5Mi4xNjguODYuMTAwOjI3MDE3L3VkZW15LXJlYWN0XCI7XG4gICAgY29uc3QgTU9OR09fREIgPSBcInVkZW15LXJlYWN0XCI7XG4gICAgY29uc3QgTU9OR09fQ09MTEVDVElPTiA9IFwibWVldHVwc1wiO1xuXG4gICAgY29uc29sZS5sb2coXCJkYXRhIDo+PiBcIiwgZGF0YSk7XG5cbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KERBVEFCQVNFX1VSTCk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbihNT05HT19DT0xMRUNUSU9OKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcblxuICAgIGNvbnNvbGUubG9nKGByZXN1bHRgLCByZXN1bHQpO1xuXG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6IFwiTWVldHVwIGluc2VydGVkXCIgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJEQVRBQkFTRV9VUkwiLCJNT05HT19EQiIsIk1PTkdPX0NPTExFQ1RJT04iLCJjb25zb2xlIiwibG9nIiwiY2xpZW50IiwiY29ubmVjdCIsImRiIiwibWVldHVwc0NvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();