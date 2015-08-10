/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #10
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to read data from a file named progAss10.data.
**    The data file should consist only of intigers between 1 and 9999.  The
**    program will convert the number to text and print it to the screen.
**    the program will process data until the EOF is reached.
**
**  input: whole number between 1 and 9999
**  output: the whole number converted to text formatted as per assignment
**
********************************************************************************
*******************************************************************************/


#include <iostream>
#include <string>       // 2 functions of type string
#include <fstream>      // to read the data file, "progAss10.data"

string convertToText (int num);
string digitToText (int num);

using namespace std;

int main ()
{
    ifstream infile;
    
    int num = 0;        // in main (), num will be the number read from the
                        // data file which is to be converted to text

    infile.open("progAss10.data");

    infile >> num;

    while(infile)
    {
        cout << endl << num << " = " << convertToText(num);
        cout << endl;
        infile >> num;
    }
    
    cout << endl;
    
    return 0;

}

string convertToText (int num)
/*******************************************************************************
**
**  The function convertToText is designed to convert any intiger between
**    1 and 9999 into text.
**
**  input: one whole number between 1 and 9999
**  output: convertToText() will return a string containing the text equivalent
**    of the number it was passed.
**
*******************************************************************************/
{
    int thousands, hundreds, tens;  // used to break the number down into 
                                    // smaller parts
    string final;      // final will be returned as the result of the function
    
    if (num >= 1000)
    {
        thousands = num / 1000;
        final += digitToText(thousands) + " thousand";
        num %= 1000;
    }

    if (num >= 100)
    {
        hundreds = num / 100;
        final += digitToText(hundreds) + " hundred";
        num %= 100;
    }

    if (num >= 20)
    {
        tens = num / 10;
        final += digitToText(tens * 10);
        num %= 10;
    }

    final += digitToText(num);
    
    return final;
}

string digitToText(int num)
/*******************************************************************************
**
**  The function digitToText is designed to convert the numbers 1 - 19 and 
**    multiples of 10 up to 90 into text.
**
**  input: one integer (1-19 or 20-90, multiples of 10)
**  output: a string of text equivalent to the number which was passed
**
*******************************************************************************/
{
    switch(num)
    {
        case 1: return " one";
        case 2: return " two";
        case 3: return " three";
        case 4: return " four";
        case 5: return " five";
        case 6: return " six";
        case 7: return " seven";
        case 8: return " eight";
        case 9: return " nine";
        case 10: return " ten";
        case 11: return " eleven";
        case 12: return " twelve";
        case 13: return " thirteen";
        case 14: return " fourteen";
        case 15: return " fifteen";
        case 16: return " sixteen";
        case 17: return " seventeen";
        case 18: return " eighteen";
        case 19: return " nineteen";
        case 20: return " twenty";
        case 30: return " thirty";
        case 40: return " forty";
        case 50: return " fifty";
        case 60: return " sixty";
        case 70: return " seventy";
        case 80: return " eighty";
        case 90: return " ninety";
    }
}
