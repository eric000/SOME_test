import tpl from "./info.tpl";

const oApp = document.querySelector("#app");

const info = tpl({
  name: "weiweicat",
  age: 3,
  sex: "boy",
});

oApp.innerHTML = info;
