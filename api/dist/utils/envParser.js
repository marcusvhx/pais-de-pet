"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parser = parser;
function parser(str) {
    const splited = str.split(",");
    return splited.map(item => item.trim());
}
