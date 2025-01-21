const num = document.querySelector('.number input');
const weight = document.querySelector('.weight h3');
const error = document.querySelector('.error');

num.addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        let size = num.value;
        if(size >= 0) {
            let calc = size * 0.45;
            weight.innerHTML = calc.toFixed(2);
        }
        else {
                error.style.display = 'block';
                setInterval(resetDiv, 3000);
        }
    }
});
const resetDiv = () => {
    num.value = 'none';
    error.style.display = 'none';
}