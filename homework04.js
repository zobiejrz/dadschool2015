function onErr(err) {
  console.log(err);
  return 1;
}

function main() {
  //initalize variables
  
  var height = 0,
    diameter = 0,
    volume = 0,
    surfaceArea = 0,
    unitMeasure = "";

  var splitNumbers = [];
  //introduction/explanation
  console.log("Input two the height, diameter, and unit for a cone, and I will output the Surface Area and Volume");
  
  //prompt for unit measurement
  //prompt for diameter and height
  //save diameter and height to their respective variables
  var prompt = require('prompt');

  var schema = {
    properties: {
      Values: {
        pattern: /(\d+)\s+(\d+)\s+(\w+)/,
        message: 'The format should be: height diameter unit measurement. Do not forget the space in between each value.',
        required: true
      }
    }
  };

  prompt.start();

  prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }

    console.log('  Values: ' + result.Values);
    splitNumbers = result.Values.split(" ");
    height = splitNumbers[0];
    console.log("\theight = " + height);
    diameter = splitNumbers[1];
    console.log("\tdiameter = " + diameter);
    unitMeasure = splitNumbers[2];
    console.log("\tunitMeasure = " + unitMeasure);
    
    //calculate answer
    var radius = diameter / 2;
    surfaceArea = Math.PI * radius * (radius + Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2)));
    volume = ((Math.PI * Math.pow(radius, 2)) * height) / 3;
    var sA = surfaceArea.toFixed(4);
    var v = volume.toFixed(4);
    
    //display answer with measurment
    console.log("A cone with a height of " + height + " " + unitMeasure + " and a diameter of " + diameter + " " + unitMeasure);
    console.log("will have a Surface Area of " + sA + " square " + unitMeasure);
    console.log("and a Volume of " + v + " cubic " + unitMeasure);
  });
  
  //All done!
}
 
// run the program
main();