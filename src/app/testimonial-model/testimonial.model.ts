import { Image } from '../gallery/image.model';

export class Testimonial {
    images: string[];
    title: string;
    description: string;
    date: Date; 

    constructor(images:string[], title: string, description: string, date:Date){
        this.images = images;
        this.title = title;
        this.description = description;
        this.date = date;
    }
}