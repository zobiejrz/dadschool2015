/*
**********************************************************
**********************************************************
**
**	file		ZOBRIST/ASS1/square.cpp
**
**	author		Nathan A. Zobrist
**	date		September 11, 1998
**
**	purpose 	To calculate the perimeter and area of a square
**				given the length of one side.
**
**	Based upon an exercises 1 & 5 from Adams, Leestma, and Nyhoff, 1998,
**	"C++ An Introduction to Computing", section 1.3, esp pp 48-49.
**
**********************************************************
**
**	This program should "introduce" itself to the user and state it's purpose,
**	to calculate the perimeter and area of a square given the length of one side.
**	The program should prompt the user to enter the length of one side of a square.
**	It should calculate the perimeter and display the figure.  It should then
**	calculate the area of the square and display that figure.  The program should
**	then terminate.
**	
**********************************************************
**
**	DATA OBJECTS:				NAME:			TYPE:
**	Program Identification		entitle
**	Keyboard					cin
**	Screen						cout
**	Length of square side		sideLength		float
**	Perimeter					perimeter		float
**	Area						area			float
**	Program Termination			myTerminate
**
**********************************************************
**********************************************************
*/


#include <iostream.h>			// for input and output
#include <math.h>				// for mathematecial operations ie pow()


void entitle ();
	// prints the program designation and the author's name

int myTerminate ();
	// terminates the program

int main ()
{
entitle ();						// prints program designation and author's name

cout << "\nWelcome to the \"Square Figurer\", the world's greatest square figuring"
	<< "\nprogram!  To calculate the perimeter AND area of any square, just complete"
	<< "\nthis one simple step.";

cout << "\n\nPlease enter the length (in centimenters) of a side of the square: ";
float sideLength;
cin >> sideLength;				// input the length of square's side
cout << "\n\nThank you.";
	
float perimeter = 4 * sideLength;	// calculate the display the perimeter of square
cout << "\n\nThe perimeter of this square is " << perimeter << " centimeters.";
	
float area = pow(sideLength, 2);	// calculate the display the area of the square
cout << "\nThe area of this square is " << area << " centimeters squared.";


return myTerminate ();			// terminate the program
}


void entitle ()
	// prints program designation and author's name
{
	cout << "********************************************************************" 
		<< "\n     Homework Assignment #1, CPSC1200 (Section 5), Fall 1998"
		<< "\n              Based on exercise 5 of ALN (page 48)"
		<< "\n                     by: Nathan A. Zobrist"
		<< "\n********************************************************************" 
		<< "\n\n";
}

int myTerminate ()
	// terminates the program
{
	char term_char;
	cout << "\n\nEnter any character, followed by ENTER, to terminate program: ";
	cin >> term_char;
	cout << "  -- Terminating program normally. :-)\n\n";
	return 0;
}	 	