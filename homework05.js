function onErr(err) {
  console.log(err);
  return 1;
}

function main()
{
	//initalize variables
	var typeA = 0;
	var typeB = 0;
	var typeC = 0;
	var root1 = 0;
	var root2 = 0;
	var splitNumbers = [];

	//introduction
	
	//prompt for var typeA B and C.
	var prompt = require('prompt');

  var schema = {
    properties: {
      Values: {
        pattern: /(\d+)\s+(\d+)\s+(\d+)/,
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
	
	if(typeA == 0)
	{
		console.log("There is one (1) real root.");
		
	}
	else if(Math.pow(typeB, 2) >= (4 * typeA * typeC))
	{
		console.log("There are two (2) real roots.")
		
	}
	else if(Math.pow(typeB, 2) < (4 * typeA * typeC))
	{
		console.log("There are two (2) imaginary roots.")
		
	}
	

	//console.log answer
	
	//terminate
	  });
}
main();