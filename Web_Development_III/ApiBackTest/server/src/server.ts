import express from "express";
import { router } from "./router/index";

import cors from 'cors';

const server = express();

const port = 3333;

server.use(cors());

server.use(express.json());

server.use(router);

server.listen(port, () => {
  console.log(`Server Running - end: http://localhost:${port}`);
});
