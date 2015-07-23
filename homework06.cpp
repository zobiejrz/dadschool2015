/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #6
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to calculate the amount of tuition owed by a 
**    student according to is residency status and number of credits taken.
**    it checks whether a student is full or part time and makes sure that
**    the maximum number of credits is not exceeded.
**
**  input: read a student's residency status (R or N) and the number of 
**    credits he wants to take.s
**  output: 1) the student's residency status and the number of credits
**    being requested.  2) classification as a full or part time status, or
**    an error message indicating too few or too many credits being requested.
**    3) print the amount due for tuition (this will not be printed if the
**    number of credits is not valid).
**
********************************************************************************
*******************************************************************************/


#include <iostream>
#include <iomanip>					// setprecision()

using namespace std;

const float resCost = 155,			// cost per credit for residents
            nonresCost = 345,		// cost per credit for non-residents
            nonresFee = 1000;		// per semester fee for non-residents
const int minCredits = 12,			// minimum # of credits for full time
          maxCredits = 20;			// maximum # of credits

int main ()
{

	char resStatus = '\0';			// residency status
	int credits = 0;				// # of credits taken

	cout << setiosflags(ios::fixed) << setprecision(2);

	cout << "\nThis program calculates tuition owed by a student based"
	     << "\n\ton their residency status and number of credits taken."
	     << endl << endl;

	cout << "Please enter residency status" << endl
	     << "\t(R for resident or N for nonresident): ";
	cin >> resStatus;
	cout << endl;

	cout << "Please enter the number of credits taken: ";
	cin >> credits;
	cout << endl;

	if (resStatus == 'r' || resStatus == 'R')
	{
		cout << "A resident student wants to register for "
		     << credits << " credits." << endl;
		if (credits <= maxCredits && credits >= minCredits)
		{
			cout << "\tYou are classified as a full-time student."
			     << endl;
		}		
		else if (credits <= maxCredits && credits < minCredits && credits > 0)
		{
			cout << "\tYou are classified as a part-time student."
			     << endl;
		}
		else if (credits <= 0)
		{
			cout << "\tI'm sorry, you are trying to register for "
			     << "too few credits." << endl  << "\tPlease "
			     << "verify the number of credits and try again."
			     << endl;
		}
		else
		{
			cout << "\tI'm sorry, you may not register for more"
			     << " than " << maxCredits << " credits!" << endl 
			     << "\tPlease check your schedule and try again later."
			     << endl;
		}
		if (credits > maxCredits || credits <= 0)
			cout << endl;
		else if (credits * resCost >= 2500)
			cout << "\tTotal due: $2500.00" << endl;
		else
			cout << "\tTotal due: $" << credits * resCost << endl;
	}
	else if (resStatus == 'n' || resStatus == 'N')
	{
		cout << "A nonresident student wants to register for "
		     << credits << " credits." << endl;
		if (credits <= maxCredits && credits >= minCredits)
		{
			cout << "\tYou are classified as a full-time student."
			     << endl;
		}		
		else if (credits <= maxCredits && credits < minCredits && credits > 0)
		{
			cout << "\tYou are classified as a part-time student."
			     << endl;
		}
		else if (credits <= 0)
		{
			cout << "\tI'm sorry, you are trying to register for "
			     << "too few credits." << endl  << "\tPlease "
			     << "verify the number of credits and try again."
			     << endl;
		}
		else
		{
			cout << "\tI'm sorry, you may not register for more"
			     << " than " << maxCredits << " credits!" << endl 
			     << "\tPlease check your schedule and try again later." 
			     << endl;
		}
		if (credits > maxCredits || credits <= 0)
			cout << endl;
		else
			cout << "\tTotal due: $" << credits * nonresCost + nonresFee 
			     << endl;
	}
	else
	{
		cout << "\n\nI'm sorry that's not an option." << endl;
		return 0;
	}

	cout << endl;

	return 0;
}
