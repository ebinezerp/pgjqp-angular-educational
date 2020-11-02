import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student;

  constructor(
    private studentService: StudentService,
    private router: Router) {
    this.student = new Student();
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.studentService.addStudent(this.student);
    this.student = new Student();
    this.router.navigate(['/students']);
  }

}
