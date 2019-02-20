export class Contact {
    first: string;
    last: string;
    email: string;
    subject: string;
    message: string;

    constructor(first:string, last: string, email: string, subject: string, message: string){
        this.first = first;
        this.last = last;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
}
