import express from "express";
import * as homepageController from "../controllers/homepage.controller";
const router = express.Router();

router.get("/", homepageController.homepage);
router.get(
	"/api/fetch_courses/:params",
	homepageController.fetchAllCoursesFollowByLevel
);

export default router;
