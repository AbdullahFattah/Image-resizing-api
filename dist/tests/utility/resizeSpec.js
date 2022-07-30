"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resize_1 = __importDefault(require("../../utility/resize"));
describe('Test the sharp resize function', function () {
    it('Resize images and store them to the thumbnails folder', function () {
        expect(resize_1.default).toBeTruthy;
    });
});
