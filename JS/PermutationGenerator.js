function generate(startingIndex, elements) {
	for(var i = startingIndex + 1; i < elements.length; i++) {
		generate(i, elements);
	}
}


function init() {
	var col = ['a','b','c'];

	generate(0, col);
}

init();