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
    unitMeasure = "units";
  // slantHeight = 0;// TODO: Math.sqrt((diameter/2 * diameter/2) + (height * height));
  var splitNumbers = [];
  //introduction/explanation
  
  console.log("Input two the height, diameter, and unit for a cone, and I will output the Surface Area and Volume");
  
  //prompt for unit measurement
  
  //prompt for diameter and height
  //save diameter and height to their respective variables
  var prompt = require('prompt')


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
  // var height = 3,
  // 	diameter = 8,
  // 	volume = 0,
  // 	surfaceArea = 0,
  // 	unitMeasure = "units",
  // 	slantHeight = Math.sqrt((diameter/2 * diameter/2) + (height * height));
  // var splitNumbers = "";
  prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
    

    // height = toString(height);
    // volume = toString(volume);
  
    console.log('  Values: ' + result.Values);
    splitNumbers = result.Values.split(" ");
    height = splitNumbers[0];
    console.log("\theight = " + height);
    diameter = splitNumbers[1];
    console.log("\tdiameter = " + volume);
    unitMeasure = splitNumbers[2];
    console.log("\tunitMeasure = " + unitMeasure);
    
    //height = height.toPrecision(4);
    //volume = volume.toPrecision(4);
    
    //calculate answer
    surfaceArea = (3.14159 * (diameter / 2) ^ 2) +
    (2 * 3.14159 * (diameter / 2)) / 2 * Math.sqrt((diameter / 2 * diameter / 2) + (height * height));
    volume = ((3.14159 * (diameter / 2) ^ 2) * height) / 3;
  
    //display answer with measurment
  
    console.log("A cone with a height of " + height + " " + unitMeasure + " and a diameter of " + diameter + " " + unitMeasure);
    console.log("will have a Surface Area of " + surfaceArea + " square " + unitMeasure);
    console.log("and a Volume of " + volume + " cubic " + unitMeasure);

  });
  
  //All done!
}

// run the program
main();