/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #8
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to act as a simple checkbook.  It will use a data
**    file for input as detailed below.  It uses a forever loop to cycle
**    through the switch options until a 'Q' is encountered and the program
**    quits.
**
**  input: This program is designed to be run using UNIX redirection for input.
**    Because redirection is to be used for input, there are no prompts
**    for user interaction.  The data file should contain data as detailed in
**    the assignment description.  It will be divided into groups of data.
**    Each data group consists of several lines.  Each valid line will start
**    with a code letter followed by either an account number or account
**    balance.
**  output: For each group of data the following will be printed: account
**    number, opening balance, ending balance, charge for any checks, and 
**    final balance.  All dollar amounts will be printed with dollar sign and
**    two decimal places.  At the end of the data file, a message listing the 
**    number of invalid lines will be printed.
**
********************************************************************************
*******************************************************************************/


#include <iostream>
#include <iomanip>                  // setprecision()

const float CHECK_CHARGE = .15;     // per check charge

using namespace std;

int main ()
{
    char action = '\0';
        // one letter action to take: b = begin, c = check, d = deposit,
        // e = end of account info., q = quit program
    int account = 0, badLines = 0, checks = 0;
        // account #, # of bad lines in files, # of checks written
    float balance = 0, money = 0;
        // balance = account balance, money = amount of check or deposit
    
    cout << setiosflags(ios::fixed) << setprecision(2)  << endl;

  for(;;)
  {
      cin >> action;
    
      if (action == 'Q' || action == 'q')
      {
          cout << "There were " << badLines << " lines of bad data in the file."
               << endl << endl;
          return 0;     // break forever loop and terminate program
      }
         
      switch (action)
      {
          case 'B':
          case 'b': cin >> account >> money;
                    balance = money;
                    cout << "Account #" << account << endl
                         << "Opening balance:      $" << setw(9)
                         << balance << endl;
                    break;
          case 'C':
          case 'c': cin >> money;
                    balance -= money;
                    checks++;
                    break;
          case 'D':
          case 'd': cin >> money;
                    balance += money;
                    break;
          case 'E': 
          case 'e': cout << "Ending balance:       $" << setw(9) << balance 
                         << endl << "Charge for " << checks << " checks:  $" 
                         << setw(9) << checks * CHECK_CHARGE << endl
                         << "Final balance:        $" << setw(9)
                         << balance - (checks * CHECK_CHARGE) << endl << endl;
                       
                         balance = 0;   // reset variables to 0 so that they're
                         checks = 0;    // ready for the next account's info.
                       
                         break;
          default: cin.ignore(100, '\n');
                   badLines++;
                   break;
      }
    
    }
}
