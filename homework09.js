function gcf(a, b) {
	var firstNum = 0;
	var secondNum = 0;
	var thirdNum = 0;
	if (a > b) {
		firstNum = a;
		secondNum = b;
	} else if (b > a) {
		firstNum = b;
		secondNum = a;
	} else if( a == b){
		return a;
	}
	thirdNum = firstNum % secondNum;
	firstNum = secondNum;
	secondNum = thirdNum;
	while (secondNum != 0){
	thirdNum = firstNum % secondNum;
	firstNum = secondNum;
	secondNum = thirdNum;
	}
	return firstNum;
}
function lcm (a, b, gcf){
  var answer = ((a * b) / (gcf));
  return answer;
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
    var inputData = data.split(/\s+/);
    var counting = 0;
    
    // for (int i = 0; i < 10; i++) {}
    
    while(counting < (inputData.length - 1)) // Run loop to loop through the data lines
    {
      var gcfDisplay = gcf(inputData[counting], inputData[counting + 1]);
      var lcmDisplay = lcm(inputData[counting], inputData[counting + 1], gcfDisplay);
      console.log("The GCF of " + inputData[counting] + " and " + inputData[counting + 1]);
      console.log("is equal to " + gcfDisplay);
      console.log("The LCM of " + inputData[counting] + " and " + inputData[counting + 1]);
      console.log("is equal to " + lcmDisplay);
      counting = counting + 2;
    }// End data loop
  });//End of file download code
} // End calculate function

function main()// Main function
{
calculate('homework09.data');// Call the calculate function
}// End main function
main();