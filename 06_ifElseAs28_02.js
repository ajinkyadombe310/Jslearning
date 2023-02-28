console.log("**Assignment2**");
var check_leap_year = function (leap_year) {
  // console.log(typeof leap_year);
  if (
    leap_year == null ||
    typeof leap_year == String ||
    leap_year == undefined ||
    isNaN(leap_year) == true
  ) {
    console.log(`Year ${leap_year}:Input data is not correct`);
  } else if (leap_year % 4 == 0) {
    console.log(`Year ${leap_year} is leap Year`);
  } else {
    console.log(`Year ${leap_year} is not leap Year`);
  }
};

check_leap_year(2020);
check_leap_year(1999);
check_leap_year(1600);
check_leap_year(2022);
check_leap_year(1945);
check_leap_year(null);
check_leap_year("Twenty Twenty");
check_leap_year(undefined);
check_leap_year(NaN);
check_leap_year(1750);
