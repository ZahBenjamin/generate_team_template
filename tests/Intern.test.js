const Intern = require('../lib/Intern')

describe("Intern", () => {
  describe("init", () => {
    it('should require a school', () => {
      const intern = new Intern('Billy', 2, 'b@email.com', 'Xavier Institute');
      // const intern = new Intern('Xavier Institute');

      expect('school' in intern).toBe(true);
    });
  });
  describe("getSchool", () => {
    it('should return school', 
    () => {
      const intern = new Intern('Billy', 2, 'b@email.com', 'Xavier Institute');

      expect(intern.getSchool()).toBe('Xavier Institute');
    });
  });
});