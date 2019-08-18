var input = process.argv; // run on terminal: node program2.js 1 2 3
var sum = 0;
for (var index = 2; index < input.length; index++) {
	sum += Number(input[index]);
}
console.log(sum);
// 6
