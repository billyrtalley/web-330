// ============================================
// ; Title: WEB330 Assignment 6.2 Future Value App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 15-19 September 2021
// ; Modified By: William Talley
// ; Date Modified: 18 September 2021
// ; Description: 
//; Create a class named RequiredField. Create a constructor and supply it with two parameters: name and field.
//; Set the parameters to class properties. 
//; Create a function named validate.   In the body of the function return Boolean(this.field), 
//; which will return true if this.field is a string value and false if not. 
//; Create a function named getMessage() and return the string message “<name> is a 
//; required field.” 
//; Export the class
//; Source parseFloat: MDN WebDocs: parseFloat(); n.d.
//; url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
// ;===========================================

// Create and export RequiredField Class
// create constructor with name and field parameters
export class RequiredField
{
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }

//Return valid if the string is valid
validate()
{
    let valid = Boolean(this.field)
    if (valid){
        valid = Boolean(this.field.trim());
    }
    return valid;
}
//Create a function named getMessage() and return the string message “<name> must be a 
// float value.  You entered <field>” 
getMessage()
{
    return this.name + "is a required field.";
}

}