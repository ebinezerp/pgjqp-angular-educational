import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    new Student('Ravi', 'ravi@gmail.com', '89089089009', 78.9),
    new Student('Geetha', 'geetha@gmail.com', '76889090876', 86.3),
    new Student('Ashok', 'ashok@gmail.com', '9988778876', 89.5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddStudent(student: Student): void {
    this.students.push(student);
  }

}
