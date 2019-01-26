import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramsComponent } from './programs/programs.component';
import { RoutingModule } from './routing/routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { GalleryComponent } from './gallery/gallery.component';
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
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { ArticleComponent } from './article/article.component';

import { AuthService } from './service/auth.service';
import { ArticleService } from './service/article-service.service';



var firebaseConfig = {
  apiKey: "AIzaSyAOV571ckUC5u6awW96SanIHesAmhnb6D4",
      authDomain: "allitafit.firebaseapp.com",
      databaseURL: "https://allitafit.firebaseio.com",
      projectId: "allitafit",
      storageBucket: "allitafit.appspot.com",
      messagingSenderId: "208732271165"
};



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
    ArticleComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    OwlModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService, ArticleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
