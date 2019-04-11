import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsAssignmentsComponent} from './views/students/assignments/students-assignments.component';
import {StudentsAnnouncementsComponent} from './views/students/announcements/students-announcements.component';
import {StudentsGradesComponent} from './views/students/grades/students-grades.component';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';
import {MainHomepageComponent} from './views/main/main-homepage/main-homepage.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainHomepageComponent},
  {path: 'teachers-homepage', component: TeachersHomepageComponent},
  {path: 'assignments', component: StudentsAssignmentsComponent},
  {path: 'announcements', component: StudentsAnnouncementsComponent},
  {path: 'grades', component: StudentsGradesComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
