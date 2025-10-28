// ここにコードを書きながら確認しましょう！

// 練習問題
// 問題 1
function arrayFn(arg) {
  return ["jQuery", "Vue", arg];
}

const [fw1, fw2, fw3] = arrayFn("Nest");
console.log(fw3);

// 問題 2
function objectFn(company) {
  const { name: companyName } = company;
  console.log(companyName);
}

const argObject = {
  name: "Gizumo",
  place: "Shibuya",
};

objectFn(argObject);
