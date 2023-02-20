const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
    ]

const inputContainer = document.getElementById('container')

for (let i=0; i<5; i++) {
    inputContainer.innerHTML += '<img src="' + slides [i] + '" alt="img" id="img' + i + '">'
    document.getElementById("img" + i).style.display = "none";
}

let active = 0
console.log (active)

document.getElementById("img" + active).style.display = "block";

inputContainer.innerHTML += '<i id=indietro class="fa-solid fa-chevron-left"></i>'
inputContainer.innerHTML += '<i id=avanti class="fa-solid fa-chevron-right"></i>'

const indietro = document.getElementById('indietro')
const avanti = document.getElementById('avanti')

avanti.addEventListener('click', function () {
    document.getElementById("img" + active).style.display = "none"
    if (active == 4) { active = -1 }
    document.getElementById("img" + ++active).style.display = "block"

    console.log (active)
});

indietro.addEventListener('click', function () {
    document.getElementById("img" + active).style.display = "none"
    if (active == 0) { active = 5 }
    document.getElementById("img" + --active).style.display = "block"

    console.log (active)
});
