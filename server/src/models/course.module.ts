import db from "../database/database";

export default class Course {
	public id: string;
	public name: string;
	public price: number;
	public typePrice: boolean;
	public level: string;
	public description: string;
	public imageName: string;

	constructor(
		id: string,
		name: string,
		price: number,
		typePrice: boolean,
		level: string,
		description: string,
		imageName: string
	) {
		this.id = id;
		this.name = name;
		this.price = price;
		this.typePrice = typePrice;
		this.level = level;
		this.description = description;
		this.imageName = imageName;
	}

	public static fetchAllCourse() {
		return db.execute("SELECT * FROM courses");
	}
}
