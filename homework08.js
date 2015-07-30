

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
		var bankData = fileData.split(/\s+/);
		var lineCounter = 0;




		// Loop until legal term 'q'
		while (bankData[lineCounter] != 'q') {
			var badData = 0;
			var account = 0;
			var accountBal = 0;
			var checkCounter = 0;
			// Loop until legal term 'e'
			while (bankData[lineCounter] != 'e') {
				// console.info("while(!e)");
				var line = Number(bankData[lineCounter + 1]);
				// Check for the legal term 'b'
				if (bankData[lineCounter] == 'b') {
					account = line;
					//console.log second number(account number)
					//console.log third number (inital amount in account)
					accountBal = bankData[lineCounter + 2];
					console.log("\nAccount number: " + account);
					console.log("\nAccount balance: $" + accountBal);
				}
				// If 'd' add next number to inital amount in the account
				else if (bankData[lineCounter] == 'd') {
					console.log("Deposit $" + line);
					accountBal = (Number(accountBal) + line);
				}
				// If 'c' subtract next number
				// Add to number of 'c's
				else if (bankData[lineCounter] == 'c') {
					console.log("Check for $" + line);
					accountBal = (accountBal - line);
					checkCounter++;
				}
				// Else ignore
				else if(bankData[lineCounter] != 'b' || bankData[lineCounter] != 'c' || bankData[lineCounter] != 'd'){
					// console.warn("BAD DATA!");
					badData++;
					console.log("Bad Data: " + bankData[lineCounter]);
				}

				lineCounter++;
			}// End second loop
			checkCounter = (checkCounter * 0.15);
			console.log("Account Balance: $" + accountBal);
			console.log("Check service charge ($0.15 per check): $" + checkCounter);
			console.log("Acount Balance with service charge: $" + (accountBal - checkCounter));
			lineCounter++;
		}// End first loop
		console.log("Number of incorrect inputs: " + badData);
	});


}

function main(input) {
	readAndProcessFile("homework08.data1");
	// readAndProcessFile("homework08.data2");
}
// Execute the program!
main();
// The program has finished running!
