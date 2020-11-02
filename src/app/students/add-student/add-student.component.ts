import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from '../student.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  @Input() student: Student;
  @Input() edit: boolean;

  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.edit){
      this.studentService.update(this.student);
    }else{
      this.studentService.addStudent(this.student);
    }

    this.student = new Student();
  }

}
