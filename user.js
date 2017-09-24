"use strict";

module.exports = class User{
    constructor(firstName,lastName){
        var _firstName = firstName;
        var _lastName = lastName;

        this.getFirstName = function(){ return _firstName;}
        this.getLastName = function(){return _lastName;}
    }

    fullName(){
        return this.getFirstName().concat(" ",this.getLastName());
    }
}