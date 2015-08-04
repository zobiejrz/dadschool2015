function gcd (a, b) {
  if (!b){
    return a;
  }
  
  return gcd(b, a % b);
}

function onErr(err)//On Error function for when there is an error
{
  console.log(err);
  return 1;
}
function calculate(fileName)// Function that will calculate the LCM and the GCF
{
  // Download data from
  // Users\ben\src\dadschool2015\homework09.data
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
    var inputData = data.split(" ");
    console.log("Input Data:\n" + inputData);
    var counting = 0;
    
    while(counting <= inputData.length) // Run loop to loop through the data lines
    {
      console.log("Counting: " + counting);
      console.log(gcd(inputData[counting], inputData[counting + 1]));
      counting = counting + 2;
    }// End data loop
  });//End of file download code
} // End calculate function

function main()// Main function
{
calculate('homework09.data');// Call the calculate function
}// End main function
main();