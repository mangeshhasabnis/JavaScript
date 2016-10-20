function moveDisk(diskNumber, from, to, other) {
	if (diskNumber > 0) {
		moveDisk(diskNumber-1, from, other, to);
		console.log("Move disk " + diskNumber + " from " + from + " to " + to);
		moveDisk(diskNumber-1, other, to, from);
	}
}

function init() {
	var numberOfDisks = 5;
	console.log("Starting ...");

	moveDisk(numberOfDisks, 'A', 'B', 'C');
}

init();