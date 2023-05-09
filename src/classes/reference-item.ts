import { timeout } from "../decorators";
abstract class ReferenceItem {
    /* title: string;
     year: number;

     constructor(newTitle: string, newYear: number) {
         console.log('Creating a new ReferenceItem...');
         this.title = newTitle;
         this.year = newYear;
     }*/

    #id: number;


    private _publisher: string;

    static deparment: string = 'Classical Lit'

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }

    constructor(
        id: number,
        public title: string,
        protected year: number
    ) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    getID(): number {
        return this.#id;

    }
    @timeout(5000)
    printItem(): void {
        console.log(`${this.title} was published ${this.year}`);
        console.log(ReferenceItem.deparment)
        console.log(Object.getPrototypeOf(this).constructor.deparment);
    }

    abstract printCitation(): void;

}



export {
    ReferenceItem
}