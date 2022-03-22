const Employee = require('../lib/Employee')

describe("Employee", () => {
  describe("init", () => {
    it('should require a name, id, and email', () => {
      const employee = new Employee('Penelope', 4, 'p@email.com');

      expect('name' in employee).toBe(true);
      expect('id' in employee).toBe(true);
      expect('email' in employee).toBe(true);
    });
  });
  describe("getName", () => {
    it('should return name', () 
    => {
      const employee = new Employee('Billy', 2, 'b@email.com');

      expect(employee.getName()).toBe('Billy');
    });
  });
  describe("getId", () => {
    it('should return ID', () 
    => {
      const employee = new Employee('Billy', 2, 'b@email.com');

      expect(employee.getId()).toBe(2);
    });
  });
  describe("getEmail", () => {
    it('should return role', 
    () => {
      const employee = new Employee('Billy', 2, 'b@email.com');

      expect(employee.getEmail()).toBe('b@email.com');
    });
  });
});