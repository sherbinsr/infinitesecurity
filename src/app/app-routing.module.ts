import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryformComponent } from './components/enquiryform/enquiryform.component';
import { MainComponent } from './components/main/main.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {path:'',redirectTo:'main',pathMatch:'full'},
  {path:'enquiryform',component:EnquiryformComponent},
  {path:'main',component:MainComponent},
  {path:'gallery',component:GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
