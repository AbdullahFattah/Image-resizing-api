"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fileExist_1 = __importDefault(require("../../utility/fileExist"));
describe('Check if file exists', function () {
    it('should check if file exists', function () {
        expect(fileExist_1.default).toBeDefined;
    });
});
