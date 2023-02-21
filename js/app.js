const { createApp } = Vue

createApp({
	data() {

		return {
			slides: [
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
			],
			slideIndex: 0,
		}
	},

	methods: {
		avanti() {

			if (this.slideIndex == 4) {
                this.slideIndex = -1
            }

            this.slideIndex++
            console.log(this.slideIndex)
        },   

		indietro() {

			if (this.slideIndex == 0) {
                this.slideIndex = 5
            }

            this.slideIndex--
            console.log(this.slideIndex)
		},
	},

}).mount('#app')
