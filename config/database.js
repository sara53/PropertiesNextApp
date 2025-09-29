import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
	// if database is already connected , don't connect again
	if (connected) {
		console.log("DB already Connected");
		return;
	}

	try {
		await mongoose.connect("mongodb://localhost:27017/PropertyDB");
		connected = true;
		console.log("Connected .............. ");
	} catch (error) {
		console.log("Error while connecting to database");
	}
};

export default connectDB;
