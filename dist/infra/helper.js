"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helper {
    constructor() {
        this.sendResponse = (res, StatusCode, data) => {
            res.status(StatusCode).json({ result: data });
        };
    }
}
exports.default = new Helper();
