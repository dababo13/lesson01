//オブジェクトはキーとバリューがセット　{key:value}
//連想配列
// for...in 指定したオブジェクトの列挙可能プロパティに対して、順不同で反復処理をする
const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22,
    },
    {
      name: "鈴木",
      age: 34,
    },
    {
      name: "高橋",
      age: 42,
    },
    {
      name: "田中",
      age: 15,
    },
  ],
};

//console.log(profiles.profiles[2]);
for (let i = 0; i < profiles.profiles.length; i++) {
  console.log(profiles.profiles[i].name + ":" + profiles.profiles[i].age);
}
