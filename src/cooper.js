
function Person(attr) {
  this.gender = attr.gender;
  this.age = attr.age;
  this.distance = attr.distance;
}





Person.prototype.male_result = function(obj) {
  var age = this.age;
  var distance = this.distance;

  switch (true) {

    case (age === 13 || 14):
      if (distance < 2100) {
        return 'Poor';
      }
      else if (distance >= 2100 && distance <= 2199) {
        return 'Below Average';
      }
      else if (distance >= 2200 && distance <= 2399) {
        return  'Average';
      }
      else if (distance >= 2400 && distance <= 2699) {
        return  'Above Average';
      }
      else if (distance > 2700) {
        return 'Excellent';
      }

      break;

    case (age === 15 || 16):
      if (distance < 2200) {
        return 'Poor';
      }
      else if (distance >= 2200 && distance <= 2299) {
        'Below Average';
      }
      else if (distance >= 2300 && distance <= 2499) {
        return  'Average';
      }
      else if (distance >= 2500 && distance <= 2799) {
        return 'Above Average';
      }
      else if (distance > 2800) {
        return  'Excellent';
      }
      break;


    case (age >= 17 && age <= 19):
      if (distance < 2300) {
        return  'Poor'
      }
      else if (distance >= 2300 && distance <= 2499) {
        return  'Below Average';
      }
      else if (distance >= 2500 && distance <= 2699) {
        return  'Average';
      }
      else if (distance >= 2700 && distance <= 2999) {
        return  'Above Average';
      }
      else if (distance > 3000) {
        return 'Excellent';
      }
      break;


    case (age >= 20 && age <= 29):
      if (distance < 1600) {
        return 'Poor';
      }
      else if (distance >= 1600 && distance <= 2199) {
        return 'Below Average';
      }
      else if (distance >= 2200 && distance <= 2399) {
        return  'Average';
      }
      else if (distance >= 2400 && distance <= 2799) {
        return  'Above Average';
      }
      else if (distance > 2800) {
        return  'Excellent';
      }
      break;

    case (age >= 30 && age <= 39):
      if (distance < 1500) {
        result = 'Poor';
      }
      else if (distance >= 1500 && distance <= 1999) {
        return  'Below Average';
      }
      else if (distance >= 2000 && distance <= 2299) {
        return 'Average';
      }
      else if (distance >= 2300 && distance <= 2699) {
        return 'Above Average';
      }
      else if (distance > 2700) {
        return  'Excellent';
      }
      break;

    case (age >= 40 && age <= 49):
      if (distance < 1400) {
        result = 'Poor';
      }
      else if (distance >= 1400 && distance <= 1699) {
        return 'Below Average';
      }
      else if (distance >= 1700 && distance <= 2099) {
        return  'Average';
      }
      else if (distance >= 2100 && distance <= 2499) {
        return 'Above Average';
      }
      else if (distance > 2500) {
        return 'Excellent';
      }
      break;

    case (age >= 50):
      if (distance < 1300) {
        return  'Poor';
      }
      else if (distance >= 1300 && distance <= 1599) {
        return  'Below Average';
      }
      else if (distance >= 1600 && distance <= 1999) {
        return 'Average';
      }
      else if (distance >= 2000 && distance <= 2399) {
        return 'Above Average';
      }
      else if (distance > 2400) {
        return 'Excellent';
      }

      break;
  }
};
