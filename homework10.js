function onErr(err) {
  console.log(err);
  return 1;
}
function numToWord(intVal) {
  var place = intVal.length;
  var totalPlace = place;
  var placeOne = '';
  var placeTwo = '';
  var placeThree = '';
  var placeFour = '';
  var teen = false;
  var teenHolder
  var placeHolder = intVal.split("");
  for (var k = 0; k < placeHolder.length; k++) {

    if (place == 4) { // Algorithm for changing the numbers to words
      if (placeHolder[k] == 9) {
        placeOne = 'nine thousand';
      } else if (placeHolder[k] == 8) {
        placeOne = 'eight thousand';
      } else if (placeHolder[k] == 7) {
        placeOne = 'seven thousand';
      } else if (placeHolder[k] == 6) {
        placeOne = 'six thousand';
      } else if (placeHolder[k] == 5) {
        placeOne = 'five thousand';
      } else if (placeHolder[k] == 4) {
        placeOne = 'four thousand';
      } else if (placeHolder[k] == 3) {
        placeOne = 'three thousand';
      } else if (placeHolder[k] == 2) {
        placeOne = 'two thousand';
      } else if (placeHolder[k] == 1) {
        placeOne = 'one thousand';
      }
    } else if (place == 3) {
      if (placeHolder[k] == 9) {
        placeTwo = 'nine hundred';
      } else if (placeHolder[k] == 8) {
        placeTwo = 'eight hundred';
      } else if (placeHolder[k] == 7) {
        placeTwo = 'seven hundred';
      } else if (placeHolder[k] == 6) {
        placeTwo = 'six hundred';
      } else if (placeHolder[k] == 5) {
        placeTwo = 'five hundred';
      } else if (placeHolder[k] == 4) {
        placeTwo = 'four hundred';
      } else if (placeHolder[k] == 3) {
        placeTwo = 'three hundred';
      } else if (placeHolder[k] == 2) {
        placeTwo = 'two hundred';
      } else if (placeHolder[k] == 1) {
        placeTwo = 'one hundred';
      }
    } else if (place == 2) {
      if (placeHolder[k] == 9) {
        placeThree = 'ninety';
      } else if (placeHolder[k] == 8) {
        placeThree = 'eighty';
      } else if (placeHolder[k] == 7) {
        placeThree = 'seventy';
      } else if (placeHolder[k] == 6) {
        placeThree = 'sixty';
      } else if (placeHolder[k] == 5) {
        placeThree = 'fifty';
      } else if (placeHolder[k] == 4) {
        placeThree = 'fourty';
      } else if (placeHolder[k] == 3) {
        placeThree = 'thirty';
      } else if (placeHolder[k] == 2) {
        placeThree = 'twenty';
      } else if (placeHolder[k] == 1) {
        if (placeHolder[k + 1] == 9) {
          teenHolder = 'nineteen';
        } else if (placeHolder[k + 1] == 8) {
          teenHolder = 'eighteen';
        } else if (placeHolder[k + 1] == 7) {
          teenHolder = 'seventeen';
        } else if (placeHolder[k + 1] == 6) {
          teenHolder = 'sixteen';
        } else if (placeHolder[k + 1] == 5) {
          teenHolder = 'fifteen';
        } else if (placeHolder[k + 1] == 4) {
          teenHolder = 'fourteen';
        } else if (placeHolder[k + 1] == 3) {
          teenHolder = 'thirteen';
        } else if (placeHolder[k + 1] == 2) {
          teenHolder = 'twelve';
        } else if (placeHolder[k + 1] == 1) {
          teenHolder = 'eleven';
        } else if (placeHolder[k + 1] == 0) {
          teenHolder = 'ten'
        }
        teen = true;
      }
    } else if ( place == 1 ) {
        if (placeHolder[k] == 9) {
        placeFour = 'nine';
      } else if (placeHolder[k] == 8) {
        placeFour = 'eight';
      } else if (placeHolder[k] == 7) {
        placeFour = 'seven';
      } else if (placeHolder[k] == 6) {
        placeFour = 'six';
      } else if (placeHolder[k] == 5) {
        placeFour = 'five';
      } else if (placeHolder[k] == 4) {
        placeFour = 'four';
      } else if (placeHolder[k] == 3) {
        placeFour = 'three';
      } else if (placeHolder[k] == 2) {
        placeFour = 'two';
      } else if (placeHolder[k] == 1) {
        placeFour = 'one';
      }
      }
    place--;
  }
  if (teen == true) {
    if (totalPlace == 4) { // Checks for variables are and are not displayed
      console.log("\n" + placeOne + ' ' + placeTwo + ' ' + teenHolder);
    } else if (totalPlace == 3) {
      console.log("\n" + placeTwo + ' ' + teenHolder);
    } else if (totalPlace == 2) {
      console.log("\n" + teenHolder);
    } else {
      console.log("\n" + placeFour);
    }
  } else {
    if (totalPlace == 4) { // Checks for variables are and are not displayed
      console.log("\n" + placeOne + ' ' + placeTwo + ' ' + placeThree + ' ' + placeFour);
    } else if (totalPlace == 3) {
      console.log("\n" + placeTwo + ' ' + placeThree + ' ' + placeFour);
    } else if (totalPlace == 2) {
      console.log("\n" + placeThree + ' ' + placeFour);
    } else {
      console.log("\n" + placeFour);
    }
  }

}

function main() {
  var fileName = 'homework10.data'; // Process homework10.data into a string
  
  // Download [generic].data
  // Split [generic].data
  var __dirname = "C:\\Users\\ben\\src\\dadschool2015";

  var fs = require('fs');
  var path = require('path');

  var filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {// Start of file download code
    if (!err) {
      console.log("Now downloading data from " + filePath);
      console.log('>>>\n' + data + "\n<<<");
    }
    else {
      console.log(err);
    }
    var dataNumber = data.split(/\s+/);
    // Loop through [generic].data
    for (var i = 0; i < dataNumber.length; i++) {
      var currentNum = dataNumber[i];
      numToWord(currentNum);
    }
  }); // End of file download code
  
}
main(); // Run program

// The program has finished!