"use strict";

const User = require("./user");

var u1 = new User("Andrew", "Wan");
console.log(u1);
console.log(u1.fullName());
console.log(u1.getDateCreated());