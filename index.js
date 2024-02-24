let input = document.getElementById('temp');
let ctf = document.getElementById('celsius');
let ftc = document.getElementById('fahrenheit');
let answer = document.getElementById('answer');
let btn = document.getElementById('joe');
let degrees = input;

function convert() {
    degrees = Number(degrees.value);
    if (ctf.checked) {
        degrees = degrees * 9/5 + 32;
        answer.innerHTML =  degrees + " Fahrenheit";
    } 
    else if (ftc.checked) {
        degrees = (degrees - 32) * 5/9;
        answer.innerHTML =  degrees + " Celsius";
    }
}

btn.addEventListener('click', convert);