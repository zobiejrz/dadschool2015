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
      // response.writeHead(200, { 'Content-Type': 'text/html' });
      // response.write(data);
      // response.end();
    } else {
      console.log(err);
    }

  });
  
  
  /*
  var resultNum = 0;

  console.log("I will calculate an approximation of pi if you give me what digit to approximate to.")
  //prompt for what digit of pi we go to
  var prompt = require('prompt');

  var schema = {
    properties: {
      Digit: {
        //regex pattern that only allows positive integers
        pattern: /^[1-9]\d*TODO /,
        message: 'Error,You can only input a postitive integer',
        required: true
      }
    }
  };

  prompt.start();

  prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
    var digits = result.Digit;
    
    //for- loop that will actually calculate what the app. of pi is
    for(var i = digits; i > 0; i--) {
      resultNum = Math.pow(resultNum + (1 / i), 2);
    }
    resultNum = Math.sqrt(resultNum * 6);
    console.log("Approximating pi to " + digits + " digits is approximatly");
    console.log("\t" + resultNum.toFixed(6));
  });
  */
}
main();
//terminate