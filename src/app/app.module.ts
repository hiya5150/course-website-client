import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule, MatInputModule, MatRadioModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

import { AssignmentsComponent } from './views/teachers/assignments/assignments.component';
import { AnnouncementsComponent } from './views/teachers/announcements/announcements.component';
import { GradesComponent } from './views/teachers/grades/grades.component';
import { NavbarComponent } from './views/main/navbar/navbar.component';
import { LoginComponent } from './views/main/login/login.component';
import { RegisterComponent } from './views/main/register/register.component';
import { MainHomepageComponent } from './views/main/main-homepage/main-homepage.component';
import { TeachersHomepageComponent } from './views/teachers/teachers-homepage/teachers-homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AnnouncementsComponent,
    GradesComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    MainHomepageComponent,
    TeachersHomepageComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RegisterComponent]
})
export class AppModule { }
