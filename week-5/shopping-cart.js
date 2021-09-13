// ============================================
// ; Title: WEB330 Assignment 5.2 Bob's Automotive Repair SHop
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 8-12 September 2021
// ; Modified By: William Talley
// ; Date Modified: 12 September 2021
// ; Description: 
// . Create a class named ShoppingCart and give it a constructor.
// b. In the body of the class’s constructor create a property for products and assign it an
// empty array.
// c. Create a function named count and return the length of the products array.
// d. Create a function named add with a single parameter for a product object. In the body of
// the function, add the product object to the products array.
// e. Using JavaScript Iterators, create an iterator and in the body use a for…of statement to
// loop over the products array. Yield return each iterated product object.
// f. Export the ShoppingCart class.
// ;===========================================

export class ShoppingCart {
    constructor() {
      this._products = [];
    }
  
    count() {
      return this._products.length;
    }
  
    addProduct(product) {
      this._products.push(product);
    }
  
    *[Symbol.iterator]() {
      for (let product of this._products) {
        yield product;
      }
    }
  }