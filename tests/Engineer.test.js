const Engineer = require('../lib/Engineer')

describe("Engineer", () => {
  describe("init", () => {
    it('should require a github username', () => {
      const engineer = new Engineer('Randy', 1, 'r@email.com', 'ohyeah123');

      expect('github' in engineer).toBe(true);
    });
  });
  describe("getGithub", () => {
    it('should return github username', 
    () => {
      const engineer = new Engineer('Randy', 1, 'r@email.com', 'ohyeah123');

      expect(engineer.getGithub()).toBe('ohyeah123');
    });
  });
});