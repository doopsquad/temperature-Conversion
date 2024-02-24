let input = document.getElementById('temp');
let ctf = document.getElementById('celsius');
let ftc = document.getElementById('fahrenheit');
let answer = document.getElementById('answer');
let btn = document.getElementById('joe');
let degrees = input.value;

function convert() {
    if (ctf.checked) {
        answer.innerHTML = (Number(degrees) * (9/5)) + 32 + " Fahrenheit";
    } 
    else if (ftc.checked) {
        answer.innerHTML = 5/9(Number(degrees) - 32) + " Celsius";
    }
}

btn.addEventListener('click', convert);