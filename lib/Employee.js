// instructor provided Classes
class Employee {
  constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getRole(){
    return this.role;
  }
  getName(){
    return this.name;
  }
  getId(){
    return this.id;
  }
  getEmail(){
    return this.email;
  }
}

// Employee.prototype.getRole = function (){
//   return this.role;
// }
// Employee.prototype.getName = function (){
//   return this.name;
// }
// Employee.prototype.getId = function (){
//   return this.id;
// }
// Employee.prototype.getEmail = function (){
//   return this.email;
// }


module.exports = Employee;