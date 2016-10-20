function Shape() {
	
}

Shape.prototype.area = function() {
	console.log("Shape area function");
}

var obj = new Shape();
//obj.area();

function Square() {

}

Square.prototype = new Shape();

Square.prototype.length = function() {
	console.log("length");
}

var obj2 = new Square();
obj2.area();
obj2.length();