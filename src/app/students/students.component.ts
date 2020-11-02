import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  selectedStudent: Student = new Student();
  isEditTriggerd: boolean = false;

  constructor(private studentService: StudentService) {
    this.students = this.studentService.getStudents();
  }

  ngOnInit(): void {
  }

  onAddStudent(student: Student): void {
    this.students.push(student);
  }

  edit(student: Student): void {
    // const copyStudent: Student = {
    //   "name": student.name,
    //   "email": student.email,
    //   "mobile": student.mobile,
    //   "percentage": student.percentage
    // };
    //this.selectedStudent = copyStudent;

    this.selectedStudent = student.clone();
    this.isEditTriggerd = true;
  }

}
