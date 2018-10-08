"use strict";
exports.__esModule = true;
var TYPECHECK_js_1 = require("./../TYPECHECK.js");
function dedupe(arr, func) {
    if (func === void 0) { func = JSON.stringify; }
    TYPECHECK_js_1["default"](arr, "Array");
    var lookup = {};
    var root = [];
    arr.forEach(function (item, index) {
        var itemToString = func(item);
        if (!lookup[itemToString]) {
            lookup[itemToString] = true;
            root.push(item);
        }
    });
    return root;
}
exports["default"] = dedupe;
