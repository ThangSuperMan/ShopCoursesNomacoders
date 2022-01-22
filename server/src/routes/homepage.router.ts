import express from "express";
import * as homepageController from "../controllers/homepage.controller";
const router = express.Router();

router.get("/", homepageController.homepage);

export default router;
