const num = document.querySelector(".number input");
const weight = document.querySelector(".weight h3");
const div = document.querySelector(".main");
/*
const form = document.createElement("form"); //Promijeni div sa class main da bude forma
form.className = "main";
form.innerHTML = div.innerHTML;
div.replaceWith(form);
*/
let inputValue; // Napravi varijablu input value

let result; //Napravi varijablu result

num.addEventListener("input", () => {
  //Dodaj event listener na input i sacuvaj vrijednost inputa u varijablu inputValue
  inputValue = num.value;
  console.log(inputValue);
});

div.addEventListener("submit", (inputValue) => {
  //Na formu dodaj event listener submit
  inputValue.preventDefault();
  convertPoundsToKilogram(); //Unutar nje pozovi funkciju convertPoundsToKilogram koristeci input value kao argument
});

function convertPoundsToKilogram() {
  //Napravi funckiju convertPoundsToKilogram
  if (inputValue >= 0) {
    result = inputValue * 0.45;
    weight.innerHTML = result.toFixed(2);
    console.log(result);
  }
}
