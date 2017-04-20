//Sometimes a system of code must be improved to prevent unintended consequences

var options = [1, 2, 3];
var total = 0;
function totalNumber(number) {
    "use strict";
    switch (number) {
    case 1:
        total += 1;
    case 2:
        total += 1;
    default:
        total += 100;
    }
}

totalNumber(1);
