function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
};

Person.prototype.result = function() {
  this.distance = 2700;
  this.result = "Above Average"
};
