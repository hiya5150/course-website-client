import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubmissionsComponent} from './views/students/submissions/submissions.component';
import {AssignmentsComponent} from './views/students/assignments/assignments.component';
import {Announcement} from './models/announcement';
import {AnnouncementsComponent} from './views/students/announcements/announcements.component';
import {GradesComponent} from './views/students/grades/grades.component';
import {StudentHomepageComponent} from './views/students/student-homepage/student-homepage.component';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';



const routes: Routes = [
  {path: 'teachers-homepage', component: TeachersHomepageComponent},
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
