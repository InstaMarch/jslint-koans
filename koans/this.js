/*jslint
    es6, node
*/

let duck = {};
duck.sound = "quack";
duck.speak = function () {
    "use strict";
    console.log(this.sound);
};

