// ============================================
// ; Title: WEB330 Assignment 6.2 Future Value App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 15-19 September 2021
// ; Modified By: William Talley
// ; Date Modified: 18 September 2021
// ; Description: 
//; Create a class named FloatMinField.  Create a constructor and supply it with three parameters: name, field, and max.
//; Set the parameters to class properties.
//; Create a function named validate.  In the body of the function parseFloat the field value 
//; and return true if the value is greater than the min parameter.  Otherwise, return false. 
//; Create a function named getMessage() and return the string message “<name> must be 
//; less than <min>.  You entered <field>”
//; Export the class
//; Source parseFloat: MDN WebDocs: parseFloat(); n.d.
//; url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// ;===========================================

//create FloatMinField class 
//create constructor with name, filed and min parameters
export class FloatMinField
{
    constructor(name, field, min)
        {
            this.name = name;
            this.field = field;
            this.min = min;
        }
 // create validate function to check if the input is greater than the min value 
 validate()
 {
     let floatField = parseFloat(this.field);
     return(floatField > this.min);
 }
 // message if the field is not greater than the minimum
 getMessage()
 {
     return `${this.name} must be more than ${this.max}`
 }      
}