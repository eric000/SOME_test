"use strict";
exports.__esModule = true;
function flatten(arr, res) {
    arr.forEach(function (element) {
        Array.isArray(element)
            ? flatten(element, res) : res.push(element);
    });
    return res;
}
function aa(arr) { return flatten(arr, []); }
exports["default"] = aa;
