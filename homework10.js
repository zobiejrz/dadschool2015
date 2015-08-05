function onErr(err) {
  console.log(err);
  return 1;
}
function processNum (num, count){
  for( var i = 0; i < count; i++ ){
    if( num == 9 ) { 
      console.log("Nine");
    } else if ( num == 8 ) {
      console.log("Eight");
    } else if ( num == 7 ) {
      console.log("Seven");
    } else if ( num == 6 ) {
      console.log("Six");
    } else if ( num == 5 ) {
      console.log("Five");
    } else if ( num == 4 ) {
      console.log("Four");
    } else if ( num == 3 ) {
      console.log("Three");
    } else if ( num == 2 ) {
      console.log("Two");
    } else if ( num == 1 ){
      console.log("One");
    }
  }
}
function programRun(fileName) { // Function that will input a number and output the same number as a string
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
    var num = data.split(/\s+/);
    // Loop through [generic].data
    for ( var i = 0; i < num.length; i++ ){
      var currentNum = num[i].split("");
    // Process [generic].data into a string
    // Display number as string
      console.log("currentNum: " + currentNum);
      if ( currentNum.length == 4 ) {
        processNum ( currentNum, 4 );
      } else if ( currentNum.length == 3 ) {
        processNum ( currentNum, 3 );
      } else if ( currentNum.length == 2 ) {
        processNum ( currentNum, 2 );
      } else if ( currentNum.length == 1 ){
        processNum ( currentNum, 1);
      } else {
        console.log (currentNum + " is an incorrect input. Only inputs that are greater than 0 and less than 10000 can be processed.")
      }
  }
}); // End of file download code
}
function main() {
  programRun('homework10.data'); // Process homework10.data into a string
}
main(); // Run program
// The program has finished!