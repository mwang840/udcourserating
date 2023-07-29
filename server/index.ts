import { Server } from "./server";
import express from "express";

const app = express();
const port = 8000;
const server = new Server(app);
server.start(port);