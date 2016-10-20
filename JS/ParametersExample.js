var add = function Add(a, b, c) {
	if (c == undefined) {
		return a + b;
	}
	return a + b + c;
}

add(10, 3, 6);

var arr = [1,2,3,4,5];
console.log("The addition of 10 and 12 is " + Add(10, 13));
console.log(typeof(arr));


function retFunc(a) {
	return function() {
		return a;
	}
}

var a = 10;

var fn = retFunc(a);
console.log(fn());

function addNums(a) {
	return function(b) {
		return a + b;
	}
}

var a1 = 10;
var b1 = 23;

var result = addNums(a1)(b1);
console.log(result);


function applyf(fn) {
	return fn;
}

var addf = applyf(addNums);
console.log(addf(3)(4));
console.log(applyf(addNums)(3)(7));