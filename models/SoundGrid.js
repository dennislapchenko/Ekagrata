const mongoose = require("mongoose");
const { Schema } = mongoose;

const soundGridSchema = new Schema({
	name: String,
	code: String,
	description: String,
	sounds: [{ type: Schema.Types.ObjectId, ref: 'SOUNDS' }]
});

mongoose.model("SOUND_GRIDS", soundGridSchema);
