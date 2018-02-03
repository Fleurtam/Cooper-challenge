describe("CooperResult", function() {
  var result;
  var person;

  beforeEach(function() {
    person = new Person({gender: 'male', age: 17, distance: 2700});
    result = new CooperResult();
  });

  it("it returns cooper result for males", function() {
    expect(person.male_result).toEqual("Above Average");
  });

});
