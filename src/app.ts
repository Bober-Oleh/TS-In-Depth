/* eslint-disable no-redeclare */

import { ReferenceItem, UL, RefBook, Shelf } from "./classes";
import { Category } from './enum'
import { getAllBooks, purge, getBookTitlesByCategory, logBookTitles, logFirstAvailable, getBookAuthorByIndex, createCustomerID, getObjectProperty, getProperty, createCustomer, getBookById, checkoutBooks, getTitles, assertStringValue, bookTitleTransform, printBook, setDefaultConfig, printRefBook, getBooksByCategory, logCategorySearch, getBooksByCategoryPromise, logSearchresults } from "./functions";
import { Logger, Book, Magazine } from "./interfaces";
//import RefBook from './classes/encyclopedia';

import type { Library } from './classes/library';
import { BookRequiredFields, CreateCustomerFunctionType, UpdatedBook } from "./types";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






/*
const arr = [1, 2, 3, 4, 5];
const [, el] = arr;
*/

//Task 02.01
/*logFirstAvailable(getAllBooks());
logBookTitles(getBookTitlesByCategory(Category.JavaScript));
console.log(getBookAuthorByIndex(0));
calcTotalPages();*/

//Task 03.01
//let idGenerator:typeof createCustomerID;
/*let myID: string = createCustomerID('Ann', 10);
console.log(myID);

let idGenerator: (name: string, id: number) => string;

idGenerator = (name: string, id: number) => `${id}-${name}`;


const a = typeof 123;
console.log(a)



myID = idGenerator('Ann', 10);
console.log(myID);

idGenerator = createCustomerID;

myID = idGenerator('Ann', 10);
console.log(myID);

createCustomer('Anna');
createCustomer('Anna', 25);
createCustomer('Anna', 25, 'Kyiv');

const args: Parameters<typeof createCustomer> = ['Anna', 25, 'Kyiv'];
createCustomer(...args);*/
//logFirstAvailable();
//console.log(getBookTitlesByCategory(Category.CSS));
/*console.log(getBookById(1));

const myBooks = checkoutBooks('Ann', ...[1, 2, 4]);
console.log(myBooks);

getTitles('Ann');
getTitles(true);
getTitles(1, true);*/

//Task 03.o4
/*
console.log(bookTitleTransform('Transform'));
console.log(bookTitleTransform(123));
*//*
const myBook: Book = {
    id: 5,
    title: 'Colors, Backgrounds, and Gradients',
    author: 'Eric A. Meyer',
    available: true,
    category: Category.CSS,
    // year: 2015,
    //copies: 3
    pages: 200,
    markDamaged(reason: string) {
        console.log(`Damaged: ${reason}`);
    }
};/*
printBook(myBook);
myBook.markDamaged('missing back cover');
*/
// Task 04/2

//const logDamage: DamageLogger = (reason: string) => {
/*const logDamage: Logger = (reason: string) => {
    console.log(`Damaged: ${reason}`);
};

logDamage('missing back cover');
*/
// Task 04/03
/*
const favoriteAuthor: Author = {
    name: 'Anna',
    email: 'adsa@dsada.com',
    numBooksPublished: 2.

};

const faboriteLibrarian: Librarian = {
    name: 'Borsi',
    email: 'boris@asdsa.com',
    department: 'Classical Lit',
    assistCustomer(custName: string, bookTitle: string): void {

    }
};*/
/*
const offer: any = {
    book: {
        title: 'Essential TypeScript',
    },
};


console.log(offer.magazine);
console.log(offer.magazine?.getTitle());
console.log(offer.book.getTitle?.());
console.log(offer.book.authors?.[0]?.name);
console.log(getProperty(myBook, 'title'));
console.log(getProperty(myBook, 'markDamaged'));
console.log(getProperty(myBook, 'isbn')); */

//Task 05/01
/*const ref: ReferenceItem = new ReferenceItem(1, 'Learn TypeScript', 2023);
console.log(ref);
ref.printItem();
ref.publisher = 'abc group';
console.log(ref.publisher);
console.log(ref.getID());
// 05/02, 05.03
*/
//const refBook = new Encyclopedia(1, 'Learn TypeScript', 2023, 2);
/*const refBook = new RefBook(1, 'Learn TypeScript', 2023, 2);
console.log(refBook);
refBook.printItem();
refBook.printCitation();
printRefBook(refBook);

const ul = new UL.UniversityLibrarian();
printRefBook(ul);*/
/*
const favoriteLibrarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
favoriteLibrarian.assistCustomer('Boris', 'Learn Type');*/


//Task 05 05
/*
const personBook: PersonBook = {
    name: 'Anna',
    email: 'qwe@dsad.sd',
    author: "sd",
    available: false,
    category: Category.Angular,
    id: 1,
    title: 'udfsd'

}

let o: TOptions = {
    duration: 200

};
o = setDefaultConfig(o);
console.log(o);
*/


//Task 06.05
/*const flag = true;

if (flag) {
    import('./classes')
        .then(m => {
            const reader = new m.Reader();
            console.log(reader);

        });
}


if (flag) {
    const m = await import('./classes')

    const reader = new m.Reader();
    console.log(reader);


}*/

//Task 06 06

//let lib: Library = new Library();
/*
let lib: Library = {
    id: 1,
    address: 'sss',
    name: 'A'
};
console.log(lib);*/


//Task 07 01
/*
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];*/
/*
const r = purge(inventory);
const r2 = purge([1, 2, 3, 5]);
console.log(r);
console.log(r2);


const purgeNumbers = purge<number>;
purgeNumbers([1,2,3]);
purgeNumbers(['1','2']);


const bookShelf = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
console.log(bookShelf.getFirst().title);
*//*
const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];


const magazineShelf = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
console.log(magazineShelf.getFirst().title);

*/
// 07.03
/*
magazineShelf.printTitles();

console.log(magazineShelf.find('Five Points'));

console.log(getObjectProperty(magazines[0], 'title'));
console.log(getObjectProperty(magazines[0], 'publisher'));*/


//Task 07/04
/*
const p1: BookRequiredFields = {
    author: 'Anna',
    available: false,
    category: Category.Angular,
    id: 1,
    markDamaged: null,
    pages: 100,
    title: 'Unknown'


}

const p2: UpdatedBook = {
    id: 1
}

let p3: Parameters<CreateCustomerFunctionType> = ['Anna', 40];
createCustomer('Anna', 40, 'Kyiv');
let p4: Parameters<typeof createCustomer> = ['Anna', 40];*/
/*
const ul = new UL.UniversityLibrarian();
console.log(ul);

//UL.UniversityLibrarian['CCC'] = 'ccc';

Object.getPrototypeOf(ul)['DDD'] ='ddd'*/
/*
const ul = new UL.UniversityLibrarian();
console.log(ul);
ul.name = 'Anna';
ul['printLibrarian']();
(ul as UL.UniversityLibrarian & {printLibrarian: any}).printLibrarian;
*/

// Task 08/04
/*
const enc = new RefBook(1, 'Learn TypeScript', 2023, 2);
enc.printItem();

// Task 09.05, 08.06
const ul = new UL.UniversityLibrarian();
ul.name = 'Anna';

ul.assistCustomer('Boris', 'Learn Type');
console.log(ul);


//Tack 08 07
const enc = new RefBook(1, 'Learn TypeScript', 2023, 2);
enc.copies = -10;


//Task 09/01
console.log('Begin');
getBooksByCategory(Category.JavaScript, logCategorySearch);
getBooksByCategory(Category.Angular, logCategorySearch);
console.log('End');


//Task 09 02
console.log('Begin');
getBooksByCategoryPromise(Category.JavaScript)
    .then(titles => {
        console.log(titles);
        return Promise.resolve(titles.length);
    })
    .then(count => {
        console.log(count);
    })
    .catch(err => {
        console.log(err);
    })


getBooksByCategoryPromise(Category.Angular)
    .then(titles => {
        console.log(titles);

    })
    .catch(err => {
        console.log(err);
    })

console.log('End')*/
console.log('Begin');
const result = logSearchresults(Category.Angular)
    .then(console.log)
    .catch(console.log);
console.log(result);
console.log('End');