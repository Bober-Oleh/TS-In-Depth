import { Magazine, Book, ShelfItem } from "../interfaces";
export default class Shelf<T extends ShelfItem>{
    items: T[] = [];
    add(item: T): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }

    find(title: string): T {

        return this.items.find(item => item.title === title);
    }

    printTitles(): void {
        this.items.forEach(item => console.log(item.title));
    }
}









/*
export default class Shelf2<T>{


    items: Book[] | Magazine[] = [];
    add(item: Book & Magazine): void {
        this.items.push(item);
    }

    getFirst(): T {
        return this.items[0];
    }
}*/