// ============================================
// ; Title: WEB330 Assignment 6.2 Future Value App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 15-19 September 2021
// ; Modified By: William Talley
// ; Date Modified: 18 September 2021
// ; Description: 
//; Add import statements for RequiredField, FloatField, FloatMinField, FloatMaxField. 
//; Create two class properties: validators and messages.  Assign each of the properties an 
//; empty array.
//; Create a class constructor with two parameters: name and field. 
//; Create a function named addRequiredField() and in the body push a new instance of the 
//; RequiredField class to the validators array using the name and field as parameters. 
//; Create a function named addRequiredFloatField() and in the body of the function push a 
//; new instance of the FloatField class to the validators array using the name and field as 
//; parameters.
//; Create a function named addFloatMinField() with a single parameter for min.  In the 
//; body of the function push a new instance of the FloatMinField class to the validators 
//; array using the name, field, and min as parameters.
//; Create a function named addFloatMaxField() with a single parameter for max.  In the 
//; body of the function push a new instance of the FloatMaxField class to the validators 
//; array using the name, field, and max as parameters.     
// ============================================

//import statements for supporting js files
import { RequiredField } from "./required-field.js"
import { FloatField } from "./float-field.js"
import { FloatMinField } from "./float-min-field.js"
import { FloatMaxField } from "./float-max-field.js"

//validator class; two properties, validators and messages assigned empty array properties
export class Validator
{
    validators = [];
    messages = [];

//constructor class with two parameters: name and field
    constructor(name, field)
    {
        this.name = name;
        this.field = field;
    }
//create addRequiredField and functions to require fields to be entered correctly
    addRequiredField()
    {
        this.validators.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField()
    {
        this.validators.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min)
    {
        this.validators.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max)
    {
        this.validators.push(new FloatMaxField(this.name, this.field, max));
    }
//checks form field entries and returns error if it fails and doesn't do anything if nothing is passed
//use for...if statement
    validate()
    {
        for (const validator of this.validators)
        {
            if (!validator.validate()) {
                this.messages.push(validator.getMessage());
            }
        }
        return this.messages.length == 0;
    }
}
