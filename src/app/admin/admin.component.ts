import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleService } from '../service/article-service.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public article = new Article(null, null, null, null, null);
  articles: any;
  // Main task 
  task: AngularFireUploadTask;
  // Progress monitoring
  percentage: Observable<number>;
  snapshot: Observable<any>;
  // Download URL
  downloadURL: string = null;
  // State for dropzone CSS toggling
  isHovering: boolean;
  public downloadURLs = new Array();

  constructor(public articleService: ArticleService, private db: AngularFirestore, private storage: AngularFireStorage) {

  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
    //this.getImages();
  }

  addArticle(article: any) {
    this.articleService.addItem(article);
  }

  deleteArticle(postId) {
    this.articleService.deleteItem(postId);
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    let one = file.type.split('/')[0];
    let two = file.type.split('/')[1];
    if (!(one !== 'image' || two !== "pdf")) {
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `pdf/${file.name}`;


    // The main task
    this.task = this.storage.upload(path, file)
    const ref = this.storage.ref(path);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();


    // The file's download URL
    ref.getDownloadURL().subscribe(url => {
      this.downloadURL = url;
    });
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}
