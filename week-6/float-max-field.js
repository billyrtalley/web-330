// ============================================
// ; Title: WEB330 Assignment 6.2 Future Value App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 15-19 September 2021
// ; Modified By: William Talley
// ; Date Modified: 18 September 2021
// ; Description: 
//; Create a class named FloatMaxField.  Create a constructor and supply it with three parameters: name, field, and max.
//; Set the parameters to class properties.
//; Create a function named validate.  In the body of the function parseFloat the field value 
//; and return true if the value is less than the max parameter.  Otherwise, return false. 
//; Create a function named getMessage() and return the string message “<name> must be 
//; less than <max>.  You entered <field>”
//; Export the class
//; Source parseFloat: MDN WebDocs: parseFloat(); n.d.
//; url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// ;===========================================

//Create a class named FloatMaxField.  Create a constructor and supply it with three parameters: name, field, and max.
export class FloatMaxField
{
    constructor(name, field, max)
    {
        this.name = name;
        this.field = field;
        this.max = max;
    }
// create validate function to check if the input is less than the max value
    validate()
    {
        let floatField = parseFloat(this.field);
        return (floatField < this.max);
    }  
// generates message if the field is over the max value
    getMessage()
    {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}.`;
    }      
}