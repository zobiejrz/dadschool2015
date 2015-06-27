function onErr(err) {
  console.log(err);
  return 1;
}
//initialize variables

var x = 0,
    y = 0;
var a = 0,
    b = 0,
    c = 0,
    d = 0,
    e = 0,
    f = 0;

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

  var splitNumbers = result.Numbers.split (" ");
  a = splitNumbers[0];
  console.log ("\ta = " + a);
  b = splitNumbers[1];
  console.log ("\tb = " + b);
  c = splitNumbers[2];
  console.log ("\tc = " + c);
  d = splitNumbers[3];
  console.log ("\td = " + d);
  e = splitNumbers[4];
  console.log ("\te = " + e);
  f = splitNumbers[5];
  console.log ("\tf = " + f);
  

  //calculate answer


  x = ((c * e) - (f * b)) / ((a * e) - (d * b));
  y = ((a * f) - (d * c)) / ((a * e) - (d * b));
  //display correct answer
  console.log("Using the number you gave us, the equation is:");
  console.log(a + "x + " + b + "y = " + c);
  console.log(" and, ");
  console.log(d + "x + " + e + "y = " + f);
  console.log("In this equation, 'X' is equal to " + x + ", and 'Y' is equal to " + y + ".");
});
//All done!
