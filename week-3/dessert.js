// ============================================
// ; Title: WEB330 Assignment 3.2 Restaurant App Dessert Javascript file
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 26-29 August 2021
// ; Modified By: William Talley
// ; Date Modified: 26-29 August 2021
// ; Description: JavaScript class named Dessert. Add an import statement for the product.js
// ; file and inherit the base classes properties by referencing the extends keyword. In the
// ;class’s constructor add two parameters: name and price.
// ;===========================================

import { Product } from "./product.js";

export class Dessert extends Product
{
    constructor(name,price)
    {
        super(name, price);
    }


}