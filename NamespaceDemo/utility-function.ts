namespace Utility {

    export function maxBooksAllowed(age: number): number {
        return age < 12 ? 3 : 10;
    }


    export namespace Fees {
        export function calculateLateFee(daysLate: number): number {

            return 0.25 * daysLate;
        }
    }

    function privateFunc(): void {
        console.log('This is a private function');

    }
}
