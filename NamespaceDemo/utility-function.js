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
