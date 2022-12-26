"use strict";
exports.id = 6280;
exports.ids = [6280];
exports.modules = {

/***/ 8199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ ImagesGrid)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

String.prototype.format = function() {
    let a = this;
    let k = "";
    for(k in arguments){
        a = a.replace("{" + k + "}", arguments[k]);
    }
    return a;
};
function ImagesGrid({ col , row , gap =4 , size =null , ...props }) {
    gap = gap * 10;
    if (size == null) {
        size = "100%";
    } else {
        size = (size * 50).toString() + "px";
    }
    let st = {
        gridTemplateColumns: "repeat({value}, 1fr)".replace("{value}", col),
        gridTemplateRows: "repeat({value}, 1fr)".replace("{value}", row),
        gridGap: gap,
        width: "100%",
        maxWidth: size
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid relative my-10",
        style: st,
        ...props
    });
}


/***/ }),

/***/ 1781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ VisitButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function VisitButton({ href ="#" , className ="" , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        target: "_blank",
        rel: "noreferrer",
        href: href,
        className: "px-7 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md no-underline text-lg mt-6 " + className,
        ...props,
        children: "ZZZZZZZZZZZZZZZ"
    });
}


/***/ })

};
;