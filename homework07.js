function onErr(err) {
  console.log(err);
  return 1;
}

function main()
{
  var countNum = 0;
  var resultNum = 0;
  
  console.log("I will calculate an approximation of pi if you give me what digit to approximate to.")
  //prompt for what digit of pi we go to
  var prompt = require('prompt');

  var schema = {
    properties: {
      Digit: {
        //regex pattern that only allows positive integers
        pattern: /([1-9]+)([0]+)?/,
        message: 'Error,You can only input a postitive integer',
        required: true
      }
    }
  };

  prompt.start();

  prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
    var digits = prompt.Digits;
    
    //while loop that will actually calculate what the app. of pi is
    while(digits > countNum)
    {
      resultNum = (resultNum + (1 / countNum));
      countNum++;
      console.log(countNum);
    }
    
    console.log("Approximating pi to " + digits + " digits is approximatly to");
    console.log("\t" + resultNum.toFixed(6));
  });
}
main();
//terminate