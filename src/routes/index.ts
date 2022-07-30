import express, { Request, Response } from 'express';
import resize from './api/image';
// Import the resize function from utility

const routes = express.Router();

// Main api page, instructions for using the api provided.
routes.get('/', (req: Request, res: Response): void => {
  try {
    res.send(
      "Main api page, please add '/image?w=(width)&h=(height)&name=(image file name)' to the URL bar to get started."
    );
  } catch (err: unknown) {
    res.status(500).send('Something went wrong');
  }
});

// Calling the resize endpoint
routes.use('/image', resize);

export default routes;
