import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student;
  @Output() addStudent: EventEmitter<Student> = new EventEmitter<Student>();

  constructor() {
    this.student = new Student();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.addStudent.emit(this.student);
    this.student = new Student();
  }

}
