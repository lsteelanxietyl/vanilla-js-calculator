let grid = document.querySelector(".main-grid");
let gridItems = grid.querySelectorAll("p");

let one = gridItems[0];
let two = gridItems[1];
let three = gridItems[2];
let four = gridItems[3];
let five = gridItems[4];
let six = gridItems[5];
let seven = gridItems[6];
let eight = gridItems[7];
let nine = gridItems[8];
let zero = gridItems[9];
let plus = gridItems[10];
let minus = gridItems[11];
let multiplication = gridItems[12];
let division = gridItems[13];
let equal = gridItems[14];
let allClean = gridItems[15];

let display = document.querySelector(".display");

one.addEventListener("click", () => {
  display.textContent += one.textContent;
});
two.addEventListener("click", () => {
  display.textContent += two.textContent;
});
three.addEventListener("click", () => {
  display.textContent += three.textContent;
});
four.addEventListener("click", () => {
  display.textContent += four.textContent;
});
five.addEventListener("click", () => {
  display.textContent += five.textContent;
});
six.addEventListener("click", () => {
  display.textContent += six.textContent;
});
seven.addEventListener("click", () => {
  display.textContent += seven.textContent;
});
eight.addEventListener("click", () => {
  display.textContent += eight.textContent;
});
nine.addEventListener("click", () => {
  display.textContent += nine.textContent;
});
zero.addEventListener("click", () => {
  display.textContent += zero.textContent;
});

allClean.addEventListener("click", () => {
  display.textContent = "";
});

let firstVal;
let secondVal;
let sign;
let result;

plus.addEventListener("click", () => {
  firstVal = display.textContent;
  display.textContent = "";
  sign = "+";
});
minus.addEventListener("click", () => {
  firstVal = display.textContent;
  display.textContent = "";
  sign = "−";
});
multiplication.addEventListener("click", () => {
  firstVal = display.textContent;
  display.textContent = "";
  sign = "×";
});
division.addEventListener("click", () => {
  firstVal = display.textContent;
  display.textContent = "";
  sign = "÷";
});

equal.addEventListener("click", () => {
  if (sign != null && firstVal != "") {
    secondVal = display.textContent;
    display.textContent = "";
    if (sign == "+") {
      result = +firstVal + +secondVal;
      firstVal = "";
      secondVal = "";
    } else if (sign == "−") {
      result = +firstVal - +secondVal;
      firstVal = "";
      secondVal = "";
    } else if (sign == "×") {
      result = +firstVal * +secondVal;
      firstVal = "";
      secondVal = "";
    } else if (sign == "÷") {
      result = +firstVal / +secondVal;
      firstVal = "";
      secondVal = "";
    }
    display.textContent = result;
  } else {
    return;
  }
});
