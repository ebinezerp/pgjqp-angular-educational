import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() student: Student;

  constructor(private router: Router) {
    this.student = new Student();
  }

  ngOnInit(): void {
  }

  edit(email: string): void {
    this.router.navigate(['students/edit', email]);
  }

}
