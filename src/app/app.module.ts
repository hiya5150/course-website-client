import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatDialogModule, MatCardModule, MatInputModule, MatRadioModule, } from '@angular/material';
import {MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AssignmentsComponent } from './views/teachers/assignments/assignments.component';
import { AnnouncementsComponent } from './views/teachers/announcements/announcements.component';
import { GradesComponent } from './views/teachers/grades/grades.component';
import { LoginComponent } from './views/main/login/login.component';
import { RegisterComponent } from './views/main/register/register.component';
import { MainHomepageComponent } from './views/main/main-homepage/main-homepage.component';
import { TeachersHomepageComponent } from './views/teachers/teachers-homepage/teachers-homepage.component';
import { NotFoundComponent } from './views/main/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    AnnouncementsComponent,
    GradesComponent,
    LoginComponent,
    RegisterComponent,
    MainHomepageComponent,
    TeachersHomepageComponent,
    NotFoundComponent,
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
    MatRadioModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // For Mat Dialog to work, the components used need to be listed here
  entryComponents: [RegisterComponent, LoginComponent]
})
export class AppModule { }
