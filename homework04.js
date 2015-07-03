function onErr(err) {
  console.log(err);
  return 1;
}
//initalize variables
var height = 3;
var diameter = 4;
var volume = 0;
var surfaceArea = 0;
var unitMeasure = "units";
var slantHeight = ((diameter/2 * diameter/2) + (height * height))^(1/2);
/*if(slantHeight = 5)
{
  console.log("true");
}
else
{
  console.log("false");
}
*/
//introduction/explanation

//prompt for unit measurement
var prompt = require('prompt')

var schema = {
    properties: {
      Unit: {
	   pattern: /^[0-9]+$/,
        message: 'Error Message',
        required: true
      }
    }
  };
prompt.start();

prompt.get(schema, function (err, result) {
	if (err) { return onErr(err); }
	console.log('What is unit of measurement should I use?: ' + result.whatPRomptIs);
	unitMeasure = result.Unit;

});
//prompt for diameter and height
//save diameter and height to their respective variables
var prompt2 = require('prompt')

var schema2 = {
    properties: {
      shapeDiameter: {
	   pattern: /^[0-9]+$/,
        message: 'Error',
        required: true
      }
    }
  };
prompt.start();

prompt.get(schema, function (err, result) {
	if (err) { return onErr(err); }
	console.log('What is the diameter: ' + result.shapeDiameter);
	diameter = result.shapeDiameter;

});
var prompt3 = require('prompt')

var schema3 = {
    properties: {
      Height: {
	   pattern: /^[0-9]+$/,
        message: 'Error',
        required: true
      }
    }
  };
prompt.start();

prompt.get(schema, function (err, result) {
	if (err) { return onErr(err); }
	console.log('What is the height?: ' + result.whatPRomptIs);
	height = result.Height;

});
//calculate answer
surfaceArea = (3.14159 * ((diameter/2) * (diameter/2)) + (3.14159 * (diameter/2))/2 * slantHeight);
volume = (3.14159 * ((diameter/2) * (diameter/2)) * height) / 3;

//display answer with measurment

console.log("A cone with a height of " + height + " " + unitMeasure + " and a diameter of " + diameter + " " + unitMeasure + " will have");
console.log("volume of " + volume + " cubic " + unitMeasure);
console.log("surface area of " + surfaceArea + " square " + unitMeasure);

//All done!