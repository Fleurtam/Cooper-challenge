
describe("Person", function() {
  var person;

  beforeEach (function() {
    person = new Person({gender: 'male', age: 17});
  });

  it("should have gender of male", function (){
    excpect(person.gender).toEqual('male');
  });

  it("should have age of 17", function (){
    excpect(person.age).toEqual(17);
  });
});
