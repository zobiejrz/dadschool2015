function onErr(err) {
  console.log(err);
  return 1;
}

function main()
{
	//initalize variables
	var typeA = 0,
		typeB = 0,
		typeC = 0;
	var root1 = 0,
		root2 = 0;
	var splitNumbers = [];

	//introduction
	console.log("If you give me three (3) digits, I will decide if put in an equation whether");
	console.log("they have two (2) real roots, two (2) imaginary roots, or one (1) real root.");
	//prompt for var typeA B and C.
	var prompt = require('prompt');

  var schema = {
    properties: {
      Values: {
		  //TODO: regex doesn't handle negative numbers
        pattern: /(-?\d+)\s+(-?\d+)\s+(-?\d+)/,
        message: 'The format should be: A B C. Do not forget the space in between each value.',
        required: true
      }
    }
  };

  prompt.start();

  prompt.get(schema, function (err, result) {
    if (err) { return onErr(err); }
 	console.log('  Values: ' + result.Values);

	//save prompt to variables
	splitNumbers = result.Values.split(" ");
	typeA = splitNumbers[0];
	typeB = splitNumbers[1];
	typeC = splitNumbers[2];
	

	//console.log what typeA B and C are.
	console.log("\tA = " + typeA);
	console.log("\tB = " + typeB);
	console.log("\tC = " + typeC);
	
	//calculate output
	//console.log answer
	if(typeA == 0)
	{
		console.log("There is one (1) real root.");
		root1 = ((-1 * typeC) / typeB);
		var fixed1 = root1.toFixed(4);
		console.log("\tThe root is " + fixed1);
	}
	else if(Math.pow(typeB, 2) >= (4 * typeA * typeC))
	{
		console.log("There are two (2) real roots.");
		root1 = (((typeB * -1) + (Math.sqrt(Math.pow(typeB, 2) -(4 * typeA * typeC)))) / (2 * typeA));
		root2 = (((typeB * -1) - (Math.sqrt(Math.pow(typeB, 2) -(4 * typeA * typeC)))) / (2 * typeA));
		if(root1 == root2)
		{
			console.log("Both roots are equal to " + root1);
		}
		else
		{
			var fixed2 = root1.toFixed(4);
			var fixed3 = root2.toFixed(4);
			console.log("The first root is equal to " + fixed2);
			console.log("The second root is equal to " + fixed3);
		}
	}
	else if(Math.pow(typeB, 2) < (4 * typeA * typeC))
	{
		console.log("There are two (2) imaginary roots.");
		var x = ((typeB * -1) / (2 * typeA));
		var y = ((Math.sqrt(4 * typeA * typeC - Math.pow(typeB, 2))) / (2 * typeA));
		var fixedX = x.toFixed(4);
		var fixedY = y.toFixed(4);
		console.log("The first root is equal to " + fixedX + "+" + fixedY + "i.");
		console.log("The second root is equal to " + fixedX + "-" + fixedY + "i.");
	}
	
	//terminate
	  });
}
main();