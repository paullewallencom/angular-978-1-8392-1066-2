import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutInfoComponent } from './about-info/about-info.component';


const routes: Routes = [
  { path: '', component: AboutInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
