// let date1 = new Date("07/30/2019");
// let date2 = new Date("06/20/2019");
// let diff = (date1 - date2) / (1000 * 3600 * 24);
// console.log(diff);

// function changeTodate(str) {
//   var date = str.split(" ");
//   return new Date(date[2], date[0] - 1, date[1]);
// }

// console.log(changeTodate("6 1 2019"));

function getDays(date1, date2) {
  function changeTodate(str) {
    var date = str.split(" ");
    return new Date(date[2], date[0] - 1, date[1]);
  }
  first = changeTodate(date1).getTime();
  second = changeTodate(date2).getTime();
  let diff;
  if (first > second) {
    // console.log(date1, date2);
    diff = (first - second) / (1000 * 3600 * 24);
  } else {
    diff = (second - first) / (1000 * 3600 * 24);
  }

  return diff;
}

console.log(getDays("6 14 2019", "6 20 2019"));
console.log(getDays("12 29 2018", "1 1 2019"));
console.log(getDays("7 20 2019", "7 30 2019"));
