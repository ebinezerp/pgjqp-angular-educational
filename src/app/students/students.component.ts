import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  ngOnInit(): void {

  }
}
