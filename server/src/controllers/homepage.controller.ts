import express, { Request, Response, NextFunction } from "express";
import Course from "../models/course.module";

export async function homepage(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const [courses] = await Course.fetchAllCourse();
		console.log(courses);
		res.status(200).send(courses);
	} catch (e: any) {
		next(e);
	}
}

export async function fetchAllCoursesFollowByLevel(
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log("fet all courses follow by level");
	console.log(req.params);

	try {
		const levelCourse: any = req.params;
		const [courses] = await Course.fetchAllCoursesFollowByLevel(levelCourse);
		res.status(200).send(courses);
	} catch (e: any) {
		next(e);
	}
}
