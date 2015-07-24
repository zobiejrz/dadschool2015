function proccess()
{
	var checkCounter = 0;
	var checkTotal = 0;
	var data = data.split(/\s/);
	var lineCounter = 0;
	// Loop until legal term 'q'
	while(data)
	{
		
	// Loop until legal term 'e'
		while(data)
		{
	// Check for the legal term 'b'
	//console.log second number(account number)
	//console.log third number (inital amount in account)
	if(data[lineCounter] == 'b')
	{
		var account = data[lineCounter]
		lineCounter++;
		var accountBal = data[lineCounter]
		console.log("Account number: " + account);
		console.log("Account balance: " + accountBal)
	}
	// If 'd' add next number to inital amount in the account
	else if(data[lineCounter] == 'd')
	{
		accountBal = (accountBal + data[lineCounter]);
		lineCounter++;
	}
	// If 'c' subtract next number
	// Add to number of 'c's
	else if(data[lineCounter] == 'c')
	{
		accountBal = (accountBal - data[lineCounter]);
		checkCounter++;
		lineCounter++;
	}
	// Else ignore
	else{
		lineCounter++;
	}
	//console.log 
	console.log("Checks proccessed: " + checkCounter);
	checkTotal = (checkCounter +(checkCounter * 0.15));
	console.log("Check total charge: " + checkTotal);
	console.log("Final account balance: " + accountBal);
	// End second loop
		}
	// End first loop
	}
}

function main()
{
	// Download homework08.data1
	// Download homework08.data2
	
	// Run process() using homework08.data1
	
	// Run process() using homework08.data2
}
main();