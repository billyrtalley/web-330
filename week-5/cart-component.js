// ============================================
// ; Title: WEB330 Assignment 5.2 Bob's Automotive Repair SHop
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 8-12 September 2021
// ; Modified By: William Talley
// ; Date Modified: 12 September 2021
// ; Description: 
// Create a new class named CartComponent that extends JavaScripts HTMLElement object
// and add it to the cart-component.js file.
// b. Give the class a constructor and call super() function for the HTMLElement parent
// object.
// c. Add a function named connectedCallback() and set the innerHTML to a string for the
// font-awesome shopping-cart icon. See Exhibit B.
// d. Outside of the class declaration, call the customElements.define() function and pass-in
// the string value cart-component and the CartComponent class.
// ;===========================================

export class CartComponent extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
  }
  
  customElements.define("cart-component", CartComponent);