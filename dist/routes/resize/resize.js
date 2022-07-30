"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
function resizeImage(width, height, fileName) {
    var readStream = fs_1.default.createReadStream(__dirname + __filename);
}
