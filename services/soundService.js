const mongoose = require("mongoose");
const SoundGrid = mongoose.model("SOUND_GRIDS");
const Sound = mongoose.model("SOUNDS");

module.exports.getSoundGrid = async (soungrGridName) => {
	const grid = await SoundGrid.findOne({ code: soungrGridName})
		.populate('sounds')
		.exec((err, grid) => {
			if(!err) {
				console.log('Successfully loaded '+grid.sounds.length+' sounds for requested grid');
			}
		});

	if(grid) {
		return grid;
	} else {
		return false;
	}
};

module.exports.createSoundGrid = async (soundGrid) => {
	const validated = await validateSoundGrid(soundGrid);
	if(!validated) {
		return false;
	}

	const retrievedSounds = [];
	for(let s of soundGrid.sounds) {
		const foundSound = await Sound.findOne({ code: s });
		if(foundSound) {
			retrievedSounds.push(foundSound._id);
		}
	}

	if(retrievedSounds.length < 1) {
		console.log("could not find any sounds with requested codes:");
		console.log(soundGrid.sounds);
		return false;
	}

	console.log(retrievedSounds);

	const newSoundGrid = new SoundGrid({
		name: soundGrid.name,
		code: soundGrid.code,
		description: soundGrid.description,
		sounds: retrievedSounds
	});
	const result = await newSoundGrid.save();

	return result | false;
};

module.exports.createSound = async (sound) => {
	const validated = await validateSound(sound);
	if(!validated) {
		return false;
	}

	const savedSound = new Sound({
		name: sound.name,
		code: sound.code,
		description: sound.description,
		iconPath: sound.iconPath,
		dataPath: [sound.dataPath]
	});
	const result = await savedSound.save();

	return result | false;
};

const validateSoundGrid = async (soundGrid) => {
	if(soundGrid.sounds === null || soundGrid.sounds.length < 1) {
		console.log("sound grids sound codes were not present");
		return false;
	}

	const soundGridExists = await SoundGrid.findOne({ code: soundGrid.sound });
	if(soundGridExists) {
		console.log("Sound grid with such code exists");
		return false;
	}
	return true;
};

const validateSound = async (sound) => {
	if(sound.dataPath === undefined) {
		console.log("sound.dataPath was null");
		return false;
	}

	const codeExists = await Sound.find({ code: sound.code});
	if(codeExists && codeExists.length) {
		console.log("sound with such code already exists")
		return false;
	}

	return true;
};

// module.exports.addNewQuote = async (qt) => {
// 	console.log("Saving new quote");
// 	const existingQuote = await Quote.findOne({quote: qt.quote});
	
// 	if(existingQuote) {
// 		console.log("quote already existss");
// 		return false;
// 	}
	
// 	const newQuote = await new Quote({
// 		quote: qt.quote,
// 		author: qt.author,
// 		source: qt.source,
// 		year: qt.year,
// 		addedBy: qt.addedBy,
// 		tags: qt.tags,
// 		verified: true,
// 		createdDateTime: new Date(),
// 		updatedDateTime: new Date()
// 	}).save();
// 	return true;
// };