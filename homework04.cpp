/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #4
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to calculate the volume and surface area of a
**    cone given its diameter and height.
**
**  input: height and diameter in numerical form, unit of measurement for cone
**  output: print the diameter and height of the cone as well as its surface
**    area and volume with appropriate unit of measurement labels.
**
********************************************************************************
*******************************************************************************/


#include <iostream>
#include <cmath>	// pow()
#include <iomanip>	// setprecision()
#include <string>	

using namespace std;

const float PI = 3.14159;

int main ()
{

	float diameter = 0, height = 0;		// diameter and height
	float volume = 0, surArea = 0;		// volume and surface area
	string units;// = NULL;			// units of measurement

	cout << setiosflags (ios::fixed) << setprecision (2);
 
	cout << "\nThis program is designed to calculate the volume and"
	     << "\n\t surface area of a cone given it's diameter and height.";

	cout << "\n\nPlease enter the diameter of the cone: ";
	cin >> diameter;

	cout << "\nPlease enter the height of the cone: ";
	cin >> height;

	cout << "\nWhat is the unit of measurement for the cone? ";
	cin >> units;

	float r = .5 * diameter,						// r = raduis
	      s = sqrt(pow(r,2) + pow(height,2)),		// s = slant height
	      C = 2 * PI * r,							// C = circumference
	      A = PI * pow(r,2);						// A = area of base
	  // these formulas were given as part of the problem


	surArea = A + .5 * C * s;		// calculate surface area
	volume = 1.0/3.0 * A * height;	// calculate volume

	cout << "\n\nFor a cone of height " << height << ' ' << units
	     << " and diameter of " << diameter << ' ' << units  << endl
	     << " surface area is: " << surArea << " square " << units  << endl
	     << " and volume is: " << volume << " cubic " << units << '.'  << endl;

	return 0;
}
