/*jslint
    es6, devel
*/
const test = require("tape");
const checkKoan = require("./tools/check-koan.js");
const russianDoll = require("./koans/with.js");

test("Whitespace should be precise", checkKoan("whitespace"));

//test("Improper indentation can send mixed messages", checkKoan("indented-whitespace"));

//test("There is a better operator than ++", checkKoan("increment"));

//test("A day without semicolons is like a day without sunshine", checkKoan("semicolons"));

//test("Equality must not be compromised", checkKoan("double-equals"));

//test("The void operator shall never amount to much", checkKoan("void"));

//test("Switch statements by themselves can create unintended consequences", checkKoan("switch"));

//test("Even if it were useful we would have to tiptoe very carefully to use a \"with statement\" correctly and that is not a guaranty against trouble", checkKoan("with"));

//test("The Russian doll should contain at the end of its nested childrentwo children: parallelMirrors and thePyramidSchemeToEndAllPyramidSchemes who both evaluate to true", function (t){
    t.plan(2);
    t.true(russianDoll.playWithinAPlay.recursion.sharingGoogleHangoutsScreen.parallelMirrors);
    t.true(russianDoll.playWithinAPlay.recursion.sharingGoogleHangoutsScreen.thePyramidSchemeToEndAllPyramidSchemes);
});

//test("Ambiguous arguments are tought to read", checkKoan("arrow-function-parameters"));

//test("Arrow functions with bodies can be confusing", checkKoan("arrow-function-body"));

//test("The 'this' operator may compromise your security", checkKoan("this"));

//test("Constructors can be destructive if used recklessly", checkKoan("new"));
