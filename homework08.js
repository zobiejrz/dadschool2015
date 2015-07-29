

function readAndProcessFile(fileName) {
	
	// Read Input 
	var fs = require('fs');
	var path = require('path');

	var __dirname = "C:\\Users\\ben\\src\\dadschool2015";

	console.log("About to readFile for fileName:" + fileName);

	var filePath = path.join(__dirname, fileName);
	var fileData = null;

	fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
		if (err) {
			console.log(err);
			return -1;
		}

		fileData = data.toString();

		// var inputData = fileData;
		// console.log(fileData);
		
		// Process Input
		var checkCounter = 0;
		// TODO: Put in the service charge for checking
		var checkTotal = 0;
		var bankData = fileData.split(/\s+/);
		var lineCounter = 0;
		var account = 0;
		var accountBal = 0;
		// Loop until legal term 'q'
		while (bankData[lineCounter] != 'q') {
		
			// Loop until legal term 'e'
			while (bankData[lineCounter] != 'e') {
				// Check for the legal term 'b'

				if (bankData[lineCounter] == 'b')
				{
					lineCounter++;
					account = bankData[lineCounter];
					//console.log second number(account number)
					//console.log third number (inital amount in account)
					accountBal = bankData[lineCounter + 1];
					console.log("\nAccount number: " + account);
					console.log("\nAccount balance: $" + accountBal);
				}
				// If 'd' add next number to inital amount in the account
				else if (bankData[lineCounter] == 'd') {
					console.log("Deposit $" + bankData[lineCounter + 1]);
					accountBal = (accountBal + bankData[lineCounter + 1]);
					lineCounter++;
				}
				// If 'c' subtract next number
				// Add to number of 'c's
				else if (bankData[lineCounter] == 'c')
				{
					console.log("Check for $" + bankData[lineCounter + 1]);
					accountBal = (accountBal - bankData[lineCounter + 1]);
					checkCounter++;
					lineCounter++;
				}
				// Else ignore
				else 
				{
					lineCounter++;
				}

			}// End second loop
			console.log("Acount Balance: $" + accountBal);
			lineCounter++
		}// End first loop
	});


}

function main(input) {
	readAndProcessFile("homework08.data1");
}
// Execute the program!
main();
// The program has finished running!
