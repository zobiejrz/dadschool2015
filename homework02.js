function isInt(n)
{
	var retVal = (n % 1 === 0);
 	return retVal;
}

// return true if 'n' is a valid value. otherwise return false
function isValidValue (n)
{
	if (isInt(n) && (n > 0))
	{
		return true;
	}
	return false;
}

// print instruction
alert("Hello, I am a personal calculation device for calculating a Utility Bill, given the KWHRS you give me.");

// initialize variables
var kwhrs = 0;
var kwhrsCost = 0;
var countySur = 0;
var cityTax1 = 0;
//var cityTax2 = 0;
var stateFee = 4.5;
var total = 0;
//var total = kwhrsCost + countySur + cityTax2 + stateFee;

// check if kwhrs is valid
do 
{
	// prompt for the length of the side of a square
	// read and store squareSide
	var promptUser = "How much KWHRS was used?";
	kwhrs = prompt(promptUser);
}
while (!isValidValue(kwhrs));

// Calculate kwhrsCost
// Calculate countySur
// Calculate cityTax1 / cityTax2
// Calculate stateFee
//calculate total
kwhrsCost = 0.61 * kwhrs;
countySur = 9.5 * kwhrs;
cityTax1 = 3.25 * kwhrs;
//cityTax2 = 3.4 * kwhrs;
stateFee = 4.5
total = kwhrsCost + countySur + cityTax1 + stateFee;
//total = kwhrsCost + countySur + cityTax2 + stateFee;


// Print kwhrs
// Print kwhrsCost
// Print countySur
// Print cityTax1 / cityTax2
// Print stateFee
//print total
console.log("The bill for " + kwhrs + " KWHRS:");
console.log("	Cost of Electricity used: " + kwhrsCost);
console.log("	County surcharge: " + countySur);
console.log("	City utility tax: " + cityTax1);
//console.log("	City utility tax: " + cityTax2);
console.log("	State fees: " + stateFee);
console.log("	Total cost: " + total);

// All done!
