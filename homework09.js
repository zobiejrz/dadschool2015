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
    // for (var i = inputData.length; i > 0; i--) // Run loop to loop through the data lines
    // {
    //   var digitA = inputData[i];
    //   var digitB = inputData[i + 1];
    //   // Run loop to calculate the LCM
    //   while(digitA != digitB){
        
    //   }
      
      // Run loop to calculate the GCF

      // Console.log the two data numbers, and their LCM and GCF
    // }// End data loop
  });//End of file download code
} // End calculate function

function main()// Main function
{
calculate('homework09.data');// Call the calculate function
}// End main function
main();