/// <reference path="utility-function.ts"/>
var r1 = Utility.Fees.calculateLateFee(12);
console.log(r1);
var r2 = Utility.maxBooksAllowed(15);
console.log(r2);
var util = Utility.Fees;
var r3 = util.calculateLateFee(5);
console.log(r3);
