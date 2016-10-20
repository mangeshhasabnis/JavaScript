function add(a, b) {
	return a + b;
}

function applyf(fn) {
	return function(a) {
		return function(b) {
			return fn(a, b);
		}
	}
}

var addf = applyf(add);
console.log(addf(3)(4));

var inc = applyf(add)(1);
console.log(inc(inc(5)));