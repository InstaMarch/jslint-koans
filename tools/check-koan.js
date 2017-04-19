/*jslint
    es6, node
*/
const fs = require("fs");
const linter = require("jslint-node");

const checkKoan = function (koanNumber) {
    return function (t) {
        "use strict";
        fs.readFile("./koans/" + koanNumber + ".js", "utf8", function(error, data) {
            let ourCode = data;
            t.plan(1);

            linter(true)
                .then(function (jslinter) {
                    const result = jslinter.jslint(ourCode);
                    const warningMessages = result.warnings.map((warning) => warning.message);
                    t.equal(result.ok, true);
                    warningMessages.forEach(function (message) {
                        t.comment(message);
                    });
                    if(result.ok === false) {
                        t.comment("There is a problem with the following code:\n" + data);
                    }
                });
        }); 
    }
}

module.exports = checkKoan;
