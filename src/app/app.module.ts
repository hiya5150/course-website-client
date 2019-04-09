import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './views/main/register/register.component';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatStepperModule,
  MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { GradesComponent } from './views/students/grades/grades.component';
import { StudentHomepageComponent } from './views/students/student-homepage/student-homepage.component';
import { AssignmentsComponent } from './views/students/assignments/assignments.component';
import { AnnouncementsComponent } from './view/students/announcements/announcements.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    GradesComponent,
    StudentHomepageComponent,
    AssignmentsComponent,
    AnnouncementsComponent
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
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
