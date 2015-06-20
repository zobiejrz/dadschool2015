function isInt(n)
{
	var retVal = (n % 1 === 0);
 	return retVal;
}

// return true if 'n' is a valid value. otherwise return false
function isValidValue (n)
{
	if (isInt(n) && (n >= 0))
	{
		return true;
	}
	return false;
}

// print instruction
alert("Hello, I am a personal calculation device for calculating the area and perimeter of a square, given the side length you give me.");

// initialize variables
var squareSide = 0;
var perimeter = 0;
var area = 0;

// check if squareSide is valid
do 
{
	// prompt for the length of the side of a square
	// read and store squareSide
	var promptUser = "What do you want to be the side length of the square?";
	squareSide = prompt(promptUser);
}
while (!isValidValue(squareSide));

// Calculate perimeter of the square
// Calculate area of the square
perimeter = squareSide * 4;
area = squareSide * squareSide;

// Print the perimeter of the square
// Print the area of the square
alert("The perimeter of a square with the side length of " + squareSide + " is " + perimeter + ". The area of a square with the same side length is " + area +".");

// All done!
