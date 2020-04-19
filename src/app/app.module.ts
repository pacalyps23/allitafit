import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog'; import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ContactService } from './service/contact.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { EventsComponent } from './events/events.component';
import { OwlModule } from 'ngx-owl-carousel';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AuthService } from './service/auth.service';
import { AuthGuardService as AuthGuard, AuthGuardService } from './service/auth-guard.service';
import { ArticleService } from './service/article-service.service';
import { GalleryService } from './service/gallery.service';
import { EventService } from './service/event-service.service';
import { DropZoneDirective } from './drop-zone.directive';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { TabModule } from 'angular-tabs-component';
import { CardioComponent } from './cardio/cardio.component';
import { MyFitnessComponent } from './my-fitness/my-fitness.component';
import { ChartsModule } from 'ng2-charts';
import { MyChartComponent } from './my-chart/my-chart.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LibraryComponent } from './library/library.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { DeleteArticleComponent } from './delete-article/delete-article.component';
import { EditCalorieComponent } from './edit-calorie/edit-calorie.component';
import { LiveTrainingComponent } from './live-training/live-training.component';
import { environment } from '../environments/environment.prod';
import { MembershipComponent } from './membership/membership.component';
import { AuthGuardUser } from './service/auth-guard-user.service';
import { TestimonialModelComponent } from './testimonial-model/testimonial-model.component';

var firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  databaseURL: environment.databaseURL,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, },
  { path: 'events', component: EventsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cardio', component: CardioComponent, canActivate: [AuthGuardUser] },
  { path: 'my fitness', component: MyFitnessComponent, canActivate: [AuthGuardUser] },
  { path: 'live training', component: LiveTrainingComponent, canActivate: [AuthGuardUser]  },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
  { path: 'membership', component: MembershipComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    EventsComponent,
    GalleryComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    TestimonialsComponent,
    ArticleComponent,
    DropZoneDirective,
    CardioComponent,
    MyFitnessComponent,
    MyChartComponent,
    ExerciseComponent,
    LibraryComponent,
    SingleEventComponent,
    EditEventComponent,
    EditArticleComponent,
    DeleteArticleComponent,
    EditCalorieComponent,
    LiveTrainingComponent,
    MembershipComponent,
    TestimonialModelComponent,
  ],
  entryComponents: [
    EditEventComponent,
    EditArticleComponent,
    DeleteArticleComponent,
    EditCalorieComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    PdfViewerModule,
    AngularFireStorageModule,
    HttpClientModule,
    NgxGalleryModule,
    ScrollToModule.forRoot(),
    ToastrModule.forRoot({ toastClass: 'toast toast-bootstrap-compatibility-fix' }),
    BrowserAnimationsModule,
    TabModule,
    ChartsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService, ArticleService, AuthGuard, GalleryService,
    ContactService, MyChartComponent, EventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
