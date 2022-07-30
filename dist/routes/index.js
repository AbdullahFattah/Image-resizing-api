"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var image_1 = __importDefault(require("./api/image"));
// Import the resize function from utility
var routes = express_1.default.Router();
// Main api page, instructions for using the api provided.
routes.get('/', function (req, res) {
    try {
        res.send("Main api page, please add '/image?w=(width)&h=(height)&name=(image file name)' to the URL bar to get started.");
    }
    catch (err) {
        res.status(500).send('Something went wrong');
    }
});
// Calling the resize endpoint
routes.use('/image', image_1.default);
exports.default = routes;
