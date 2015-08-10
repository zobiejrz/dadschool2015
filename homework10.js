function onErr(err) {
  console.log('>>>' + err + '<<< is not a valid input');
  return 1;
}
function numToWord(intVal) {
  var place = intVal.length;
  var totalPlace = place;
  var placeOne = '',
    placeTwo = '',
    placeThree = '',
    placeFour = '';
  var ones = false,
    tens = false,
    teen = false,
    hundreds = false,
    thousands = false;

  var teenHolder = '';
  var placeHolder = intVal.split("");
  for (var k = 0; k < placeHolder.length; k++) {

    if (place == 4) { // Algorithm for changing the numbers to words
      if (placeHolder[k] == 9) {
        placeOne = 'nine thousand';
        thousands = true;
      } else if (placeHolder[k] == 8) {
        thousands = true;
        placeOne = 'eight thousand';
        thousands = true;
      } else if (placeHolder[k] == 7) {
        placeOne = 'seven thousand';
        thousands = true;
      } else if (placeHolder[k] == 6) {
        placeOne = 'six thousand';
        thousands = true;
      } else if (placeHolder[k] == 5) {
        placeOne = 'five thousand';
        thousands = true;
      } else if (placeHolder[k] == 4) {
        placeOne = 'four thousand';
        thousands = true;
      } else if (placeHolder[k] == 3) {
        placeOne = 'three thousand';
        thousands = true;
      } else if (placeHolder[k] == 2) {
        placeOne = 'two thousand';
        thousands = true;
      } else if (placeHolder[k] == 1) {
        placeOne = 'one thousand';
        thousands = true;
      }

    } else if (place == 3) {
      if (placeHolder[k] == 9) {
        placeTwo = 'nine hundred';
        hundreds = true;
      } else if (placeHolder[k] == 8) {
        placeTwo = 'eight hundred';
        hundreds = true;
      } else if (placeHolder[k] == 7) {
        placeTwo = 'seven hundred';
        hundreds = true;
      } else if (placeHolder[k] == 6) {
        placeTwo = 'six hundred';
        hundreds = true;
      } else if (placeHolder[k] == 5) {
        placeTwo = 'five hundred';
        hundreds = true;
      } else if (placeHolder[k] == 4) {
        placeTwo = 'four hundred';
        hundreds = true;
      } else if (placeHolder[k] == 3) {
        placeTwo = 'three hundred';
        hundreds = true;
      } else if (placeHolder[k] == 2) {
        placeTwo = 'two hundred';
        hundreds = true;
      } else if (placeHolder[k] == 1) {
        placeTwo = 'one hundred';
        hundreds = true;
      } else if (placeHolder[k] == 0) {

      }

    } else if (place == 2) {
      if (placeHolder[k] == 9) {
        placeThree = 'ninety';
        tens = true;
      } else if (placeHolder[k] == 8) {
        placeThree = 'eighty';
        tens = true;
      } else if (placeHolder[k] == 7) {
        placeThree = 'seventy';
        tens = true;
      } else if (placeHolder[k] == 6) {
        placeThree = 'sixty';
        tens = true;
      } else if (placeHolder[k] == 5) {
        placeThree = 'fifty';
        tens = true;
      } else if (placeHolder[k] == 4) {
        placeThree = 'fourty';
        tens = true;
      } else if (placeHolder[k] == 3) {
        placeThree = 'thirty';
        tens = true;
      } else if (placeHolder[k] == 2) {
        placeThree = 'twenty';
        tens = true;
      } else if (placeHolder[k] == 1) {
        if (placeHolder[k + 1] == 9) {
          teenHolder = 'nineteen';
                  teen = true;
        } else if (placeHolder[k + 1] == 8) {
          teenHolder = 'eighteen';
                  teen = true;
        } else if (placeHolder[k + 1] == 7) {
          teenHolder = 'seventeen';
                  teen = true;
        } else if (placeHolder[k + 1] == 6) {
          teenHolder = 'sixteen';
                  teen = true;
        } else if (placeHolder[k + 1] == 5) {
          teenHolder = 'fifteen';
                  teen = true;
        } else if (placeHolder[k + 1] == 4) {
          teenHolder = 'fourteen';
                  teen = true;
        } else if (placeHolder[k + 1] == 3) {
          teenHolder = 'thirteen';
                  teen = true;
        } else if (placeHolder[k + 1] == 2) {
          teenHolder = 'twelve';
                  teen = true;
        } else if (placeHolder[k + 1] == 1) {
          teenHolder = 'eleven';
                  teen = true;
        } else if (placeHolder[k + 1] == 0) {
          teenHolder = 'ten'
                  teen = true;
        }

      }
    } else if (place == 1) {
      if (placeHolder[k] == 9) {
        placeFour = 'nine';
        ones = true;
      } else if (placeHolder[k] == 8) {
        placeFour = 'eight';
        ones = true;
      } else if (placeHolder[k] == 7) {
        placeFour = 'seven';
        ones = true;
      } else if (placeHolder[k] == 6) {
        placeFour = 'six';
        ones = true;
      } else if (placeHolder[k] == 5) {
        placeFour = 'five';
        ones = true;
      } else if (placeHolder[k] == 4) {
        placeFour = 'four';
        ones = true;
      } else if (placeHolder[k] == 3) {
        placeFour = 'three';
        ones = true;
      } else if (placeHolder[k] == 2) {
        placeFour = 'two';
        ones = true;
      } else if (placeHolder[k] == 1) {
        placeFour = 'one';
        ones = true;
      }

    }

    place--;
  }
  console.log('\n' + intVal + ' is turned into: ');
  if (totalPlace == 4) { // Yes Thousands
    if (hundreds == true) { // Yes Thousands Yes Hundreds
      if (teen == true) { // Yes Thousands Yes Hundreds Yes Teens
        console.log(placeOne + ' ' + placeTwo + ' ' + teenHolder);
      } else if (tens == true) { // Yes Thousands Yes Hundreds Yes Tens
        if (ones == true) { // Yes Thousands Yes Hundreds Yes Tens Yes Ones
          console.log(placeOne + ' ' + placeTwo + ' ' + placeThree + ' ' + placeFour);
        } else { // Yes Thousands Yes Hundreds Yes Tens No Ones
          console.log(placeOne + ' ' + placeTwo + ' and ' + placeThree);
        }
      } else if (tens == false && teen == false) { // Yes Thousands Yes Hundreds, Nothing else
        console.log(placeOne + ' ' + placeTwo);
      } else { // Error
        onErr(intVal);
      }
    } else { // Yes Thousands No Hundreds
      if (teen == true) { // Yes Thousands No Hundreds Yes Teens
        console.log(placeOne + ' and ' + teenHolder);
      } else if (tens == true) { // Yes Thousands No Hundreds Yes Tens
        if (ones == true) { // Yes Thousands No Hundreds Yes Tens Yes Ones
          console.log(placeOne + ' ' + placeThree + ' ' + placeFour);
        } else { // Yes Thousands No Hundreds Yes Tens No Ones
          console.log(placeOne + ' and ' + placeThree);
        }
      } else if (tens == false && ones == true) { // Yes Thousands No Hundreds No Tens Yes Ones
        console.log(placeOne + ' and ' + placeFour);
      } else { // Error
        onErr(intVal);
      }
    }
  } else if (totalPlace == 3) { // No Thousands Yes Hundreds
    if (teen == true) {
      console.log(placeTwo + ' ' + teenHolder);
    } else if (tens == true) {
      if (ones == true) {
        console.log(placeTwo + ' ' + placeThree + ' ' + placeFour);
      } else {
        console.log(placeTwo + ' ' + placeThree)
      }
    } else {
      console.log(placeTwo);
    }
  } else if (totalPlace == 2) { // No Thousands No Hundreds Yes Tens / Teens
    if (teen == true) { // Yes Teens
      console.log(teenHolder);
    } else { // Yes Tens
      if (ones == true) { // Yes Tens Yes Ones
        console.log(placeThree + ' ' + placeFour);
      } else { // Yes Tens No Ones
        console.log(placeThree);
      }
    }
  } else if (totalPlace == 1) { // No Thousands No Hundreds No Tens / Teens Yes Ones
    console.log(placeFour);
  } else {
    onErr(intVal);
  }

} // End of numToWord();

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