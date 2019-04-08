import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/teachers/home/home.component';
import { AssignmentsComponent } from './views/teachers/assignments/assignments.component';
import { AnnouncementsComponent } from './views/teachers/announcements/announcements.component';
import { GradesComponent } from './views/teachers/grades/grades.component';
import { NavbarComponent } from './views/main/navbar/navbar.component';
import { LoginComponent } from './views/main/login/login.component';
import { RegisterComponent } from './views/main/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AssignmentsComponent,
    AnnouncementsComponent,
    GradesComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
