//テキストに含まれる文字の数の確認　match()　？？

const str = "こはるはるここはるここはるはるここはるこはるはるはる";
// let targetStrOne = "こはる";
// let countOne = (str.match(new RegExp(targetStrOne, "こはる")) || []).length;

let counter = function (str, seq) {
  return str.split(seq).length - 1;
};

console.log("こはる" + ":" + counter(str, "こはる"));
console.log("はるこ" + ":" + counter(str, "はるこ"));
