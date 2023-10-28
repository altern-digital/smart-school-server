import http from 'http';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express, { Express } from 'express';

import router from './api';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('short'));

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("ok");
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
