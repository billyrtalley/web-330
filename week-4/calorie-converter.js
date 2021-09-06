// ============================================
// ; Title: WEB330 Assignment 4.2 Calorie Converter App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 2-5 September 2021
// ; Modified By: William Talley
// ; Date Modified: 4-5 September 2021
// ; Description: JavaScript class named FoodModel. Add an import statement for the food-model.js
// ; file and create a CalorieConverter class with a static variable called data and 
// ;populate it with 6 FoodModel objects. Export the class
// ;===========================================
// ============================================
// ; Title: Static
// ;URL: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static 
// ; Author: MDN Web Docs
// ; Dates Accessed: 2-5 September 2021
// ; Modified By: William Talley
// ; Date Modified: 4-5 September 2021
// ; Description: Describes the static keyword and th
// ;===========================================

import { FoodModel } from "./food-model";

export class CalorieConverter
{
    static data =
    [
        new FoodModel (1007, 'Egg', 78 ),
        new FoodModel (1008, 'Apple', 95),
        new FoodModel (1009, 'Hamburger', 354),
        new FoodModel (1010, 'Fries', 400),
        new FoodModel (1011, 'Banana', 105),
        new FoodModel (1012, 'Soda', 150),
    ]

    static find(str) {
        return this.data.filter(foodModel =>foodModel.name.toLowerCase().includes(str.toLowerCase()));
    }

}

//created a static variable called data and populated it the data from the assignment instructions
//created a static function  find with a single string parameter. use the filter function to return
//a new array with the objects matching the parameter sting (name and calories)
//compare the name field to compare the parameter string
//used .toLowerCase so everything is compared in lower case to account for case sensitivity
