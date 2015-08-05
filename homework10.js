function process(fileName) {
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
    var processNum = data.split(/\s+/);
    // Loop through [generic].data
    for ( var i = 0; i < processNum.length; i++ ){
      var currentNum = processNum[i].split("");
    // Process [generic].data into a string
    // Display number as string
      console.log("currentNum: " + currentNum);
  }
}); // End of file download code
}
function main() {
  process('homework10.data'); // Process homework10.data into a string
}
main(); // Run program
// The program has finished!