
describe("Person", function() {
  var person;

  beforeEach (function() {
    person = new Person({gender: 'male', age: 17, distance: 2700});
  });

  it("should have gender of male", function (){
    expect(person.gender).toEqual('male');
  });

  it("should have age of 17", function (){
    expect(person.age).toEqual(17);
  });

  it("should have run distance of 2700 meters", function (){
    expect(person.distance).toEqual(2700);
  });

  it("should return cooper result of 'Above Average'", function (){
    expect(person.male_result).toEqual('Above Average');
  });
});
