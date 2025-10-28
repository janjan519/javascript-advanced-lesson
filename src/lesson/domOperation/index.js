import "animate.css";

// ここにコードを書きながら確認しましょう！
const title = document.getElementById("title");
const button = document.getElementById("button");
const mochaCard = document.querySelector(".card-type--mocha");
const yellowCard = document.querySelector(".card-type--yellow");

button.addEventListener("click", () => {
  // title要素に.animate__hingeクラスを付与
  title.classList.add("animate__hinge");
  // 2秒後にtitle要素から.animate__hingeクラスを削除
  setTimeout(() => {
    title.classList.remove("animate__hinge");
    mochaCard.classList.add("card-animation");
    yellowCard.style.display = "block";
    yellowCard.classList.add("animate__fadeInUp");
  }, 2000);
});

// ↑ 練習問題はここまで書いてきたコードに追記する形で実装してください。 ↑
