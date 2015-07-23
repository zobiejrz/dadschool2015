/*******************************************************************************
********************************************************************************
**
**  Nathan A. Zobrist
**  Assignment #2
**  CSC 135, Section 1
**
********************************************************************************
**
**  This program is designed to calculate the cost of taxes and fees associated
**    with a constant amount of kilowatt hours.  It itimizes the taxes and then
**    prints a total amount due.
**
**  input: none
**  output: billing information (incl. base cost, city and county taxes, state
**    fees, and a grand total due)
**
********************************************************************************
*******************************************************************************/

#include <iostream>

using namespace std;

const float KWHRS = 265.2;			// kilowatt hours used

int main ()
{
	float costPerKWHR = .61;
		// electricity cost per kilowatt hour
	float countyTax = .095, cityTax = .034, stateFee = 4.5;
		// fees and taxes
	
	float elecCost = KWHRS * costPerKWHR;
		// pretax cost for electricity
	float totalCost = elecCost * (1 + countyTax + cityTax) + stateFee;
		// total cost: base cost + taxes and fees
	
	cout << "\nThe bill for " << KWHRS << " kilowatt hours of electricity is:"
		 << "\n\tBase cost (" << KWHRS << " hours):     " << elecCost
		 << "\n\tCounty surcharge:             " << elecCost * countyTax
		 << "\n\tCity utility tax:              " << elecCost * cityTax
		 << "\n\tState fees:                    " << stateFee
		 << "\n\t                           -----------"
		 << "\n\tTotal due:                   " << totalCost << endl;
		 
	return 0;

}
