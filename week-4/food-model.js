// ============================================
// ; Title: WEB330 Assignment 4.2 Calorie Converter App
// ;
// ; Author: Professor Krasso
// ; Dates Accessed: 2-5 September 2021
// ; Modified By: William Talley
// ; Date Modified: 4-5 September 2021
// ; Description: JavaScript class named FoodModel. Give the class a constructor with three
// ; parameters: id, name and calories. Export the class.
// ;===========================================
// ============================================
// ; Title: Modules, Introduction
// ;URL: https://javascript.info/modules-intro 
// ; Author: JavaScript.info
// ; Dates Accessed: 5 September 2021
// ; Modified By: William Talley
// ; 
// ; Description: how to import and export a module
// ;===========================================

export class FoodModel
{
    constructor(id, name, calories)
    {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
}