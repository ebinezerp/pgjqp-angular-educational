import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TrainersComponent } from './trainers/trainers.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'trainers', component: TrainersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
