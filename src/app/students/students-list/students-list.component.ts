import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

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
