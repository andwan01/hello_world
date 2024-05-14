"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
        this.datecreated = new Date();
    }
    User.prototype.getDateCreated = function () {
        console.log(this.datecreated);
    };
    return User;
}());
exports.default = User;
var u = new User();
console.log(u);
