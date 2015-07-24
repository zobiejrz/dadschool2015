var  dataTransfer = " ";
function proccess() {
	var checkCounter = 0;
	var checkTotal = 0;
	var bankData = dataTransfer.split(;
	var lineCounter = 0;
	// Loop until legal term 'q'
	while (bankData[lineCounter] != 'q') {
		
		// Loop until legal term 'e'
		while (bankData[lineCounter] != 'e') {
			// Check for the legal term 'b'
			//console.log second number(account number)
			//console.log third number (inital amount in account)
			if (bankData[lineCounter] == 'b') {
				var account = bankData[lineCounter]
				lineCounter++;
				var accountBal = bankData[lineCounter]
				console.log("Account number: " + account);
				console.log("Account balance: " + accountBal)
			}
			// If 'd' add next number to inital amount in the account
			else if (bankData[lineCounter] == 'd') {
				accountBal = (accountBal + bankData[lineCounter]);
				lineCounter++;
			}
			// If 'c' subtract next number
			// Add to number of 'c's
			else if (bankData[lineCounter] == 'c') {
				accountBal = (accountBal - bankData[lineCounter]);
				checkCounter++;
				lineCounter++;
			}
			// Else ignore
			else {
				lineCounter++;
			}
			//console.log 
			console.log("Checks proccessed: " + checkCounter);
			checkTotal = (checkCounter + (checkCounter * 0.15));
			console.log("Check total charge: " + checkTotal);
			console.log("Final account balance: " + accountBal);
			// End second loop
		}
		// End first loop
	}
}

function main() {
	// Download homework08.data1
	console.log("homework08.data1:");
	var __dirname = "C:\\Users\\ben\\src\\dadschool2015";

	var fs = require('fs');
	var path = require('path');

	var filePath = path.join(__dirname, 'homework08.data1');

	fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
		if (!err) {
			console.log('>>>\n' + data + "\n<<<");
		}
		else {
			console.log(err);
		}
		dataTransfer = data
	});
	// Run process() using homework08.data1

	// Download homework08.data2
	console.log("homework08.data2");
	var __dirname2 = "C:\\Users\\ben\\src\\dadschool2015";

	var fs2 = require('fs');
	var path2 = require('path');

	var filePath2 = path2.join(__dirname2, 'homework08.data2');

	fs2.readFile(filePath2, { encoding: 'utf-8' }, function (err, data2) {
		if (!err) {
			console.log('>>>\n' + data2 + "\n<<<");
		}
		else {
			console.log(err);
		}
		dataTransfer = data2
	});
	// Run process() using homework08.data2

}
main();