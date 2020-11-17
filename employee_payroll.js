class EmployeePayrollData {
  // property
  id;
  name;
  salary;
  gender;
  startDate;

  // constructor
  constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
  }

  // getter and setter method
  get id() {
    return this.id;
  }
  get name() {
    return this.name;
  }
  get salary() {
    return this.salary;
  }
  get gender() {
    return this.gender;
  }
  get startDate() {
    return this.startDate;
  }

  set id(id) {
    this.id = id;
  }
  set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(nameRegex.test(name)){
      this.name = name;
    }
    else throw 'Name is incorrect';   
  }
  set salary(salary) {
    this.salary = salary;
  }
  set gender(gender) {
    this.gender = gender;
  }
  set startDate(startDate) {
    this.startDate = startDate;
  }

  // method
  toString() {
    const options = {year: 'numeric', month: 'long', day:'numeric'};
    const empDate = this.startDate == undefined ? "undefined":
                    this.startDate.toLocaleDateString("en-IN",options);
    return "id = " + this.id + ", name = " + this.name + ", salary = " + this.salary  
           + ", gender = " + this.gender  + ", startDate = " + this.startDate;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());
try{
  employeePayrollData.name = "John";
  console.log(employeePayrollData.toString());
}
catch(e){
  console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 30000, "F" , new Date());
console.log(newEmployeePayrollData.toString()); 