module.exports = app => {
    require('fs')
	    .readdirSync(__dirname)
		    .forEach(file => {
		        if (file == "index.js") return;        
		        var name = file.substr(0, file.indexOf('.'));
		        require('./' + name)(app);
		    });
}