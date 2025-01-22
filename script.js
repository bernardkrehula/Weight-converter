const div = document.querySelector(".main");

const form = document.createElement("form"); //Promijeni div sa class main da bude forma
form.className = "main";
form.innerHTML = div.innerHTML;
div.replaceWith(form);

const num = form.querySelector(".number input");
const weight = form.querySelector(".weight h3");

let inputValue; // Napravi varijablu input value

let result; //Napravi varijablu result

num.addEventListener("input", () => {
  //Dodaj event listener na input i sacuvaj vrijednost inputa u varijablu inputValue
  inputValue = num.value;
});

form.addEventListener("submit", (event) => {
  //Na formu dodaj event listener submit
  event.preventDefault();
  convertPoundsToKilogram(); //Unutar nje pozovi funkciju convertPoundsToKilogram koristeci input value kao argument
});

//Napravi funckiju convertPoundsToKilogram
function convertPoundsToKilogram() {
  if (inputValue >= 0) {
    result = inputValue * 0.45;
    weight.innerHTML = result.toFixed(2);
  }
}
