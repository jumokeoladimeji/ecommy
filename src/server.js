import 'dotenv/config';

import express from 'express';

import routes from './routes/index.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});


export default server;
