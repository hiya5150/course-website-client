import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';
import {MainHomepageComponent} from './views/main/main-homepage/main-homepage.component';

const routes: Routes = [
  {path: 'teachers-homepage', component: TeachersHomepageComponent},
  {path: 'main-homepage', component: MainHomepageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
