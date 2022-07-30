"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var fileExist_1 = __importDefault(require("../../utility/fileExist"));
var resize_1 = __importDefault(require("../../utility/resize"));
var validImage_1 = require("../../utility/validImage");
var resize = express_1.default.Router();
function resizeImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var width, height, imageName, imageIn, imageOut, doesImageExist, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    width = req.query.w;
                    height = req.query.h;
                    imageName = req.query.name;
                    imageIn = path_1.default.resolve(__dirname, "../../Images/".concat(imageName, ".jpg"));
                    imageOut = path_1.default.resolve(__dirname, "../../Images/thumbnails/".concat(imageName, "_").concat(width, "x").concat(height, ".jpg"));
                    if (!(!width || !height)) return [3 /*break*/, 1];
                    res.send('Error: Please enter image width, height, and file name values');
                    return [3 /*break*/, 12];
                case 1:
                    if (!!imageName) return [3 /*break*/, 2];
                    res.send('Error: Please enter a valid image file name');
                    return [3 /*break*/, 12];
                case 2:
                    if (!(parseInt(width) < 0 || parseInt(height) < 0)) return [3 /*break*/, 3];
                    res.send('Error: Cannot set a negative value as a parameter');
                    return [3 /*break*/, 12];
                case 3:
                    if (!(parseInt(width) == 0 || parseInt(height) == 0)) return [3 /*break*/, 4];
                    res.send("Error: Image properties can't be equal to 0");
                    return [3 /*break*/, 12];
                case 4:
                    if (!(isNaN(parseInt(width)) || isNaN(parseInt(height)))) return [3 /*break*/, 5];
                    res.send('Error: Image dimensions ha to be valid numbers');
                    return [3 /*break*/, 12];
                case 5:
                    if (!!(0, validImage_1.validImage)(imageName)) return [3 /*break*/, 6];
                    res.send("\"".concat(imageName, "\" is not available, current accessible images are: [").concat(validImage_1.availableImages, "]"));
                    return [3 /*break*/, 12];
                case 6:
                    _a.trys.push([6, 10, , 11]);
                    return [4 /*yield*/, (0, fileExist_1.default)(parseInt(width), parseInt(height), imageName)];
                case 7:
                    doesImageExist = _a.sent();
                    if (!!doesImageExist) return [3 /*break*/, 9];
                    return [4 /*yield*/, (0, resize_1.default)(imageIn, imageOut, width, height)];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    err_1 = _a.sent();
                    res.send("".concat(err_1));
                    return [3 /*break*/, 11];
                case 11:
                    // Fetching the resized image from the thumbnails folder and then displaying it in the browser.
                    res.sendFile(imageOut);
                    _a.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    });
}
resize.use(resizeImage);
exports.default = resize;
