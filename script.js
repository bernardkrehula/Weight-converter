const num = document.querySelector('.number input');
const weight = document.querySelector('.weight h3');

num.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        let calc = num.value * 0.45;
        weight.innerHTML = calc.toFixed(2);
    }
})