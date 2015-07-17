function onErr(err) {
  console.log(err);
  return 1;
}
function main() {
  var splitVal = [];
  // prompt for input
  // input permitted (R / N Number)
  var prompt = require('prompt');

  var schema = {
    properties: {
      Values: {
        pattern: /([RNrn])\s+(\d+)/,
        message: 'Error, incorrect Value. You must do input [R/N] [number]',
        required: true
      }
    }
  };

  prompt.start();

  prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
    console.log('  Values: ' + result.Values);
    splitVal = result.Values.split(" ");
    var location = splitVal[0];
    var credit = splitVal[1];
    if (location == 'r' || location == 'R') {
      // if credits greater than 12
      if (credit > 12) {
        //You are ____ registering for _____ credits.
        //you are a full-timer
        //fee = ____
        var fee = 155 * credit;
        if (fee > 2500) {
          console.log(" You are a Residential student registering for " + credit + " credits.");
          console.log("You are considered a Full-Time student.");
          console.log("Total Fees: $2500");
        }
        else {
          console.log(" You are a Residential student registering for " + credit + " credits.");
          console.log("You are considered a Full-Time student.");
          console.log("Total Fees: $" + (155 * credit) + ".00");
        }
      }
      else if (credit < 0) {
        // if credits are less than 0
        //not allowed
        console.log("You are a Residential student registering for " + credit + " credits.");
        console.log("I'm sorry, but you are not allowed to register for that many credits!");
        console.log("Please try again later.");
      }
      else if (credit <= 10) {
        // if credits are less than 10
        //You are ____ registering for _____ credits.
        //you are a part-timer
        //fee = ____
        if (155 * credit > 2500) {
          console.log("You are a Residential student registering for " + credit + " credits.");
          console.log("You are considered a Part-Time student.");
          console.log("Total Fees: 2500");
        }
        else {
          console.log("You are a Residential student registering for " + credit + " credits.");
          console.log("You are considered a Part-Time student.");
          console.log("Total Fees: $" + (155 * credit) + ".00");
        }

      }
    }
    if (location == 'n' || location == 'N')
    {
      if(credit > 12)
      {
        console.log(" You are a Non-Residential student registering for " + credit + " credits.");
          console.log("You are considered a Full-Time student.");
          console.log("Total Fees: $" + (345 * credit + 1000) + ".00");
      }
      else if(credit < 0)
      {
        console.log("You are a Non-Residential student registering for " + credit + " credits.");
        console.log("I'm sorry, but you are not allowed to register for that many credits!");
        console.log("Please try again later.");
      }
      else if(credit <= 10)
      {
        console.log(" You are a Non-Residential student registering for " + credit + " credits.");
          console.log("You are considered a Part-Time student.");
          console.log("Total Fees: $" + (345 * credit + 1000) + ".00");
      }
    }
  });
}
main();
//terminate