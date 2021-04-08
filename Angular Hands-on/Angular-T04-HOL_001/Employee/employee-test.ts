import { Employee } from "./employee";
import { Department } from "./department";
import { Skill } from "./skill";

class EmployeeTest {
  employee: Employee = {
    id: undefined,
    name: undefined,
    salary: undefined,
    permanent: undefined,
    department: undefined,
    skills: undefined,
  };

  constructor(
    id?: number,
    name?: string,
    salary?: number,
    permanent?:boolean,
    department?: Department,
    skills?: Skill[]
  ) {
    this.employee.id = id;
    this.employee.name = name;
    this.employee.salary = salary;
    this.employee.permanent = permanent; 
    this.employee.department = department;
    this.employee.skills = skills;
  }

  display(): void {
    console.log("ID: " + this.employee.id);
    console.log("Name: " + this.employee.name);
    console.log("Salary: " + this.employee.salary);
    console.log("permanent:"+this.employee.permanent);
    console.log("Department ID: " + this.employee.department.id);
    console.log("Department Name: " + this.employee.department.name);
    let skills = this.employee.skills;
    for (var i = 0; i < skills.length; i++) {
      let skill: Skill = skills[i];
      console.log("skill[" + i + "]:" + skill.id + ", " + skill.name);
    }
  }
}

let employeeTest = new EmployeeTest(
  1003,
  "John",
  10000,
  true,
  {
    id: 1,
    name: "Payroll",
  },
  [
    {
      id: 1,
      name: "HTML",
    },
    {
      id: 2,
      name: "CSS"
    },
    {
      id: 3,
      name: "JavaScript"
    }
  ]
);
employeeTest.display();
