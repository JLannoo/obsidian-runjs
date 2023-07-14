"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const print_1 = require("../styles/print");
function logger(...args) {
    console.log("%cRunJS", print_1.printStyle, ...args);
}
exports.logger = logger;
