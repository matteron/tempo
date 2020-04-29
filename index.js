const options = require('./options');
const { firstChar } = require('./helpers');
const entries = require('./entries');

const args = process.argv.slice(2);
const channel = args.find(firstChar(options.syntax.channel)).slice(1);
const project = args.find(firstChar(options.syntax.project)).slice(1);
const tags = args.filter(firstChar(options.syntax.tag)).map(t => t.slice(1));
const content = args.find(a => a.includes(' '));

entries.add(channel, project, tags, content);