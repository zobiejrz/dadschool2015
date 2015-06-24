function onErr(err)
{
	console.log(err);
	return 1;
}
//initialize variables
var split = "1 2 3 4 5 6".split(" ");
var X = 0;
var Y = 0;
var A = split[0];
//for testing
//console.log(A);
var B = split[1];
//console.log(B);
var C = split[2];
//console.log(C);
var D = split[3];
//console.log(D);
var E = split[4];
//console.log(E);
var F = split[5];
//console.log(F);
//Introduction / explanation
console.log("I am a calculation device for solving equations similar to: ax + by = c. All you have to do is give me six numbers for to equations were X and Y equal the same thing.");
//prompt for numbers
//save numbers to variables
var prompt = require('prompt')


var schema = {
    properties: {
      Numbers: {
        pattern: /([1-9])\s/,
        message: 'Separate each number with a space.',
        required: true
      }
    }
  };


prompt.start();

prompt.get(schema, function (err, result) {
	if (err) { return onErr(err); }
	console.log('  Numbers: ' + result.Numbers);
	result.Numbers = split;
//calculate answer

X = ((C * E) - (F * B)) / ((A * E) - (D * B));
Y = ((A * F) - (D * F)) / ((A * C) - (D * B));
//display correct answer
console.log("Using the number you gave us, the equation is:");
console.log(A + "x + " + B + "y = " + C);
console.log(" and, ");
console.log(D + "x + " + E + "y = " + F);
console.log("In this equation, 'X' is equal to " + X + ", and 'Y' is equal to " + Y + ".");
});
//All done!