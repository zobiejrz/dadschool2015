/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #5
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to solve equations in the form ax^2 + bx + c = 0
**    using the quadratic equation.  It first checks for one of three cases,
**    one real root, two real roots (possibly identical), and two complex roots
**    and calculates the root(s) using equations given in the problem.
**
**  input: three integers representing a, b, and c in the above equation
**  output: print the user entered values of a, b, and c.  print a message
**    indicating whether there is 1 real root, 2 identical real roots, 2
**    different real roots, or 2 complex roots.  finally it will print the
**    solution(s) for x.  all float values will be printed with four
**    digits to the right of the decimal.
**
********************************************************************************
*******************************************************************************/


#include <iostream>
#include <cmath>		// pow(), sqrt()
#include <iomanip>		// setprecision()

using namespace std;

int main ()
{
	cout << setiosflags(ios::fixed) << setprecision(4);

	int xSqrd = 0, x = 0, constNum = 0;		// initial values user entered

	cout << "\nThis program is designed to solve equations in the form"
		 << "\n    ax^2 + bx + c = 0 using the quadratic equation." << endl;
	
	cout << "\nPlease enter the first coefficient: ";
	cin >> xSqrd;

	cout << "\nPlease enter the second coefficient: ";
	cin >> x;

	cout << "\nPlease enter the last integer: ";
	cin >> constNum;

	cout << "\nGiven the values:\n\ta = " << xSqrd << "\tb = " << x
	     << "\tc = " << constNum;
	
	float a = xSqrd, b = x, c = constNum;	// change int values to float
											// for division in formula
	
	if (a == 0)
	{
		float ans = (-c/b);

		cout << "\nThere is only 1 real root,"
		     << "\n\tx = " << ans << endl;
	}
	else if (pow(b,2) >= (4 * a * c))	// case given in problem
	{
		float ans = (-b + sqrt(pow(b,2) - 4 * a * c))/(2 * a);
		float ans2 = (-b - sqrt(pow(b,2) - 4 * a * c))/(2 * a);
			// these are two forms of the quadratic formula

		if (ans == ans2)
		{
			cout << "\nThere are 2 identical"
		    	 << " real roots," << "\n\tx1 = " << ans 
		   		 << "\n\tx2 = " << ans2 << endl;
		}
		else
		{
			cout << "\nThere are 2 different"
		    	 << " real roots," << "\n\tx1 = " << ans 
		   		 << "\n\tx2 = " << ans2 << endl;
		}
	}
	else if (pow(b,2) < (4 * a * c))
	{
		float ans = (-b / (2 * a)),
		      ans2 = sqrt(4 * a * c - pow(b,2))/(2 * a);
		        // again, derived from the quadratic formula
		cout << "\nThere are 2 complex (imaginary)"
		     << " roots of the form x + yi\n\tand x - yi where,"
		     << "\n\tx = " << ans << " + " << ans2 << "i"
		     << "\n\tx = " << ans << " - " << ans2 << "i" << endl;
	}
	else
		cout << "\nI'm sorry, there is a problem with the data you "
		     << "entered." << endl;
	
	cout << endl;

	return 0;
}
