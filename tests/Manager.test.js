const Manager = require('../lib/Manager')

describe("Manager", () => {
  describe("init", () => {
    it('should require officeNumber', () => {
      const manager = new Manager('April', 3, 'a@email.com', 1234);

      expect('officeNumber' in manager).toBe(true);
    });
  });
});