const mongoose = require("mongoose");
const { Schema } = mongoose;

const soundSchema = new Schema({
	name: String,
	code: String,
	description: String,
	iconPath: String,
	dataPath: [String]
});

mongoose.model("SOUNDS", soundSchema);
