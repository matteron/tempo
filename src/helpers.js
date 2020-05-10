// This is unnecessary but funny
exports.firstChar = (char) => {
	return (a) => a.startsWith(char);
}

exports.distinct = function(value, index, self) {
    return self.indexOf(value) === index;
}