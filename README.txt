How to use?
------------
First, we use the endpoint for resizing the images which is (api/image?....) and then using the provided query parameters, which are:

w: which is the desired width for the image
h: height
name: which is the image file name

EXAMPLE: /api/image?w=400&h=300&name=coffee

The api then fetches the requested image, resizes it with the provided dimensions, and then creates a 'thumbnails' folder on the disk if it's being used for the first time, finally, the finished product is displayed on the browser window.

Available test images: ['coffee','nile','image','painting','puppy','sea',] (All original images)
_________________

Available scripts:
-----------
    "start" --> Starts the express server on port 3000 
    "build" --> Compiles the TypeScript code
    "jasmine" --> Runs the jasmine unit tests
    "test" --> Both compiles the TypeScript code and subsequently runs jasmine
    "lint" --> Runs eslint
    "prettier" --> Runs prettier
_____________________

Used packages / modules:
--------------------

-Node.js: Project runtime
-TypeScript 
-Express: Server setup
-Supertest: Endpoint testing
-Sharp: Image processing
-Jasmine: Testing
-Prettier & Eslint: Formatting code


