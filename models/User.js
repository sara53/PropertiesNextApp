import mongoose, { Schema, model, models } from "mongoose";

const userSchema = new Schema(
	{
		email: {
			type: String,
			required: [true, "Email is Required"],
			unique: [true, "Email Already Exist"],
		},
		username: {
			type: String,
			required: [true, "Email is required"],
		},
		image: {
			type: String,
		},
		bookmarks: {
			type: Schema.Types.ObjectId,
			ref: "Property",
		},
	},
	{ timestamps: true }
);

const user = models.User || model("User", userSchema);

export default user;
