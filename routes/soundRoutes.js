const soundService = require("../services/soundService");
// const arrayHelper = require("../utils/arrayUtils");

module.exports = app => {
	app.get("/api/sound/grid/:soundGridCode", async (req, res) => {
		const grid = await soundService.getSoundGrid(req.params.soundGridCode);
		if(grid) {
			res.json(grid);
			res.status(200).send();
		} else {
			res.status(400).send("no grid found");
		}
	});

	app.post('/api/sound/grid/create', async (req, res) => {
		const payload = req.body;
		console.log('POST: /api/sound/grid/create\nBody: ');
		console.log(payload);

		if(payload) {
			const result = await soundService.createSoundGrid(payload);
			if(result) {
				res.status(200).send();
				return;
			} else {
				res.status(400).send('bad fields');
				return;
			}
		}
		res.status(500).send();
	});

	app.post('/api/sound/create', async (req, res) => {
		const payload = req.body;
		console.log('POST: /api/sound/create\nBody: ');
		console.log(payload);
		
		if(payload) {
			const result = await soundService.createSound(payload);
			if(result) {
				res.status(200).send();
				return;
			} else {
				res.status(400).send('bad fields');
				return;
			}
		}
		res.status(500).send();
	});
};


	// app.get("/api/quotes/daily", async (req, res) => {
	// 	const quotes = await quoteService.getRecentQuotes();

	// 	if(quotes.length > 0) {
	// 		res.status(200).send({dailyQuote: arrayHelper.getRandom(quotes)});
	// 	} else {
	// 		console.log("Found no quotes");
	// 		res.status(404).send({warning: "no content found"});
	// 	}
	// });
	
	// app.post("/api/quotes", async (req, res) => {
	// 	const payload = req.body;
	// 	console.log("POST: /api/quotes");
	// 	console.log(payload);

	// 	if(payload.quote === null) {
	// 		res.status(400).send({ error: "Payload had fields missing"});
	// 	} else {
	// 		const success = await quoteService.addNewQuote(payload);
	// 		if(success) {
	// 			res.status(200).send({result: "Successfully added new quote"});	
	// 		} else {
	// 			res.status(409).send({error: "Quote already exists"});
	// 		}
	// 	}
	// });