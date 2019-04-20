import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { ContactService } from './service/contact.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramsComponent } from './programs/programs.component';
import { OwlModule } from 'ngx-owl-carousel';
import { GalleryComponent } from './gallery/gallery.component';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/authguard.service';
import { ArticleService } from './service/article-service.service';
import { GalleryService } from './service/gallery.service';
import { DropZoneDirective } from './drop-zone.directive';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { TabModule } from 'angular-tabs-component';
import { CardioComponent } from './cardio/cardio.component';


var firebaseConfig = {
  apiKey: "AIzaSyAOV571ckUC5u6awW96SanIHesAmhnb6D4",
      authDomain: "allitafit.firebaseapp.com",
      databaseURL: "https://allitafit.firebaseio.com",
      projectId: "allitafit",
      storageBucket: "allitafit.appspot.com",
      messagingSenderId: "208732271165"
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent,  },
  { path: 'programs', component: ProgramsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cardio', component: CardioComponent},
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent,},
  { path: 'admin', component: AdminComponent},
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProgramsComponent,
    GalleryComponent,
    BlogComponent,
    ContactComponent,
    LoginComponent,
    AdminComponent,
    TestimonialsComponent,
    ArticleComponent,
    DropZoneDirective,
    CardioComponent,
    
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
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService, ArticleService, AuthGuard, GalleryService, ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
