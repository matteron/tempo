const BuildSpace = require("buildspace");
const Template = require('./template');
const Page = require('./page');

const bs = new BuildSpace({

});
bs.setDefaultTemplate(Template);
bs.register(Page);
bs.enter();