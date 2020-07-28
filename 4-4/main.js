// math.random　０以上１未満の少数...

// for (let i = 0; i <= 9; i++) {
//   console.log(Math.floor(Math.random() * 10));
// }

// 重複のない乱数を生成して、配列に格納する...
// https://www.webdesignleaves.com/wp/jquery/111/
// Math.random
//Math.floor 引数として与えた数以下の最大の整数を返す

function generated_randomx(count) {
  var generated = new Array();
  var generatedCount = generated.length;
  for (let i = 0; i < count; i++) {
    let candidate = Math.floor(Math.random() * count);
    for (let j = 0; j < generatedCount; j++) {
      if (candidate == generated[j]) {
        candidate = Math.floor(Math.random() * count);
        j = -1;
      }
    }
    generated[i] = candidate;
    generatedCount++;
  }
  return generated;
}

console.log(generated_randomx(10));
