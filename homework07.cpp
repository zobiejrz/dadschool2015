/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #7
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to approximate the value of PI using a user
**    defined number of terms in an infinite series.  The series is:
**        PI^2/6 = 1^-2 + 2^-2 + 3^-2 + 4^-2 + ...
**
**  input: This program is designed to be run using UNIX redirection for input.
**    The data file should contain only whole integers.  The first integer
**    is expected to be the number of times you wish to approximate PI.  Each
**    successive number will be used as the number of terms used to calculate
**    PI.  Because redirection is to be used for input, there are no prompts
**    for user interaction.
**  output: If a number of zero or less is entered, an error message will be
**    displayed and ro result will be calculated.  Otherwise, the number of 
**    terms will be displayed along with the approximation of PI (with six
**    decimil places).
**
**
********************************************************************************
*******************************************************************************/


#include <iostream>
#include <cmath>            // pow(), sqrt()
#include <iomanip>          // setprecision()

using namespace std;

int main ()
{

    float piApprox = 0,     // our approximation for PI
          num = 0;          // 1/1^2 + 1/2^2, etc.
    int timesToRun = 0,     // number of times to loop through the program
        termsUsed = 0;      // the number of terms used in the calculation
	      
    cout << setiosflags(ios::fixed) << setprecision(6) << endl;
		     
    cin >> timesToRun;
	
    if (timesToRun <= 0 )
    {
        cout << "I'm sorry, this program cannot handle the values " << endl
             << "in the data file you specified.  It will now quit." << endl;
        return 0;
    }
	
    for (int i = 1; i <= timesToRun; i++)
    {
        cin >> termsUsed;
		
        if (termsUsed <= 0)
        {
        cout << "Sorry! This program cannot handle the value " << termsUsed
             << ",\n\tno result will be calculated." << endl;
        }
		
        else
        {
            for (int j = 1; j <= termsUsed; j++)
            {  //cout << endl << num;
                num += pow(j, -2);
            }
		
            piApprox = sqrt(6 * num);
		
            cout << "Using " << termsUsed << " terms to approximate the value "
                 << "of PI, the result is: " << "\n\t" << piApprox << endl;
        }
		
        num = 0;    // reset num so it's ready for the next approximation
    }

    cout << endl;

    return 0;
}