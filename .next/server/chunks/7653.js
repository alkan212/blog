"use strict";
exports.id = 7653;
exports.ids = [7653];
exports.modules = {

/***/ 1109:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);



const baseStyles = {
    solid: "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
    outline: "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none"
};
const variantStyles = {
    solid: {
        slate: "bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",
        blue: "bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600",
        white: "bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white"
    },
    outline: {
        slate: "ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300",
        white: "ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"
    }
};
function Button({ variant ="solid" , color ="slate" , className , href , ...props }) {
    className = clsx__WEBPACK_IMPORTED_MODULE_2___default()(baseStyles[variant], variantStyles[variant][color], className);
    return href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: href,
        className: className,
        ...props
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        ...props
    });
}


/***/ }),

/***/ 9973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Logo(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "140",
        viewBox: "0 0 629 170",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.2 6.19999H30.6L69.8 116.6L66.4 115.2L95 41.2L104 67.4L65.8 156.6L8.2 6.19999ZM77.6 6.19999H97L139.4 115L135.4 114.2L172.8 6.19999H193.4L136.6 156.4L77.6 6.19999Z",
                fill: "#4532EC"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M252.205 111L236.795 58.6364H247.33L257.591 97.0909H258.102L268.398 58.6364H278.932L289.159 96.9205H289.67L299.864 58.6364H310.398L295.023 111H284.625L273.989 73.1932H273.205L262.568 111H252.205ZM343.925 112.057C338.766 112.057 334.323 110.955 330.596 108.75C326.891 106.523 324.028 103.398 322.005 99.375C320.005 95.3295 319.005 90.5909 319.005 85.1591C319.005 79.7955 320.005 75.0682 322.005 70.9773C324.028 66.8864 326.846 63.6932 330.46 61.3977C334.096 59.1023 338.346 57.9545 343.21 57.9545C346.164 57.9545 349.028 58.4432 351.8 59.4205C354.573 60.3977 357.062 61.9318 359.266 64.0227C361.471 66.1136 363.21 68.8295 364.482 72.1705C365.755 75.4886 366.391 79.5227 366.391 84.2727V87.8864H324.766V80.25H356.403C356.403 77.5682 355.857 75.1932 354.766 73.125C353.675 71.0341 352.141 69.3864 350.164 68.1818C348.21 66.9773 345.914 66.375 343.278 66.375C340.414 66.375 337.914 67.0795 335.778 68.4886C333.664 69.875 332.028 71.6932 330.869 73.9432C329.732 76.1705 329.164 78.5909 329.164 81.2045V87.1705C329.164 90.6705 329.778 93.6477 331.005 96.1023C332.255 98.5568 333.994 100.432 336.221 101.727C338.448 103 341.05 103.636 344.028 103.636C345.96 103.636 347.721 103.364 349.312 102.818C350.903 102.25 352.278 101.409 353.437 100.295C354.596 99.1818 355.482 97.8068 356.096 96.1705L365.744 97.9091C364.971 100.75 363.585 103.239 361.585 105.375C359.607 107.489 357.119 109.136 354.119 110.318C351.141 111.477 347.744 112.057 343.925 112.057ZM389.956 93.2386L389.888 80.7955H391.661L412.524 58.6364H424.729L400.933 83.8636H399.331L389.956 93.2386ZM380.581 111V41.1818H390.774V111H380.581ZM413.649 111L394.899 86.1136L401.922 78.9886L426.161 111H413.649ZM447.092 79.9091V111H436.899V58.6364H446.683V67.1591H447.33C448.535 64.3864 450.421 62.1591 452.989 60.4773C455.58 58.7955 458.842 57.9545 462.774 57.9545C466.342 57.9545 469.467 58.7045 472.149 60.2045C474.83 61.6818 476.91 63.8864 478.387 66.8182C479.864 69.75 480.603 73.375 480.603 77.6932V111H470.41V78.9205C470.41 75.125 469.421 72.1591 467.444 70.0227C465.467 67.8636 462.751 66.7841 459.296 66.7841C456.933 66.7841 454.83 67.2955 452.989 68.3182C451.171 69.3409 449.728 70.8409 448.66 72.8182C447.614 74.7727 447.092 77.1364 447.092 79.9091ZM519.21 112.057C514.301 112.057 510.017 110.932 506.358 108.682C502.699 106.432 499.858 103.284 497.835 99.2386C495.813 95.1932 494.801 90.4659 494.801 85.0568C494.801 79.625 495.813 74.875 497.835 70.8068C499.858 66.7386 502.699 63.5795 506.358 61.3295C510.017 59.0795 514.301 57.9545 519.21 57.9545C524.119 57.9545 528.404 59.0795 532.063 61.3295C535.722 63.5795 538.563 66.7386 540.585 70.8068C542.608 74.875 543.619 79.625 543.619 85.0568C543.619 90.4659 542.608 95.1932 540.585 99.2386C538.563 103.284 535.722 106.432 532.063 108.682C528.404 110.932 524.119 112.057 519.21 112.057ZM519.244 103.5C522.426 103.5 525.063 102.659 527.154 100.977C529.244 99.2955 530.79 97.0568 531.79 94.2614C532.813 91.4659 533.324 88.3864 533.324 85.0227C533.324 81.6818 532.813 78.6136 531.79 75.8182C530.79 73 529.244 70.7386 527.154 69.0341C525.063 67.3295 522.426 66.4773 519.244 66.4773C516.04 66.4773 513.381 67.3295 511.267 69.0341C509.176 70.7386 507.619 73 506.597 75.8182C505.597 78.6136 505.097 81.6818 505.097 85.0227C505.097 88.3864 505.597 91.4659 506.597 94.2614C507.619 97.0568 509.176 99.2955 511.267 100.977C513.381 102.659 516.04 103.5 519.244 103.5ZM567.636 111L552.227 58.6364H562.761L573.022 97.0909H573.534L583.829 58.6364H594.363L604.59 96.9205H605.102L615.295 58.6364H625.829L610.454 111H600.056L589.42 73.1932H588.636L577.999 111H567.636Z",
                fill: "black"
            })
        ]
    });
}


/***/ })

};
;