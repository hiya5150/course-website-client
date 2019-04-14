import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsAssignmentsComponent} from './views/students/assignments/students-assignments.component';
import {StudentsAnnouncementsComponent} from './views/students/announcements/students-announcements.component';
import {StudentsGradesComponent} from './views/students/grades/students-grades.component';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';
import {MainHomepageComponent} from './views/main/main-homepage/main-homepage.component';
import {StudentsSubmissionsComponent} from './views/students/submissions/students-submissions.component';
import {from} from 'rxjs';
import {TeachersAssignmentsComponent} from './views/teachers/assignments/teachers-assignments.component';
import {RegisterComponent} from './views/main/register/register.component';
import {NotFoundComponent} from './views/main/not-found/not-found.component';
import {TeachersGradesComponent} from './views/teachers/grades/teachers-grades.component';
import {TeacherAuthGuard} from './controllers/teacher-auth.guard';
import {StudentAuthGuard} from './controllers/student-auth.guard';
import {TeachersAnnouncementsComponent} from './views/teachers/announcements/teachers-announcements.component';
import {LoginComponent} from './views/main/login/login.component';
import {TeachersAssignmentComponent} from './views/teachers/assignment/teachers-assignment.component';
import {StudentsAssignmentComponent} from './views/students/students-assignment/students-assignment.component';
import {StudentsHomepageComponent} from './views/students/student-homepage/students-homepage.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainHomepageComponent},
  {path: 'home', component: MainHomepageComponent},
  {path: 'teachers/home', component: TeachersHomepageComponent, canActivate: [TeacherAuthGuard]},
  {path: 'teachers/assignments', component: TeachersAssignmentsComponent, canActivate: [TeacherAuthGuard]},
  {path: 'teachers/announcements', component: TeachersAnnouncementsComponent, canActivate: [TeacherAuthGuard]},
  {path: 'teachers/grades', component: TeachersGradesComponent, canActivate: [TeacherAuthGuard]},
  {path: 'teachers/assignment/:asnID', component: TeachersAssignmentComponent, canActivate: [TeacherAuthGuard]},
  {path: 'students/home', component: StudentsHomepageComponent, canActivate: [StudentAuthGuard]},
  {path: 'students/assignments', component: StudentsAssignmentsComponent, canActivate: [StudentAuthGuard]},
  {path: 'students/assignment/:asnID', component: StudentsAssignmentComponent, canActivate: [StudentAuthGuard]},
  {path: 'students/announcements', component: StudentsAnnouncementsComponent, canActivate: [StudentAuthGuard]},
  {path: 'students/grades', component: StudentsGradesComponent, canActivate: [StudentAuthGuard]},
  {path: 'students/submissions', component: StudentsSubmissionsComponent, canActivate: [StudentAuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
