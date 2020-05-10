const { h } = require('haipa');
const { Tag } = require('haipa/lib/tag');
const options = require('../options');

Tag.prototype.filterEntry = function(suffix, item) {
    return this.li(h()
        .a(h()
            .href('')
            .txt(suffix + item)
        )
    );
}

Tag.prototype.filterList = function(suffix, list) {
    const inner = h();
    list.forEach(e => inner.filterEntry(suffix, e));
    return this.ul(inner);
}

Tag.prototype.sidebar = function(data) {
    const inner = h();
    Object.keys(options.syntax).forEach(key => 
        inner.filterList(options.syntax[key], data[key + 's'])
    );
    return this.aside(inner);
}

module.exports = Tag;