"use strict";

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var p = new Person("Andrew","Wan");
console.log(p.firstName);