import express, { Response, Request, NextFunction } from "express";
import config from "../config/config";
import * as errorController from "./controllers/error.controller";
import homepageRouter from "./routes/homepage.router";
import cors from "cors";

const app = express();

app.use(
	cors({
		origin: "*",
	})
);
app.use("/", homepageRouter);

app.use(errorController.get404);
app.use(errorController.get500);

app.listen(config.port, () => {
	console.log(`Listenning on the port: ${config.port}`);
});
