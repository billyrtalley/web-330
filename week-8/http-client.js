/*
============================================
; Title: HTTP-client.js
; Author: William Talley
; Date: 3 October 2021
; Description: HTTP client class.
;===========================================
*/

// Create HTTP Client class.
//In the body of the class create an async function named get with two parameters: url and 
// params.  Set the params parameter to a default empty string. 

export class HttpClient {
    
    async get(url, params = '') {
        // New URL object.
        let urlObject = new URL(url);

// Instantiate a new URLSearchParams object, supplying it the params parameter and 
// assigning it to the url.search property.  

        let paramsObject = new URLSearchParams(params);
        urlObject.search = paramsObject

        const res = await fetch(urlObject.toString(), {
            method: "GET",
        })

// Return the res object literal as JSON. 
        return res.json();
    }
}