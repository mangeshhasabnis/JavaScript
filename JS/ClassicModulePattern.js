var foo = (function() {
	var o = { bar: "bar" };

	return {
		bar: function() {
			console.log(o.bar);
		}
	}
})();

foo.bar();		//"bar"

var a = [1,2,3,4,5];

console.log(typeof(null));

