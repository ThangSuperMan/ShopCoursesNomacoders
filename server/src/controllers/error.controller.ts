import express, { Request, Response, NextFunction } from "express";

interface ErrorWithStatus extends Error {
	status: number;
}

export function get404(req: Request, res: Response, next: NextFunction) {
	console.log("method get 404");
	const error = new Error() as ErrorWithStatus;
	error.message = "Not found the page";
	error.status = 404;
	next(error);
}

export function get500(
	error: any,
	req: Request,
	res: Response,
	next: NextFunction
) {
	console.log("method get 500");
	res.status(error.status || 500);
	res.json({
		error: {
			massage: error.message,
		},
	});
}
