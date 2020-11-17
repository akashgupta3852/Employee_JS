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

  set changeId(id) {
    if(id > 0)
      this.id = id;
    else 
      throw "Id: " + id + " should be non zero positive"; 
  }
  set changeName(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(name.match(nameRegex)){
      this.name = name;
    }
    else 
      throw "Name: " + name + " is incorrect";   
  }
  set changeSalary(salary) {
    if(salary > 0)
      this.salary = salary;
    else 
      throw "Salary: " + salary + " should be non zero positive";
  }
  set changeGender(gender) {
    let genderRegex = RegExp('^[MF]$');
    if (genderRegex.test(gender)) 
      this.gender = gender;
    else 
      throw "Gender: " + gender +" is incorrect";
  }
  set changeStartDate(startDate) {
    if (startDate  <= new Date())
      this.startDate = startDate;
    else 
      throw "Date : " + startDate + " is incorrect";
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

// Failure case of id
try{
  employeePayrollData.changeId = 0;
}
catch(e){
  console.error(e);
}

try{
  employeePayrollData.changeId = 5;
  console.log(employeePayrollData.toString());
}
catch(e){
  console.error(e);
}

// Failure case of name
try{
  employeePayrollData.changeName = "john";
}
catch(e){
  console.error(e);
}

try{
  employeePayrollData.changeName = "Akash";
  console.log(employeePayrollData.toString());
}
catch(e){
  console.error(e);
}

// Failure case of salary
try{
  employeePayrollData.changeSalary = -8956;
}
catch(e){
  console.error(e);
}

try{
  employeePayrollData.changeSalary = 965847;
  console.log(employeePayrollData.toString());
}
catch(e){
  console.error(e);
}

// Failure case of gender
try{
  employeePayrollData.changeGender = "X";
}
catch(e){
  console.error(e);
}

try{
  employeePayrollData.changeGender = "M";
  console.log(employeePayrollData.toString());
}
catch(e){
  console.error(e);
}

// Failure case of start date
try{
  employeePayrollData.changeStartDate = new Date("2021-04-11T10:20:30Z");
}
catch(e){
  console.error(e);
}

try{
  employeePayrollData.changeStartDate = new Date("2019-04-11T10:20:30Z");
  console.log(employeePayrollData.toString());
}
catch(e){
  console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(2, "Terissa", 30000, "F" , new Date());
console.log(newEmployeePayrollData.toString()); 