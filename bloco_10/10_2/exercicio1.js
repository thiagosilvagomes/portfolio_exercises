const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }
  console.log(uppercase('test', (str) => {
      expect(str).toBe('TEST');
  }));
  module.exports = uppercase;