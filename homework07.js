function onErr(err) {
  console.log(err);
  return 1;
}

/// This method will approximate PI based on the formula provided
/// in the assignment and based on the provided precision.
function calculatePi (precision)
{
  
  if (precision <= 0)
  {
    onErr ("I cannnot calculate pi using that number (" + precision + ")");
    return -1;
  }
  
  var resultNum = 0;
  for (var i = precision; i > 0; i--) {
    resultNum = Math.pow(resultNum + (1 / i), 2);
  }
  resultNum = Math.sqrt(resultNum * 6);
  return resultNum;
}

function runWithPrompt ()
{
    console.log("I will calculate an approximation of pi if you give me what digit to approximate to.");
    // prompt for what digit of pi we go to

    var prompt = require('prompt');

    var schema = {
      properties: {
        Digit: {
          //regex pattern that only allows positive integers
          pattern: /^[1-9]\d?/,
          message: 'Error,You can only input a postitive integer',
          required: true
        }
      }
    };

    prompt.start();

    prompt.get(schema, function (err, result) {
      if (err) { return onErr(err); }
      
      var digits = result.Digit;
      var pi = calculatePi(digits);
      console.log("Approximating pi to " + digits + " digits is approximatly");
      console.log("\t" + pi.toFixed(6));

    });

}

function runAsBatch ()
{
   var __dirname = "C:\\Users\\ben\\src\\dadschool2015";

  var fs = require('fs');
  var path = require('path');

  var filePath = path.join(__dirname, 'homework07.data');

  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      console.log('>>>\n' + data + "\n<<<");
    }
    else {
      console.log(err);
    }
    var inputData = data.split(/\s+/);
    var numElements = inputData[0]; // the specs say that the first element is always the number of elements that will be processed
    console.log("I will be calculating >" + numElements + "< different entries from " + filePath);

    for (var i = 1; i <= numElements; i++) {

      var digits = inputData[i];
      var pi = calculatePi(digits);
      console.log("Approximating pi to " + digits + " digits is approximatly");
      console.log("\t" + pi.toFixed(6));

    }

  });
}

function main()
{

  runWithPrompt();
  // runAsBatch();
 
}

// Execute the app!
main();
// Terminate!
