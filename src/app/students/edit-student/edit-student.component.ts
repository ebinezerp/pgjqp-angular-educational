import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  student: Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
    ) {
    const email = this.activatedRoute.snapshot.paramMap.get('email');
    this.student = this.studentService.getStudent(email);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.studentService.update(this.student);
    this.router.navigate(['/students']);
  }

}
