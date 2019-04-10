import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';
import {MainHomepageComponent} from './views/main/main-homepage/main-homepage.component';
import {LoginComponent} from './views/main/login/login.component';
import {AssignmentsComponent} from './views/teachers/assignments/assignments.component';
import {AnnouncementsComponent} from './views/teachers/announcements/announcements.component';
import {GradesComponent} from './views/teachers/grades/grades.component';
import {RegisterComponent} from './views/main/register/register.component';

const routes: Routes = [
  {path: 'main-homepage', component: MainHomepageComponent},
  {path: 'teachers-homepage', component: TeachersHomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'teachers-homepage', component: TeachersHomepageComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'grades', component: GradesComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
