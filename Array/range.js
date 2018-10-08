"use strict";
exports.__esModule = true;
var TYPECHECK_js_1 = require("./../TYPECHECK.js");
function newArr(start, end) {
    if (start === void 0) { start = 0; }
    var _a;
    TYPECHECK_js_1["default"](start, "Number");
    if (!end) {
        _a = [0, start], start = _a[0], end = _a[1];
    }
    var len = end - start;
    var tmpArr = [len];
    if (!len) {
        throw new Error("数组长队必须大于0");
    }
    for (var i = 0, cStart = start; i < len; ++i, ++cStart) {
        tmpArr[i] = cStart;
    }
    return tmpArr;
}
exports["default"] = newArr;
