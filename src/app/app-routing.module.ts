import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsAssignmentsComponent} from './views/students/assignments/students-assignments.component';
import {StudentsAnnouncementsComponent} from './views/students/announcements/students-announcements.component';
import {StudentsGradesComponent} from './views/students/grades/students-grades.component';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';
import {MainHomepageComponent} from './views/main/main-homepage/main-homepage.component';
import {LoginComponent} from './views/main/login/login.component';
import {from} from 'rxjs';
import {TeachersAssignmentsComponent} from './views/teachers/assignments/teachers-assignments.component';
import {TeachersAnnouncementsComponent} from './views/teachers/announcements/teachers-announcements.component';
import {RegisterComponent} from './views/main/register/register.component';
import {NotFoundComponent} from './views/main/not-found/not-found.component';
import {TeachersGradesComponent} from './views/teachers/grades/teachers-grades.component';




const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainHomepageComponent},
  {path: 'main-homepage', component: MainHomepageComponent},
  {path: 'teachers-homepage', component: TeachersHomepageComponent},
  {path: 'teachers-assignments', component: TeachersAssignmentsComponent},
  {path: 'teachers-announcements', component: TeachersAnnouncementsComponent},
  {path: 'teachers-grades', component: TeachersGradesComponent},
  {path: 'assignments', component: StudentsAssignmentsComponent},
  {path: 'announcements', component: StudentsAnnouncementsComponent},
  {path: 'grades', component: StudentsGradesComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
