import { Category } from "./enum";
import { Book, Callback, LibMgrCallback, TOptions } from "./interfaces";
import { BookOrUndefined, BookProperties } from "./types";
import RefBook from './classes/encyclopedia'

export function getAllBooks(): readonly Book[] {
    const books = <const>[
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available: true },
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available: false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'Andrea Chiarelli', available: true }
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    console.log(`Number of books: ${books.length}`);

    const title: string = books.find(({ available }) => available)?.title;
    console.log(`First available book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.JavaScript): Array<string> {
    const books = getAllBooks();

    const titles: string[] = books
        .filter(book => book.category === category)
        .map(({ title }) => title);

    return titles;
}

export function logBookTitles(titles: string[]): void {
    titles.forEach(title => console.log(title));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();
    const { title, author } = books[index] ?? {};
    return [title, author];
}

export function calcTotalPages(): void {
    const data = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    const numOfPages = data.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(numOfPages)
}

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}


export function getProperty(book: Book, prop: BookProperties): any {
    const value = book[prop];
    return typeof value === 'function' ? value.name : value;
};

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`)
    if (age) {
        console.log(`Customer age: ${age}`)
    }

    if (city) {
        console.log(`Customer city: ${city}`)
    }
}

export function getBookById(id: Book['id']): BookOrUndefined {
    const books = getAllBooks();

    return books.find(book => book.id === id);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Custoner: ${customer}`);
    return bookIDs
        .map(id => getBookById(id))
        .filter(book => book.available)
        .map(({ title }) => title);
}


export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;
        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;
        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new Error('value should have been a string');
    }

}

export function assertRefBookInstance(condition: any): asserts condition {
    if (!condition) {
        throw new Error("It is  not an instance of RefBook");
    }

}

export function bookTitleTransform(title: any) {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}


export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 100;
    options.speed ??= 60;

    return options;
}




export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}



export function getObjectProperty<TObject extends object, TKey extends keyof TObject>(
    object: TObject,
    key: TKey
): TObject[TKey] | string {
    const value = object[key];

    return typeof value === 'function' ? value.name : value;
}

type Res<T> = T extends true ? string : number

export function update<T extends boolean>(isString: T): Res<T> {
    if (isString) {
        return 'sdsdsd' as Res<T>;
    } else {
        return 123 as Res<T>;
    }
}
/*
export function getBooksByCategory(category: Category, Callback: LibMgrCallback): void {


 }*/

export function getBooksByCategory(category: Category, callback: Callback<string[]>): void {
    setTimeout(() => {
        try {
            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('NO books found');
            }
        } catch (err) {
            callback(err, null);
        }
    }, 2000)
}

//update(false);


export function logCategorySearch(err: Error | null, data: string[] | null): void {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {

        setTimeout(() => {

            const titles = getBookTitlesByCategory(category);

            if (titles.length > 0) {
                resolve(titles);
            } else {
                reject('NO books found');
            }

        }, 2000)
    });
}

export async function logSearchresults(category: Category) {
    const titles = await getBooksByCategoryPromise(category);
    console.log(titles.length);
    return titles.length;

}