const fs = require('fs');

const data = require('./entries.json');

const write = () => {
	const output = JSON.stringify(data);
	fs.writeFile("./entries.json", output, 'utf8', function (err) {
		if (err) {
			console.log("An error occured while writing JSON Object to File.");
			return console.log(err);
		}
		console.log("JSON file has been saved.");
	});
}

const add = (channel, project, tags, content) => { 
	data.push({
		channel: channel,
		project: project,
		tags: tags,
		content: content
	});
	write();
}

module.exports = {
	data,
	write,
	add
}