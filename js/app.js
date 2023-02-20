const slides = [
	{
		image: './img/01.jpg',
		title: 'Pontile',
		text: 'Uomo seduto su un pontile',
	},

	{
		image: './img/02.jpg',
		title: 'Hallstätter See',
		text: 'Dipinto di una citta affacciata su un lago',
	},

	{
		image: './img/03.jpg',
		title: 'Big Ben',
		text: 'Vista di Londra',
	},

	{
		image: './img/04.jpg',
		title: 'Brühls Terrace',
		text: 'Vista di Dresda',
	},

	{
		image: './img/05.jpg',
		title: 'Polinesia',
		text: 'Fotografia di una spiaggia della Polinesia',
	},
]

const inputContainer = document.getElementById('container')

for (let i=0; i<5; i++) {
    //inputContainer.innerHTML += '<img src="' + slides [i] + '" alt="img" id="img' + i + '">'
    inputContainer.innerHTML += `
    <h4 id="tit${i}">${slides[i].title}</h4>
    <p id="txt${i}">${slides[i].text}</p>
    <img src="${slides[i].image}" alt="img" id="img${i}"></img>
    `
    document.getElementById("tit" + i).style.display = "none";
    document.getElementById("txt" + i).style.display = "none";
    document.getElementById("img" + i).style.display = "none";
}

let active = 0
console.log (active)

document.getElementById("tit" + active).style.display = "block";
document.getElementById("txt" + active).style.display = "block";
document.getElementById("img" + active).style.display = "block";

inputContainer.innerHTML += '<i id=indietro class="fa-solid fa-chevron-left"></i>'
inputContainer.innerHTML += '<i id=avanti class="fa-solid fa-chevron-right"></i>'

const indietro = document.getElementById('indietro')
const avanti = document.getElementById('avanti')

avanti.addEventListener('click', function () {
    document.getElementById("tit" + active).style.display = "none"
    document.getElementById("txt" + active).style.display = "none"
    document.getElementById("img" + active).style.display = "none"

    if (active == 4) { active = -1 }
    document.getElementById("tit" + ++active).style.display = "block"
    document.getElementById("txt" + active).style.display = "block"
    document.getElementById("img" + active).style.display = "block"

    console.log (active)
});

indietro.addEventListener('click', function () {
    document.getElementById("tit" + active).style.display = "none"
    document.getElementById("txt" + active).style.display = "none"
    document.getElementById("img" + active).style.display = "none"
    if (active == 0) { active = 5 }
    document.getElementById("tit" + --active).style.display = "block"
    document.getElementById("txt" + active).style.display = "block"
    document.getElementById("img" + active).style.display = "block"

    console.log (active)
});
