//creo l'array
//do un id al body e gli assegno position relative
//con un for aggiungo le immagini dell'array nell'html e gli assegno display none
//creo una variabile active che controllerà quale immagine viene visualizzata
//creo il markup delle frecce
//creo le funzioni avanti e indietro che al click delle frecce modificano la variabile active e il display delle immagini da visualizzare/nascondere
// BONUS con un if su active rendo possibie il loop delle immagini

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
