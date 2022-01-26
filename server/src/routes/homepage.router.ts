import express from "express";
import * as homepageController from "../controllers/homepage.controller";
const router = express.Router();

router.get("/", homepageController.homepage);
router.get(
	"/api/fetch_courses/level/:level",
	homepageController.fetchAllCoursesFollowByLevel
);

router.get(
	"/api/fetch_courses/type_price/:type_price",
	homepageController.fetchAllCoursesByTypePrice
);

export default router;
