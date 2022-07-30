"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var image_1 = __importDefault(require("../../../routes/api/image"));
//  Testing the middleware for resizing given images
describe('Testing the middleware for resizing images', function () {
    it('Resize images using the defined parameters', function () {
        expect(image_1.default).toBeDefined();
    });
});
