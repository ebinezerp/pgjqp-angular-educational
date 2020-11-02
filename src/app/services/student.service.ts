import { Student } from '../students/student.model';



export class StudentService {

  private students: Student[] = [
    new Student('Ravi', 'ravi@gmail.com', '89089089009', 78.9),
    new Student('Geetha', 'geetha@gmail.com', '76889090876', 86.3),
    new Student('Ashok', 'ashok@gmail.com', '9988778876', 89.5)
  ];
  constructor() { }

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  update(student: Student): void {
    const obj = this.students.find( std => std.email === student.email);
    const index = this.students.indexOf(obj);
    this.students[index] = student;
  }

  getStudent(email: string): Student {
    return this.students.find(std => std.email === email);
  }

}
