import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { EditStudentComponent } from './students/edit-student/edit-student.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsComponent } from './students/students.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent, children: [
      { path: '', component: StudentsListComponent },
      { path: 'add', component: AddStudentComponent},
      { path: 'edit/:email', component: EditStudentComponent}
    ]
  },
  { path: 'trainers', component: TrainersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
