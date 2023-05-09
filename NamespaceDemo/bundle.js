var Utility;
(function (Utility) {
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return 0.25 * daysLate;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function privateFunc() {
        console.log('This is a private function');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-function.ts"/>
var r1 = Utility.Fees.calculateLateFee(12);
console.log(r1);
var r2 = Utility.maxBooksAllowed(15);
console.log(r2);
var util = Utility.Fees;
var r3 = util.calculateLateFee(5);
console.log(r3);
