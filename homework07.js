function onErr(err) {
  console.log(err);
  return 1;
}

function main() {

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
      var dat = inputData[i];
      if (dat > 0) {
         for (var j = 1; j < dat; j++) {
          var result = 0;
          result = result + Math.pow(1 / j, 2);
         }
        result = Math.sqrt(result * 6);

        console.log("Approximating pi to " + dat + " digits is approximatly");
        console.log("\t" + result.toFixed(6));
      }
      else {
        console.log("I cannnot calculate pi using that number (" + dat + ")");
      }
    }


    //The code from this point on will run the prompt version
    
    // var resultNum = 0;
    // var counter = 1;
    // console.log("I will calculate an approximation of pi if you give me what digit to approximate to.");
    //prompt for what digit of pi we go to

    // var prompt = require('prompt');

    // var schema = {
    //   properties: {
    //     Digit: {
    //       //regex pattern that only allows positive integers
    //       pattern: /^[1-9]\d/,
    //       message: 'Error,You can only input a postitive integer',
    //       required: true
    //     }
    //   }
    // };

    // prompt.start();

    // prompt.get(schema, function (err, result) {
    //   if (err) { return onErr(err); }
    //   result.Digit = dataSplit[counter];
    //   var digits = result.Digit;

    //   //for- loop that will actually calculate what the app. of pi is
    //   for (var i = digits; i > 0; i--) {
    //     resultNum = Math.pow(resultNum + (1 / i), 2);
    //   }
    //   resultNum = Math.sqrt(resultNum * 6);
    //   console.log("Approximating pi to " + digits + " digits is approximatly");
    //   console.log("\t" + resultNum.toFixed(6));

    // });

  });
}
main();
//terminate
