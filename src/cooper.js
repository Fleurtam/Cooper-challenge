function CooperResult() {}

CooperResult.prototype.male_result = function() {

switch(this.age) {

  case (this.age = 13||14):
        if (distance < 2100) {
           result = 'Poor';
        } else if (distance >= 2100 && distance<= 2199) {
           result = 'Below Average';
        } else if (distance >= 2200 && distance<= 2399) {
           result = 'Average';
        } else if (distance >= 2400 && distance<= 2699) {
           result = 'Above Average';
        } else if (distance >2700) {
           result = 'Excellent';
        }

  case (this.age = 15 || 16):
        if (distance < 2200) {
          result = 'Poor';
      } else if (distance >= 2200 && distance <= 2299) {
      result = 'Below Average';
      } else if (distance >= 2300 && distance <= 2499) {
      result = 'Average';
      } else if (distance >= 2500 && distance <= 2799) {
      result = 'Above Average';
      } else if (distance > 2800) {
      result = 'Excellent';
      }


      case (this.age >= 17 && this.age <= 19):
    if (distance < 2300) {
      result = 'Poor';
    } else if (distance >= 2300 && distance <= 2499) {
    result = 'Below Average';
  } else if (distance >= 2500 && distance <= 2699) {
    result = 'Average';
  } else if (distance >= 2700 && distance <= 2999) {
    result = 'Above Average';
  } else if (distance > 3000) {
    result = 'Excellent';
  }


    case (this.age >= 20 && this.age <= 29):
        if (distance < 1600) {
          result = 'Poor';
        } else if (distance >= 1600 && distance <= 2199) {
        result = 'Below Average';
      } else if (distance >= 2200 && distance <= 2399) {
        result = 'Average';
      } else if (distance >= 2400 && distance <= 2799) {
        result = 'Above Average';
      } else if (distance > 2800) {
        result = 'Excellent';
      }



        case (this.age >= 30 && this.age <= 39):
            if (distance < 1500) {
            result = 'Poor';
          } else if (distance >= 1500 && distance <= 1999) {
            result = 'Below Average';
          } else if (distance >= 2000 && distance <= 2299) {
            result = 'Average';
          } else if (distance >= 2300 && distance <= 2699) {
            result = 'Above Average';
          } else if (distance > 2700) {
            result = 'Excellent';
          }


  case (this.age >= 40 && this.age <= 49):
    if (distance < 1400) {
      result = 'Poor';
    } else if (distance >= 1400 && distance <= 1699) {
    result = 'Below Average';
  } else if (distance >= 1700 && distance <= 2099) {
    result = 'Average';
  } else if (distance >= 2100 && distance <= 2499) {
    result = 'Above Average';
  } else if (distance > 2500) {
    result = 'Excellent';
  }



  case (this.age >= 50):
      if (distance < 1300) {
        result = 'Poor';
      } else if (distance >= 1300 && distance <= 1599) {
      result = 'Below Average';
    } else if (distance >= 1600 && distance <= 1999) {
      result = 'Average';
    } else if (distance >= 2000 && distance <= 2399) {
      result = 'Above Average';
    } else if (distance > 2400) {
      result = 'Excellent';
    }
  }
