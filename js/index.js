// BIRINCHI VAZIFA

// let numbers = [-20, 30, 6.5, 51, -58, -3.2, -8]
// let gold = [-20, -9, 31, 3.6, 53]

// const math = function (numbers) {
//     let result = []

//     for (let number of numbers) {
//         if (number >= 0) {
//             result.push(Math.round(number));
//         } else {
//             result.push(Math.round(number * -1))
//         }
//     }

//     return result;
// }

// console.log(math(gold));
// console.log(math(numbers));

// IKKINCHI VAZIFA

// let numbers = [4, 9, 6, 5]

// const numbersSum = function(numbers) {
//     let func = 0

//     for (let number of numbers) {
//         func += number
//     }

//     console.log(func);
// }

// numbersSum(numbers);

// Stiven mashiqi

let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormBtn = document.querySelector(".form__btn");
let elFormResultOne = document.querySelector(".form__result-1");
let elFormResultTwo = document.querySelector(".form__result-2");
let elFormResultThree = document.querySelector(".form__result-3");
let elFormResultFour = document.querySelector(".form__result-4");
let elFormResultText = document.querySelector(".false-answer");

const servicePrice = function (num) {
  if (num >= 50 && num <= 300) {
    return num * 0.15;
  } else {
    return num * 0.2;
  }
};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  let history = [];

  let inputValue = elFormInput.value;

  if (inputValue < 50 || isNaN(inputValue)) {
    elFormResultText.textContent = `Bizning restoranda 50 dan past maxsultlar yuq . Iltimos tugri raqam kiriting`;
    return;
  }

  elFormResultOne.textContent = inputValue;
  elFormResultTwo.textContent = servicePrice(inputValue);
  let result = Number(inputValue) + Number(servicePrice(inputValue));
  elFormResultThree.textContent = result;
  history.push(result);
  elFormResultFour.textContent = history;
});
