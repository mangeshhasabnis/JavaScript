function foo() {
	var bam = "bam";
	console.log(this.bam);
}


global.bam = "global bam";
var obj = { bam: "object bam", foo: foo};

foo();
obj.foo();