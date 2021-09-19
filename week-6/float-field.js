// ============================================
// ; Title: WEB330 Assignment 6.2 Future Value App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 15-19 September 2021
// ; Modified By: William Talley
// ; Date Modified: 18 September 2021
// ; Description: 
//; Create a class named FloatField. Create a constructor and supply it with two parameters: name and field.
//; Set the parameters to class properties. 
//; Create a function named validate.  In the body of the function return true if you can 
//; parseFloat the value and false if not (hint: you will need to check for NaN values; you 
//; can do this by calling JavaScript’s built-in isNaN() function).
//; Create a function named getMessage() and return the string message “<name> must be a 
//; float value.  You entered <field>” 
//; Export the class
//; Source parseFloat: MDN WebDocs: parseFloat(); n.d.
//; url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// ;===========================================


// creates and exports Float Field class 
// create constructor with name and field parameters
export class FloatField
{
    constructor(name, field) 
    {
        this.name = name;
        this.field = field
    }

//Create a function named validate.  In the body of the function return true if you can 
// parseFloat the value and false if not   
    validate ()
    {
        let checkForNaN = parseFloat(this.field);
        return !isNaN(checkForNaN)
    }

//Create a function named getMessage()    
    getMessage()
    {
        return `${this.name} must be a float value. You entered ${this.field}`
    }

}