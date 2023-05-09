/// <reference path="utility-function.ts"/>

const r1 = Utility.Fees.calculateLateFee(12);
console.log(r1)

const r2 = Utility.maxBooksAllowed(15);
console.log(r2)
import util = Utility.Fees;
const r3 = util.calculateLateFee(5);
console.log(r3)
