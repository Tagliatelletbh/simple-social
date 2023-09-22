import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
	mongoose.set("strictQuery", true);

	if (isConnected) {
		return console.log("[MONGODB] already connected");
	}

	try {
		await mongoose.connect(process.env.DATABASE_URL!);

		isConnected = true;
		console.log("[MONGODB] connected");
	} catch (error) {
		console.log("[MONGODB_ERR]", error);
	}
};
