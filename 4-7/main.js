// カンマ区切りの文字列を分割して配列に格納 split
//配列から特定の文字が含まれるデータを抽出　filter/indexOf
// elって何？

//単純な文字列の並び替え sort()

let string = process.argv[2];
let lowerCaseString = string.toLowerCase();
// console.log(lowerCaseString);
let array = lowerCaseString.split(",");
let sortArray = array.sort();
// console.log(array);
// console.log(sortArray);

function filterArray(arr, query) {
  return arr.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
console.log(filterArray(array, "a"));
