import express, { Request, Response, NextFunction } from "express";
import Course from "../models/course.module";

export async function homepage(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const [courses] = await Course.fetchAllCourse();
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
	try {
		// Grab params from object to string
		const levelCourse: string = req.params.level;
		const [courses] = await Course.fetchAllCoursesFollowByLevel(levelCourse);
		res.status(200).send(courses);
	} catch (e: any) {
		next(e);
	}
}

export async function fetchAllCoursesByTypePrice(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const typePrice: number = parseInt(req.params.type_price);
		const [courses] = await Course.fetAllCoursesByTypePrice(typePrice);
		res.status(200).send(courses);
	} catch (e: any) {
		e.statusCode = 500;
		next(e);
	}
}
