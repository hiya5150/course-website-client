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
import { GradesComponent } from './views/students/grades/grades.component';
import { StudentHomepageComponent } from './views/students/student-homepage/student-homepage.component';
import { SubmissionsComponent } from './views/students/submissions/submissions.component';
import { AnnouncementsComponent } from './views/students/announcements/announcements.component';
import { AssignmentsComponent } from './views/students/assignments/assignments.component';
import {TeachersHomepageComponent} from './views/teachers/teachers-homepage/teachers-homepage.component';
import {MainHomepageComponent} from './views/main/main-homepage/main-homepage.component';
import {LoginComponent} from './views/main/login/login.component';
import {RegisterComponent} from './views/main/register/register.component';
import {NotFoundComponent} from './views/main/not-found/not-found.component';

@NgModule({
  declarations: [
    MainHomepageComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    AppComponent,
    GradesComponent,
    StudentHomepageComponent,
    SubmissionsComponent,
    AnnouncementsComponent,
    AssignmentsComponent,
    TeachersHomepageComponent
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
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent, LoginComponent]
})
export class AppModule { }
