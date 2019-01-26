import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProgramsComponent } from '../programs/programs.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { BlogComponent } from '../blog/blog.component';
import { ContactComponent } from '../contact/contact.component';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'programs', component: ProgramsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
