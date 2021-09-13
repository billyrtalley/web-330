// ============================================
// ; Title: WEB330 Assignment 5.2 Bob's Automotive Repair SHop
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 8-12 September 2021
// ; Modified By: William Talley
// ; Date Modified: 12 September 2021
// ; Description: 
// Create a class named Product with a constructor and two parameters: name and price
// b. In the body of the constructor set the class properties to the parameters and add a new
// property for id. Generate a new random value and assign it to the id field (see Exhibit A)
// c. Export the Product class.
// ;===========================================

export class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
      this.id = Math.random().toString(16).slice(2);
    }
  }