import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialogModule,
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule, MatRadioModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule} from '@angular/forms';
import { StudentsGradesComponent } from './views/students/grades/students-grades.component';
import { StudentsHomepageComponent } from './views/students/student-homepage/students-homepage.component';
import { StudentsSubmissionsComponent } from './views/students/submissions/students-submissions.component';
import { StudentsAnnouncementsComponent } from './views/students/announcements/students-announcements.component';
import { StudentsAssignmentsComponent } from './views/students/assignments/students-assignments.component';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';
import {MainHomepageComponent} from './views/main/main-homepage/main-homepage.component';
import {LoginComponent} from './views/main/login/login.component';
import {RegisterComponent} from './views/main/register/register.component';
import {NotFoundComponent} from './views/main/not-found/not-found.component';
import {TeachersAnnouncementsComponent} from './views/teachers/announcements/teachers-announcements.component';
import {TeachersAssignmentsComponent} from './views/teachers/assignments/teachers-assignments.component';
import {TeachersGradesComponent} from './views/teachers/grades/teachers-grades.component';
import { TeachersAssignmentComponent } from './views/teachers/assignment/teachers-assignment.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainHomepageComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    StudentsHomepageComponent,
    StudentsAnnouncementsComponent,
    StudentsAssignmentsComponent,
    StudentsSubmissionsComponent,
    StudentsGradesComponent,
    TeachersHomepageComponent,
    TeachersAnnouncementsComponent,
    TeachersAssignmentsComponent,
    TeachersGradesComponent,
    TeachersAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatRadioModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent, LoginComponent]
})
export class AppModule { }
