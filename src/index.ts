import express from 'express';
import routes from './routes/index';
const app = express();
const port = 3000;

// Calling the main api routes
app.use('/api', routes);

// Starting the server
app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});
export default app;
