import path from 'path';
import express, { NextFunction, Request, Response, Router } from 'express';
import fileExist from '../../utility/fileExist';
import sharpResize from '../../utility/resize';
import { validImage, availableImages } from '../../utility/validImage';
const resize: Router = express.Router();

async function resizeImage(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  // Declaring the query parameters for resizing images
  const width: string = req.query.w as string;
  const height: string = req.query.h as string;
  const imageName: string = req.query.name as string;

  // Declaring input and out image directories for ease of use
  const imageIn: string = path.resolve(
    __dirname,
    `../../Images/${imageName}.jpg`
  );
  const imageOut: string = path.resolve(
    __dirname,
    `../../Images/thumbnails/${imageName}_${width}x${height}.jpg`
  );
  // Additional error handling
  if (!width || !height) {
    res.send('Error: Please enter image width, height, and file name values');
  } else if (!imageName) {
    res.send('Error: Please enter a valid image file name');
  } else if (parseInt(width) < 0 || parseInt(height) < 0) {
    res.send('Error: Cannot set a negative value as a parameter');
  } else if (parseInt(width) == 0 || parseInt(height) == 0) {
    res.send("Error: Image properties can't be equal to 0");
  } else if (isNaN(parseInt(width)) || isNaN(parseInt(height))) {
    res.send('Error: Image dimensions ha to be valid numbers');
  } else if (!validImage(imageName)) {
    res.send(
      `"${imageName}" is not available, current accessible images are: [${availableImages}]`
    );
  } else {
    try {
      const doesImageExist: boolean = await fileExist(
        parseInt(width),
        parseInt(height),
        imageName
      );
      // Using sharp to fetch, resize, and save the the requested image after checking there are no errors.
      if (!doesImageExist) {
        await sharpResize(imageIn, imageOut, width, height);
      }
    } catch (err) {
      res.send(`${err}`);
    }

    // Fetching the resized image from the thumbnails folder and then displaying it in the browser.
    res.sendFile(imageOut);
  }
}
resize.use(resizeImage);

export default resize;
