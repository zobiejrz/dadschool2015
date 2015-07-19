function onErr(err) {
  console.log(err);
  return 1;
}
console.log("I am a personel calculation device for calculating perimeter and area of a square.");
console.log("All you have to do is give my the length of a side.");
var prompt = require('prompt')


var schema = {
  properties: {
    Side: {
      pattern: /^[1-9]+$/,
      message: 'Only positive integers are allowed.',
      required: true
    }
  }
};


prompt.start();

prompt.get(schema, function (err, result) {
  if (err) { return onErr(err); }
  console.log('  Side: ' + result.Side);
  var sideLength = result.Side;

  var perimeter = sideLength * 4;
  var area = sideLength * sideLength;

  console.log("The area of this square is " + area);
  console.log("The perimeter of this square is " + perimeter);
});