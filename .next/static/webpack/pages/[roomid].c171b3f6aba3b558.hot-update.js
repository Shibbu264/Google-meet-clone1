"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[roomid]",{

/***/ "./hooks/peer.js":
/*!***********************!*\
  !*** ./hooks/peer.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _context_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/context/socket */ \"./context/socket.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var peerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! peerjs */ \"./node_modules/peerjs/dist/bundler.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _s = $RefreshSig$();\n\n\n\n\nconst usePeer = ()=>{\n    _s();\n    const [peer, setPeer] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [myId, setMyId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const peerset = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(false);\n    const socket = (0,_context_socket__WEBPACK_IMPORTED_MODULE_0__.useSocket)();\n    const roomId = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query.roomid;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (peerset.current || !roomId || !socket) return;\n        peerset.current = true;\n        if (window !== undefined) {\n            const mypeer = new peerjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                host: \"localhost\",\n                port: 5000,\n                path: \"peerjs/myapp\"\n            });\n            setPeer(mypeer);\n            myPeer.on(\"open\", (id)=>{\n                socket === null || socket === void 0 ? void 0 : socket.emit(\"join-room\", roomId, id);\n                setMyId(id);\n            });\n        }\n    }, [\n        roomId,\n        socket\n    ]);\n    return {\n        peer,\n        myId\n    };\n};\n_s(usePeer, \"Z1VJMFfP9QiWGaMgP3/fggZt0PY=\", false, function() {\n    return [\n        _context_socket__WEBPACK_IMPORTED_MODULE_0__.useSocket,\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (usePeer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9wZWVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTRDO0FBQ0w7QUFDZDtBQUMwQjtBQUVuRCxNQUFNTSxVQUFVOztJQUVoQixNQUFLLENBQUNDLE1BQUtDLFFBQVEsR0FBQ0wsK0NBQVFBLENBQUM7SUFDN0IsTUFBSyxDQUFDTSxNQUFLQyxRQUFRLEdBQUNQLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU1RLFVBQVNOLDZDQUFNQSxDQUFDO0lBQ3RCLE1BQU1PLFNBQU9aLDBEQUFTQTtJQUN0QixNQUFNYSxTQUFRWixzREFBU0EsR0FBR2EsS0FBSyxDQUFDQyxNQUFNO0lBRXRDWCxnREFBU0EsQ0FBQztRQUNOLElBQUdPLFFBQVFLLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUNELFFBQU87UUFDekNELFFBQVFLLE9BQU8sR0FBQztRQUtaLElBQUdDLFdBQVdDLFdBQVU7WUFDaEMsTUFBTUMsU0FBUyxJQUFJakIsOENBQUlBLENBQUM7Z0JBQ3BCa0IsTUFBTTtnQkFDTkMsTUFBTTtnQkFDTkMsTUFBTTtZQUNSO1lBQ0ZkLFFBQVFXO1lBQ1JJLE9BQU9DLEVBQUUsQ0FBQyxRQUFPLENBQUNDO2dCQUNkYixtQkFBQUEsNkJBQUFBLE9BQVFjLElBQUksQ0FBQyxhQUFZYixRQUFPWTtnQkFDaENmLFFBQVFlO1lBQUc7UUFHWDtJQUVKLEdBQUU7UUFBQ1o7UUFBT0Q7S0FBTztJQUVqQixPQUFPO1FBQ0hMO1FBQUtFO0lBQ1Q7QUFFQTtHQW5DTUg7O1FBS09OLHNEQUFTQTtRQUNSQyxrREFBU0E7OztBQThCdkIsK0RBQWVLLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvcGVlci5qcz85MzM4Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaW1wb3J0IHsgdXNlU29ja2V0IH0gZnJvbSBcIkAvY29udGV4dC9zb2NrZXRcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgUGVlciBmcm9tIFwicGVlcmpzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCB1c2VQZWVyID0gKCk9PntcclxuICAgIFxyXG5jb25zdFtwZWVyLHNldFBlZXJdPXVzZVN0YXRlKG51bGwpXHJcbmNvbnN0W215SWQsc2V0TXlJZF09dXNlU3RhdGUoJycpXHJcbmNvbnN0IHBlZXJzZXQgPXVzZVJlZihmYWxzZSlcclxuY29uc3Qgc29ja2V0PXVzZVNvY2tldCgpXHJcbmNvbnN0IHJvb21JZD0gdXNlUm91dGVyKCkucXVlcnkucm9vbWlkXHJcblxyXG51c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKHBlZXJzZXQuY3VycmVudCB8fCAhcm9vbUlkIHx8ICFzb2NrZXQpcmV0dXJuO1xyXG4gICAgcGVlcnNldC5jdXJyZW50PXRydWU7XHJcbiAgICBcclxuICAgXHJcbiAgICBcclxuICAgXHJcbiAgICAgICAgaWYod2luZG93ICE9PSB1bmRlZmluZWQpe1xyXG5jb25zdCBteXBlZXIgPSBuZXcgUGVlcih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHBvcnQ6IDUwMDAsXHJcbiAgICBwYXRoOiAncGVlcmpzL215YXBwJyxcclxuICB9KTtcclxuc2V0UGVlcihteXBlZXIpXHJcbm15UGVlci5vbignb3BlbicsKGlkKT0+e1xyXG4gICAgc29ja2V0Py5lbWl0KCdqb2luLXJvb20nLHJvb21JZCxpZClcclxuICAgIHNldE15SWQoaWQpfSlcclxuXHJcbiAgICBcclxuICAgIH1cclxuXHJcbn0sW3Jvb21JZCxzb2NrZXRdKVxyXG5cclxucmV0dXJuIHtcclxuICAgIHBlZXIsbXlJZFxyXG59XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHVzZVBlZXI7Il0sIm5hbWVzIjpbInVzZVNvY2tldCIsInVzZVJvdXRlciIsIlBlZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVBlZXIiLCJwZWVyIiwic2V0UGVlciIsIm15SWQiLCJzZXRNeUlkIiwicGVlcnNldCIsInNvY2tldCIsInJvb21JZCIsInF1ZXJ5Iiwicm9vbWlkIiwiY3VycmVudCIsIndpbmRvdyIsInVuZGVmaW5lZCIsIm15cGVlciIsImhvc3QiLCJwb3J0IiwicGF0aCIsIm15UGVlciIsIm9uIiwiaWQiLCJlbWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/peer.js\n"));

/***/ })

});