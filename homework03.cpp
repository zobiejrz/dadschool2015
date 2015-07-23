/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #3
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to calculate the values of x and y, using Cramer's
**    Rule, given two equations in standard form (ie. x + y = C).
**
**  input: six variables representing two two variable equations.  Input will
**    be in the form x-value (space) y-value (space) total-value.
**  output: print the two equations in standard form as well as x and y values.
**    x and y will both be rounded to three decmamal places.
**
********************************************************************************
*******************************************************************************/


#include <iostream>
#include <iomanip>		// setprecision(), setw()

using namespace std;

int main ()
{
	int a, b, c;
	int d, e, f;
	float x, y;
	
	cout << setiosflags (ios::fixed) << setprecision (3);
	
	cout << "\n\nThis program is designed to use Cramer's Rule to calculate"
		 << "\n\tx and y for given equations.\n";
	
	cout << "\nPlease enter the first set of variables: ";
	cin >> a >> b >> c;	
	
	cout << "\nPlease enter the second set of variables: ";
	cin >> d >> e >> f;
	
	x = float(c * e - f * b) / float(a * e - d * b);   // These equations
	y = float(a * f - d * c) / float(a * e - d * b);   // are Cramer's Rule
	
	cout << "\n\nGiven the equations:"
		 << "\n\t" << a << "x + " << b << "y = " << c
		 << "\n\t" << d << "x + " << e << "y = " << f
		 << "\n\tx =" << setw (7) << x
		 << "\n\ty =" << setw (7) << y << "\n\n";
	
	return 0;
}
