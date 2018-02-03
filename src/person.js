function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
}

Person.prototype.score_result = function() {
 result = new CooperResult();
 result.male_result(this);
};
