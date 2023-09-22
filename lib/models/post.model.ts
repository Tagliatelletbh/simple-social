import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default models.Post || model("Post", postSchema);
