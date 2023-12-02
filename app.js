const btnNum0 = document.querySelector("#btn_num0");
const btnNum1 = document.querySelector("#btn_num1");
const btnNum2 = document.querySelector("#btn_num2");
const btnNum3 = document.querySelector("#btn_num3");
const btnNum4 = document.querySelector("#btn_num4");
const btnNum5 = document.querySelector("#btn_num5");
const btnNum6 = document.querySelector("#btn_num6");
const btnNum7 = document.querySelector("#btn_num7");
const btnNum8 = document.querySelector("#btn_num8");
const btnNum9 = document.querySelector("#btn_num9");

const btnDel = document.querySelector("#btn_del");
const btnReset = document.querySelector("#btn_reset");
const btnResult = document.querySelector("#btn_answer");
const btnDot = document.querySelector("#btn_dot");

const btnAddition = document.querySelector("#btn_addition");
const btnSubtraction = document.querySelector("#btn_subtraction");
const btnMultiplication = document.querySelector("#btn_multiplication");
const btnDivision = document.querySelector("#btn_division");

let inpText = document.querySelector("#input_text");
let lastChar;

btnNum0.addEventListener("click", function () {
  lastChar = inpText.value.charAt(inpText.value.length - 1);
  if (
    inpText.value != "0" &&
    lastChar != "+" &&
    lastChar != "-" &&
    lastChar != "*" &&
    lastChar != "/" &&
    lastChar != "."
  ) {
    inpText.value += "0";
  }
  scroll();
});
btnNum1.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "1";
  scroll();
});
btnNum2.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "2";
  scroll();
});
btnNum3.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "3";
  scroll();
});
btnNum4.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "4";
  scroll();
});
btnNum5.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "5";
  scroll();
});
btnNum6.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "6";
  scroll();
});
btnNum7.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "7";
  scroll();
});
btnNum8.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "8";
  scroll();
});
btnNum9.addEventListener("click", function () {
  if (inpText.value == "0") {
    inpText.value = "";
  }
  inpText.value += "9";
  scroll();
});
btnDot.addEventListener("click", function () {
  if (inpText.value == "0") {
  } else {
    inpText.value += ".";
  }
});

btnDel.addEventListener("click", function () {
  if (inpText.value == "0") {
  } else {
    if (inpText.value === "") {
      inpText.value = "0";
    }
    inpText.value = inpText.value.slice(0, -1);
  }
});
btnReset.addEventListener("click", function () {
  inpText.value = "";
});

btnAddition.addEventListener("click", function () {
  lastChar = inpText.value.charAt(inpText.value.length - 1);
  if (
    lastChar != "+" &&
    lastChar != "-" &&
    lastChar != "*" &&
    lastChar != "/" &&
    lastChar != "."
  ) {
    inpText.value = inpText.value + "+";
  }
  scroll();
});
btnSubtraction.addEventListener("click", function () {
  lastChar = inpText.value.charAt(inpText.value.length - 1);
  if (
    lastChar != "+" &&
    lastChar != "-" &&
    lastChar != "*" &&
    lastChar != "/" &&
    lastChar != "."
  ) {
    inpText.value = inpText.value + "-";
  }
  scroll();
});
btnMultiplication.addEventListener("click", function () {
  lastChar = inpText.value.charAt(inpText.value.length - 1);
  if (
    lastChar != "+" &&
    lastChar != "-" &&
    lastChar != "*" &&
    lastChar != "/" &&
    lastChar != "."
  ) {
    inpText.value = inpText.value + "*";
  }
  scroll();
});
btnDivision.addEventListener("click", function () {
  lastChar = inpText.value.charAt(inpText.value.length - 1);
  if (
    lastChar != "+" &&
    lastChar != "-" &&
    lastChar != "*" &&
    lastChar != "/" &&
    lastChar != "."
  ) {
    inpText.value = inpText.value + "/";
  }
  scroll();
});

btnResult.addEventListener("click", function () {
  let value = eval(inpText.value);
  inpText.value = value;
});
function scroll() {
  inpText.scrollLeft = inpText.scrollWidth;
}
