const entries = require('../input/entries/entries');
const { distinct } = require('../helpers');
const types = Object.keys(require('../options').syntax);

const filters = entries.data.reduce((acc, cur) => {
    types.forEach(key => acc[key + 's'].push(
        ...(cur[key] === undefined ? cur[key + 's'] : [cur[key]])
    ));
    return acc;
}, types.reduce((acc, cur) => {acc[cur+ 's'] = []; return acc}, {}));
types.forEach(key => filters[key + 's'].filter(distinct));

module.exports = class Page {
    path = 'index';
    data = {
        filters
    }
}