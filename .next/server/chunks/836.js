"use strict";
exports.id = 836;
exports.ids = [836];
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

/***/ 7719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Img)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


String.prototype.format = function() {
    let a = this;
    let k = "";
    for(k in arguments){
        a = a.replace("{" + k + "}", arguments[k]);
    }
    return a;
};
function Img({ text , src , href , ...props }) {
    const b = (e)=>{
        console.log(e.currentTarget.querySelector("a.imgLien").click());
    };
    const test = (e)=>{
        console.log("sa marche ");
    };
    let st = {
        height: "calc(100% - 56px)"
    };
    let stLien = {
        height: "20%"
    };
    let imageStyle = {};
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group relative w-full cursor-pointer w-full flex flex-col items-center justify-end",
        onClick: b,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "m-0 p-0 h-full shrink-0 flex justify-center items-end grow-0",
                style: st,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    alt: text,
                    className: "p-0 m-0 object-contain grow-0",
                    style: imageStyle,
                    src: src,
                    onChange: test
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "m-0 p-0 w-full h-full flex justify-center items-center mt-3 relative px-6 py-7 bg-zinc-800 group-hover:bg-zinc-900 rounded-md",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "imgLien absolute w-full p-0 text-white no-underline text-center flex justify-center items-center text-base",
                    href: href,
                    children: text
                })
            })
        ]
    });
}


/***/ })

};
;