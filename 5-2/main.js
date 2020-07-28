const users = require("./users.json");

let array = [];
for (let i = 0; i < 6; i++) {
  if (users.users[i].rank == "A" && users.users[i].years < 5) {
    const salaryA = 3000 * users.users[i].years + 100000;
    //console.log(users.users[i].name + ":" + salaryA);
    array.push(users.users[i].name + ":" + salaryA);
  } else if (users.users[i].rank == "A") {
    const salaryAA = 3000 * users.users[i].years + 120000;
    //console.log(users.users[i].name + ":" + salaryAA);
    array.push(users.users[i].name + ":" + salaryAA);
  } else if (users.users[i].rank == "B") {
    const salaryB = 4000 * users.users[i].years + 140000;
    //console.log(users.users[i].name + ":" + salaryB);
    array.push(users.users[i].name + ":" + salaryB);
  } else {
    const salaryC = 5000 * users.users[i].years + 160000;
    //console.log(users.users[i].name + ":" + salaryC);
    array.push(users.users[i].name + ":" + salaryC);
  }
}
// console.log(array);
// for (j = 0; j < array.length; j++) {
//   let numb = array[j].match(/\d/g);
//   numb = numb.join("");
//   console.log(numb);
// }

//数字を含む文字列の配列を並び替え　正規表現を使ってソート
//https://qiita.com/fj_yohei/items/8d827a84e5fdd35871de

array.sort(function (a, b) {
  return b.match(/\d+/) - a.match(/\d+/);
});
console.log(array);
