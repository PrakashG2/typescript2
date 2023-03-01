class Course{
    course_id: number;
    course_name: string;
    constructor(course_id: number, course_name: string) {
        this.course_id = course_id;
        this.course_name = course_name;
    }
    public course_details(): any{
        console.log(`COURSE ID - ${this.course_id} : NAME OF COURSE - ${this.course_name}.`);
    }
}
class Employee extends Course{
    emp_id: number;
    emp_name: string;
    emp_des: string;
    constructor(course_id: number, course_name: string, emp_id: number, emp_name: string, emp_des: string ) {
        super(course_id, course_name);
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_des = emp_des;
    }
    public employee_details(): any{
        super.course_details();
        console.log(`EMPLOYEE ID - ${this.emp_id} : EMPLOYEE NAME - ${this.emp_name} : DESIGNATION - ${this.emp_des}.`)
    }
}
class Admin extends Employee{
    admin_id: number;
    admin_name: string;
    constructor(course_id: number, course_name: string, emp_id: number, emp_name: string, emp_des: string, admin_id: number, admin_name: string) {
        super(course_id, course_name, emp_id, emp_name, emp_des);
        this.admin_id = admin_id;
        this.admin_name = admin_name;
    }
    public admindetail() {
        super.employee_details();
        console.log(`ADMIN ID - ${this.admin_id} : ADMIN NAME - ${this.admin_name}.`);
    }
}
class display extends Admin{
    course_id: number;
    course_name: string;
    emp_id: number;
    emp_name: string;
    emp_des: string;
    admin_id: number;
    admin_name: string;
    constructor(course_id: number, course_name: string, emp_id: number, emp_name: string, emp_des: string, admin_id: number, admin_name: string) {
        super(course_id, course_name, emp_id, emp_name, emp_des,admin_id,admin_name);
        this.course_id = course_id;
        this.course_name = course_name;
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_des = emp_des;
        this.admin_id = admin_id;
        this.admin_name = admin_name;
    }
    public display() {
        super.admindetail();
        console.log(`\n DISPLAY : COURSE ID : ${this.course_id} - NAME OF COURSE : ${this.course_name} - EMPLOYEE ID : ${this.emp_id} - EMPLOYEE NAME : ${this.emp_name} - DESTINATION : ${this.emp_des} - ADMIN ID : ${this.admin_id} - ADMIN NAME : ${this.admin_name}.`);
    }

}
let dis = new display(100, "FULLSTACK", 101, "PRAKASH", "SOFTWARE ENGINEER", 50, "ARJUN");
dis.display();