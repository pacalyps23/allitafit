export class Article{
    title: string;
    date: string;
    description: string;
    fileUrl: string;
    thumbnailUrl: string;
    votes: number;
  
    constructor(title: string, date: string, description: string, fileUrl: string, thumbnailUrl: string,votes?: number){
      this.title = title;
      this.date = date;
      this.description = description;
      this.fileUrl = fileUrl;
      this.thumbnailUrl = thumbnailUrl;
      this.votes = votes || 0;
    }
  
  }
  