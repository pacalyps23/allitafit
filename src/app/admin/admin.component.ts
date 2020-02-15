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
import { MatDialog, MatDialogConfig } from '@angular/material';
import { EditEventComponent } from '../edit-event/edit-event.component';
import { EditArticleComponent } from '../edit-article/edit-article.component';
import { DeleteArticleComponent } from '../delete-article/delete-article.component';
import { Calorie } from '../cardio/calorie';
import { CalorieService } from '../service/calorie.service';
import { EditCalorieComponent } from '../edit-calorie/edit-calorie.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public mobileWidth;
  public article = new Article(null, null, null, null, null, new Array);
  public event = new Event({
    title: null, date: null, description: null, thumbnailUrl: null, location: null,
    pics: [], vids: [], signUps: []
  });
  public articles: Array<Article>;
  public calorie = new Calorie(
    null,
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null],
    0, 0, 0, 0)

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
  public calories = Array<Calorie>();

  constructor(public articleService: ArticleService,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private profileService: ProfileService,
    private auth: AuthService,
    private eventService: EventService,
    private calService: CalorieService,
    private _fb: FormBuilder,
    private dialog: MatDialog) {

  }

  ngOnInit() {

    if (this.auth.isMobile()) {
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

    this.calService.getAllCaloreis().subscribe(data => {
      this.calories = data;
    });

    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()])
    });
  }

  editEventDialog(event: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '800px';
    dialogConfig.width = '600px';

    dialogConfig.data = event.data;

    const dialogRef = this.dialog.open(EditEventComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data != undefined || data != null) {
        this.eventService.updateEvent(event.id, data);
      }
    });
  }

  editArticleDialog(article: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '800px';
    dialogConfig.width = '600px';

    dialogConfig.data = article.data;

    const dialogRef = this.dialog.open(EditArticleComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data != undefined || data != null) {
        this.articleService.updateItem(article.id, data);
      }
    });
  }

  deleteArticleDialog(id: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = id;

    const dialogRef = this.dialog.open(DeleteArticleComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data != undefined || data != null) {
        this.articleService.deleteItem(id);
      }
    });
  }

  editCalorieDialog(calorie: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '800px';
    dialogConfig.width = '600px';

    dialogConfig.data = calorie.data;

    const dialogRef = this.dialog.open(EditCalorieComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      if (data != undefined || data != null) {
        this.calService.updateCalorie(data, calorie.id);
      }
    });
  }

  deleteCalorie(id){
    this.calService.deleteCalorie(id);
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

  addEvent(event: Event) {
    this.invoiceForm.value.itemRows.map(data => {
      console.log(data.itemname);
      event.pics.push(data.itemname);
    })
    this.eventService.addEvent(event);
  }

  deleteEvent(postId) {
    this.eventService.deleteEvent(postId);
  }

  addCalorie(calorie) {
    this.calService.addCalories(calorie);
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
