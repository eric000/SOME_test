"use strict";
exports.__esModule = true;
function typeCheck(data, type) {
    var dataType = Object.prototype.toString.call(data).slice(8, -1);
    if (dataType !== type) {
        throw new TypeError("Expected " + type + ", got " + dataType);
    }
}
exports["default"] = typeCheck;
