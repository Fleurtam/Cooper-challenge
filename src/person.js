function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
}

Person.prototype.score_result = function() {
 score_result = new CooperResult();
 score_result.male_result(this);
 setscore_result(this);
};
