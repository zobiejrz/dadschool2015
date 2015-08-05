/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #9
**  CSC 135, Section 1
**
********************************************************************************
**
**  NOTE: main() is not my work, it was given as part of the problem
**
********************************************************************************
**
// This program is designed to read 2 integer values and find
// their least common multiple (lcm) and greatest common divisor
// (gcd). Each pair of numbers will be printed along with their lcm 
// and gcd. The sets of values will be read from the file progAss9.data
// and the program will keep processing until the end of file is
// reached.
**
********************************************************************************
*******************************************************************************/

#include <iostream>
#include <fstream>

int find_lcm(int,int);
int find_gcd(int,int);

int main()
{
  ifstream infile;  // progAss09.data will be opened to provide the data
                    // values to be processed

  int firstnum;     // the 2 integers for which the program will be
  int secondnum;    // finding an lcm and gcd

  int lcm;          // least common multiple of the 2 integers
  int gcd;          // greatest common divisor of the 2 integers

  infile.open("progAss09.data");

  infile >> firstnum;
  while(!infile.eof())
    {
      infile >> secondnum;
      cout << "Given the values " << firstnum << " and " << secondnum;
      lcm = find_lcm(firstnum,secondnum);
      cout << " their LCM is " << lcm;
      gcd = find_gcd(firstnum,secondnum);
      cout << " and their GCD is " << gcd << endl << endl;
      infile >> firstnum;
    }
  return 0;
}

int find_lcm(int first, int second)
{
/*******************************************************************************
**
**  The function find_lcm is designed to calculate and return the least
**    common multiple of two integers.  To calculate the lcm, find the larger
**    of the numbers passed, multiply it by a veriable (starting at 1 and
**    counting up by 1 -> this will find multiples of the larger number), if 
**    the answer is evenly divisible by the smaller number, the answer is a 
**    multiple.  The first of such multiples will be the least common multiple.
**
**  input: the function expects to be passed two integers
**  output: the function will return the least common multiple
**
*******************************************************************************/


    int larger = 0, smaller = 0;    // used to store which ever is larger or
                                    // smaller between first and second
                                    
  /* Decide which is greater, store it in "larger" and the other in "smaller" */
    if (first < second)
    {
        larger = second;
        smaller = first;
    }
    else if (first > second)
    {
        larger = first;
        smaller = second;
    }
    else                // the numbers are equal
        return first;   // therefore, either can be returned

  /* Multiply larger by the counter, check if answer is equally divisible by the 
     smaller, the first time it is, it returns multiple as the lcm */
    for (int i = 1;i <= (larger * smaller);i++)
    {
        int multiple = larger * i;
        if (multiple % smaller == 0)    // the first time this is true
            return multiple;            // return multiple as the lcm
    }

}

int find_gcd(int first, int second)
{
/*******************************************************************************
**
**  The function find_gcd is designed to calculate and return the greatest
**    common divisor of two intigers.  To calculate the gcd, the function will
**    make use of the mathematical property that the gcd * lcm = num1 * num2.
**    It will call the function find_lcm to assist in this calculation.
**
**  input: the function expects to be passed two integers
**  output: the function will return the greatest common divisor
**
*******************************************************************************/

    return (first * second)/find_lcm(first, second);

}
