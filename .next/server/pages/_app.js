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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./Data/Store/Store.js":
/*!*****************************!*\
  !*** ./Data/Store/Store.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Store: () => (/* binding */ Store),\n/* harmony export */   StoreProvider: () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nif (false) {}\nconst initialState = {\n    answer:  false ? 0 : [],\n    currantQuestionId:  false ? 0 : 1,\n    userInfo:  false ? 0 : {},\n    theme:  false ? 0 : \"dark\"\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"ADD_ANSWER_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.answer.find((item)=>item.id === newItem.id);\n                const answer = existItem ? state.answer.map((item)=>item.id === existItem.id ? newItem : item) : [\n                    ...state.answer,\n                    newItem\n                ];\n                localStorage.setItem(\"answerItems\", JSON.stringify(answer));\n                return {\n                    ...state,\n                    answer\n                };\n            }\n        case \"RESET_QUIZ\":\n            {\n                localStorage.removeItem(\"answerItems\");\n                localStorage.setItem(\"QuestionId\", JSON.stringify(1));\n                return {\n                    ...state,\n                    currantQuestionId: 1,\n                    answer: []\n                };\n            }\n        case \"UPDATE_QUESTION_ID\":\n            {\n                const currantId = action.payload;\n                localStorage.setItem(\"QuestionId\", JSON.stringify(currantId));\n                return {\n                    ...state,\n                    currantQuestionId: currantId\n                };\n            }\n        case \"UPDATE_THEME\":\n            {\n                const theme = action.payload;\n                localStorage.setItem(\"theme\", theme);\n                return {\n                    ...state,\n                    theme\n                };\n            }\n        case \"USER_LOGIN\":\n            {\n                const newUser = action.payload;\n                localStorage.setItem(\"user\", JSON.stringify(newUser));\n                return {\n                    ...state,\n                    userInfo: newUser\n                };\n            }\n        case \"USER_LOGOUT\":\n            {\n                localStorage.removeItem(\"user\");\n                return {\n                    ...state,\n                    userInfo: null\n                };\n            }\n        default:\n            return state;\n    }\n}\nfunction StoreProvider(props) {\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/dipusultan/Desktop/React Projects/online-quzi-2.0/Data/Store/Store.js\",\n        lineNumber: 86,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9EYXRhL1N0b3JlL1N0b3JlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDd0I7QUFFM0MsTUFBTUcsc0JBQVFGLG9EQUFhQSxHQUFHO0FBRXJDLElBQUksS0FBNkIsRUFBRSxFQUdsQztBQUVELE1BQU1NLGVBQWU7SUFDbkJDLFFBQ0UsTUFBb0UsR0FDaEVDLENBQStDLEdBQy9DLEVBQUU7SUFDUkUsbUJBQ0UsTUFBbUUsR0FDL0RGLENBQThDLEdBQzlDO0lBRU5HLFVBQ0UsTUFBNkQsR0FDekRILENBQXdDLEdBQ3hDLENBQUM7SUFDUEksT0FDRSxNQUE4RCxHQUMxRFIsQ0FBNkIsR0FDN0I7QUFDUjtBQUVBLFNBQVNTLFFBQVFDLEtBQUssRUFBRUMsTUFBTTtJQUM1QixPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtBQUs7WUFBbUI7Z0JBQ3RCLE1BQU1DLFVBQVVGLE9BQU9HLE9BQU87Z0JBQzlCLE1BQU1DLFlBQVlMLE1BQU1QLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLENBQUNqQixPQUFTQSxLQUFLa0IsRUFBRSxLQUFLSixRQUFRSSxFQUFFO2dCQUNwRSxNQUFNZCxTQUFTWSxZQUNYTCxNQUFNUCxNQUFNLENBQUNlLEdBQUcsQ0FBQyxDQUFDbkIsT0FDaEJBLEtBQUtrQixFQUFFLEtBQUtGLFVBQVVFLEVBQUUsR0FBR0osVUFBVWQsUUFFdkM7dUJBQUlXLE1BQU1QLE1BQU07b0JBQUVVO2lCQUFRO2dCQUU5QmIsYUFBYW1CLE9BQU8sQ0FBQyxlQUFlZixLQUFLZ0IsU0FBUyxDQUFDakI7Z0JBQ25ELE9BQU87b0JBQUUsR0FBR08sS0FBSztvQkFBRVA7Z0JBQU87WUFDNUI7UUFFQSxLQUFLO1lBQWM7Z0JBQ2pCSCxhQUFhcUIsVUFBVSxDQUFDO2dCQUN4QnJCLGFBQWFtQixPQUFPLENBQUMsY0FBY2YsS0FBS2dCLFNBQVMsQ0FBQztnQkFDbEQsT0FBTztvQkFDTCxHQUFHVixLQUFLO29CQUNSSixtQkFBbUI7b0JBQ25CSCxRQUFRLEVBQUU7Z0JBQ1o7WUFDRjtRQUVBLEtBQUs7WUFBc0I7Z0JBQ3pCLE1BQU1tQixZQUFZWCxPQUFPRyxPQUFPO2dCQUNoQ2QsYUFBYW1CLE9BQU8sQ0FBQyxjQUFjZixLQUFLZ0IsU0FBUyxDQUFDRTtnQkFDbEQsT0FBTztvQkFBRSxHQUFHWixLQUFLO29CQUFFSixtQkFBbUJnQjtnQkFBVTtZQUNsRDtRQUNBLEtBQUs7WUFBZ0I7Z0JBQ25CLE1BQU1kLFFBQVFHLE9BQU9HLE9BQU87Z0JBQzVCZCxhQUFhbUIsT0FBTyxDQUFDLFNBQVNYO2dCQUM5QixPQUFPO29CQUFFLEdBQUdFLEtBQUs7b0JBQUVGO2dCQUFNO1lBQzNCO1FBQ0EsS0FBSztZQUFjO2dCQUNqQixNQUFNZSxVQUFVWixPQUFPRyxPQUFPO2dCQUM5QmQsYUFBYW1CLE9BQU8sQ0FBQyxRQUFRZixLQUFLZ0IsU0FBUyxDQUFDRztnQkFDNUMsT0FBTztvQkFBRSxHQUFHYixLQUFLO29CQUFFSCxVQUFVZ0I7Z0JBQVE7WUFDdkM7UUFDQSxLQUFLO1lBQWU7Z0JBQ2xCdkIsYUFBYXFCLFVBQVUsQ0FBQztnQkFDeEIsT0FBTztvQkFDTCxHQUFHWCxLQUFLO29CQUNSSCxVQUFVO2dCQUNaO1lBQ0Y7UUFFQTtZQUNFLE9BQU9HO0lBQ1g7QUFDRjtBQUNPLFNBQVNjLGNBQWNDLEtBQUs7SUFDakMsTUFBTSxDQUFDZixPQUFPZ0IsU0FBUyxHQUFHN0IsaURBQVVBLENBQUNZLFNBQVNQO0lBQzlDLE1BQU15QixRQUFRO1FBQUVqQjtRQUFPZ0I7SUFBUztJQUNoQyxxQkFBTyw4REFBQzVCLE1BQU04QixRQUFRO1FBQUNELE9BQU9BO2tCQUFRRixNQUFNSSxRQUFROzs7Ozs7QUFDdEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtcXV6aS0yLjAvLi9EYXRhL1N0b3JlL1N0b3JlLmpzPzZhMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vIFBlcmZvcm0gbG9jYWxTdG9yYWdlIGFjdGlvblxuICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJrZXlcIik7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYW5zd2VyOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbnN3ZXJJdGVtc1wiKVxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYW5zd2VySXRlbXNcIikpXG4gICAgICA6IFtdLFxuICBjdXJyYW50UXVlc3Rpb25JZDpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUXVlc3Rpb25JZFwiKVxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUXVlc3Rpb25JZFwiKSlcbiAgICAgIDogMSxcblxuICB1c2VySW5mbzpcbiAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKVxuICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSlcbiAgICAgIDoge30sXG4gIHRoZW1lOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKVxuICAgICAgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpXG4gICAgICA6IFwiZGFya1wiLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQUREX0FOU1dFUl9JVEVNXCI6IHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IHN0YXRlLmFuc3dlci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBuZXdJdGVtLmlkKTtcbiAgICAgIGNvbnN0IGFuc3dlciA9IGV4aXN0SXRlbVxuICAgICAgICA/IHN0YXRlLmFuc3dlci5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICBpdGVtLmlkID09PSBleGlzdEl0ZW0uaWQgPyBuZXdJdGVtIDogaXRlbVxuICAgICAgICAgIClcbiAgICAgICAgOiBbLi4uc3RhdGUuYW5zd2VyLCBuZXdJdGVtXTtcblxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbnN3ZXJJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShhbnN3ZXIpKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBhbnN3ZXIgfTtcbiAgICB9XG5cbiAgICBjYXNlIFwiUkVTRVRfUVVJWlwiOiB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImFuc3dlckl0ZW1zXCIpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJRdWVzdGlvbklkXCIsIEpTT04uc3RyaW5naWZ5KDEpKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjdXJyYW50UXVlc3Rpb25JZDogMSxcbiAgICAgICAgYW5zd2VyOiBbXSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBcIlVQREFURV9RVUVTVElPTl9JRFwiOiB7XG4gICAgICBjb25zdCBjdXJyYW50SWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUXVlc3Rpb25JZFwiLCBKU09OLnN0cmluZ2lmeShjdXJyYW50SWQpKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjdXJyYW50UXVlc3Rpb25JZDogY3VycmFudElkIH07XG4gICAgfVxuICAgIGNhc2UgXCJVUERBVEVfVEhFTUVcIjoge1xuICAgICAgY29uc3QgdGhlbWUgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgdGhlbWUpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHRoZW1lIH07XG4gICAgfVxuICAgIGNhc2UgXCJVU0VSX0xPR0lOXCI6IHtcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShuZXdVc2VyKSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlckluZm86IG5ld1VzZXIgfTtcbiAgICB9XG4gICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6IHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICB1c2VySW5mbzogbnVsbCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcbiAgcmV0dXJuIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17dmFsdWV9Pntwcm9wcy5jaGlsZHJlbn08L1N0b3JlLlByb3ZpZGVyPjtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiU3RvcmUiLCJpdGVtIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxTdGF0ZSIsImFuc3dlciIsIkpTT04iLCJwYXJzZSIsImN1cnJhbnRRdWVzdGlvbklkIiwidXNlckluZm8iLCJ0aGVtZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpZCIsIm1hcCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwiY3VycmFudElkIiwibmV3VXNlciIsIlN0b3JlUHJvdmlkZXIiLCJwcm9wcyIsImRpc3BhdGNoIiwidmFsdWUiLCJQcm92aWRlciIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Data/Store/Store.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Data_Store_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Data/Store/Store */ \"./Data/Store/Store.js\");\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Data_Store_Store__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/dipusultan/Desktop/React Projects/online-quzi-2.0/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dipusultan/Desktop/React Projects/online-quzi-2.0/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStCO0FBRXFCO0FBRXBELFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVk7SUFDL0MscUJBQ0UsOERBQUNILDREQUFhQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25saW5lLXF1emktMi4wLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IFN0b3JlUHJvdmlkZXIgfSBmcm9tIFwiLi4vRGF0YS9TdG9yZS9TdG9yZVwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9TdG9yZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJTdG9yZVByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();