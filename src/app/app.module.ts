import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { TrainersComponent } from './trainers/trainers.component';
import { AddTrainerComponent } from './trainers/add-trainer/add-trainer.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentService } from './services/student.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentComponent,
    TrainersComponent,
    AddTrainerComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
