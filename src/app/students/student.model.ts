export class Student {
  // name: string;
  // email: string;
  // mobile: string;
  // percentage: number;

  // constructor(name: string, email: string, mobile: string, percentage: number) {
  //   this.name = name;
  //   this.email = email;
  //   this.mobile = mobile;
  //   this.percentage = percentage;
  // }


  constructor(public name?: string, public email?: string, public mobile?: string, public percentage?: number) {}

  clone(): Student {
   const copy: Student = new Student();
   copy.name = this.name;
   copy.email = this.email;
   copy.mobile = this.mobile;
   copy.percentage = this.percentage;
   return copy;
  }

}
