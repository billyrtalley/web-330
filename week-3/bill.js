export class Bill 
{
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }
//creates a class called Bill with four properties and each one is assigned an empty array

 addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
}
//function named addAppetizer() with one parameter of type mainCourse
//push the mainCourse object to the _appetizers array in the body of the function


addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
}
//function named addMainCourse() with one parameter of type mainCourse
//push the mainCourse object to the _mainCourses array in the body of the function

addDessert(dessert) {
    this._desserts.push(dessert);
}
//function named addDessert() with one parameter of type mainCourse
//push the mainCourse object to the _desserts array in the body of the function

addBeverages(beverage)
{
    this._beverages.push(beverage);
}
//function named addBeverages() with one parameter of type mainCourse
//push the mainCourse object to the _beverages array in the body of the function


getTotal() {
    let total = 0;

    let appetizerTotal = this._appetizers.forEach((appetizer) => {
        total += parseFloat(appetizer.price);
    });
    
    let mainCourseTotal = this._mainCourses.forEach((mainCourse) => {
        total += parseFloat(mainCourse.price);
    })

    let dessertTotal = this._desserts.forEach((dessert) => {
        total += parseFloat(dessert.price);
    })
    
    let beverageTotal = this._beverages.forEach((beverage) => {
        total += parseFloat(beverage.price);
    });

    return total.toFixed(2);
    }

}