function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
};

Person.prototype.result = function() {
 result = new CooperResult();
 result.result_male(this);
};
