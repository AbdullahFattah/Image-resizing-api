"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableImages = exports.validImage = void 0;
// Function to check if the input file name is available
var availableImages = [
    'coffee',
    'image',
    'nile',
    'painting',
    'puppy',
    'sea',
];
exports.availableImages = availableImages;
function validImage(input) {
    return availableImages.includes(input);
}
exports.validImage = validImage;
