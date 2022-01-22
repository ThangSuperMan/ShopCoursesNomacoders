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
