import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
import { ArticleService } from '../service/article-service.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';
import { ProfileService } from '../service/profile.service';
import { Profile } from 'selenium-webdriver/firefox';
import { EventService } from '../service/event-service.service';
import { Event } from '../single-event/event.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { EditEventComponent } from '../edit-event/edit-event.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public mobileWidth;
  public article = new Article(null, null, null, null, null, new Array);
  public event = new Event({ title: null, date: null, description: null, thumbnailUrl: null, location: null, 
    pics: [], signUps: []});
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
  public profiles = Array<Profile>();
  public bootUsers;
  public events = Array<Event>();
  public invoiceForm: FormGroup;

  constructor(public articleService: ArticleService, 
    private db: AngularFirestore, 
    private storage: AngularFireStorage,
    private profileService: ProfileService,
    private auth: AuthService,
    private eventService: EventService,
    private _fb: FormBuilder,
    private dialog: MatDialog) {

  }

  ngOnInit() {

    if(this.auth.isMobile()){
      this.mobileWidth = {
        "width": "900px",
      }
    }

    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });

    this.profileService.getAllProfiles().subscribe(data => {
      this.profiles = data;
    });

    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });

    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }

  openDialog() {
    this.dialog.open(EditEventComponent);
  }

  get formArr() {
    return this.invoiceForm.get('itemRows') as any;
  }

  get formData() { return <FormArray>this.invoiceForm.get('Data'); }

  initItemRows() {
    return this._fb.group({
      itemname: ['']
    });
  }

  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  addArticle(article: any) {
    this.articleService.addItem(article);
  }

  deleteArticle(postId) {
    this.articleService.deleteItem(postId);
  }

  addEvent(event: Event) {
    this.invoiceForm.value.itemRows.map(data => {
      console.log(data.itemname);
      event.pics.push(data.itemname);
    })
    this.eventService.addEvent(event);
  }

  deleteEvent(postId){
    this.eventService.deleteEvent(postId);
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
    this.storage.ref(path).put(file)
    .then(snapshot => {
      return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
  }).then(downloadURL => {
     this.downloadURL = downloadURL;
     return downloadURL;
  }).catch(error => {
     // Use to signal error if something goes wrong.
     console.log(`Failed to upload file and get link - ${error}`);
  });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
  }

  startUploadPicture(event: FileList) {
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
    const path = `events/${file.name}`;


    // The main task
    this.task = this.storage.upload(path, file)
    this.storage.ref(path).put(file)
    .then(snapshot => {
      return snapshot.ref.getDownloadURL();   // Will return a promise with the download link
  }).then(downloadURL => {
     this.downloadURL = downloadURL;
     return downloadURL;
  }).catch(error => {
     // Use to signal error if something goes wrong.
     console.log(`Failed to upload file and get link - ${error}`);
  });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
}
