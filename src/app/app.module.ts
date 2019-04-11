import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
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

@NgModule({
  declarations: [
    AppComponent,
    GradesComponent,
    StudentHomepageComponent,
    SubmissionsComponent,
    AnnouncementsComponent,
    AssignmentsComponent
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
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
