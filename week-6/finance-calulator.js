// ============================================
// ; Title: WEB330 Assignment 6.2 Future Value App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 15-19 September 2021
// ; Modified By: William Talley
// ; Date Modified: 18 September 2021
// ; Description: 
//; Create a class named FinanceCalculator. 
//; Create a static property named MONTHS_IN_YEAR and assign it a default value of 12.
//; Create a static function named calculateFutureValue with three parameters: 
//; monthlyPayment, rate, and years. 
//; Source for Future Value calculator: Finance Formulas. n.d.
//; url: https://financeformulas.net/Future_Value.html 
//; Source for International Number Format: MDN Web Docs. n.d.
//; url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat 
//; Source for exponent power as in base^exponent: MDN Web Docs: Math.pow(). n.d.
//; url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow 
// ============================================

// create Finance Calculator class and export
export class FinanceCalculator
{
    static MONTHS_IN_YEAR = 12;

//create calculateFutureValue function with 3 parameters: monthlyPayment, rate and years
    static calculateFutureValue(monthlyPayment, rate, years)
    {
        let months = years * FinanceCalculator.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * (Math.pow(interestRate, months));

//round the future value to two decimal places
        return futureValue.toFixed(2);
    }
//Convert the number to US dollars
    static convertToCurrency(field)
    {
        let currencyFormatter = new Intl.NumberFormat('en-US', 
        {
            style: 'currency',
            currency: 'USD'
        });
        return currencyFormatter.format(field);
    }
}