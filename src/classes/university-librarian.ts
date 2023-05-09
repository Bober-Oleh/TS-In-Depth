
import { sealed, writable, format } from '../decorators';
import * as Interfaces from './../interfaces'

@sealed('University Librarian')
class UniversityLibrarian implements Interfaces.Librarian {
    @format()
    name: string;
    email: string;
    department: string;
    assistCustomer(custName: string, bookTitle: string): void {
        console.log(`${this.name} ${custName}`)
    }
    @writable(true)
    assistFaculty(): void {
        console.log('Assisting faculty');
    }

    @writable(false)
    teachCommunity(): void {
        console.log('teachCommunity');
    }
}


export {
    UniversityLibrarian
}