//array fornito
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel\\'s Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos."
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
    }
];
//prendo i container

const container = document.getElementById('container');
const containerSchede = document.getElementById('container-schede');
const containerCarusel = document.getElementById('carusel');

// ciclo gli oggetti nella pagina

images.forEach(element => {

    //popolo schede
    const scheda =
        `
        <div class="scheda">
            <div class="immagine">
                <img src="${element.image}" alt="img">
            </div>
            <div class="txt">
                <h5>${element.title}</h5>
                <p>${element.text}</p>
            </div>
        </div>
        `;
    containerSchede.innerHTML += scheda;

    //popolo carusel
    const caruselItem =
        `
        <div class="item">
            <img src="${element.image}" alt="carusel">
            <div class="cover"></div>
        </div>
        `;
    containerCarusel.innerHTML += caruselItem;
    
});

//assegno classi active

const activeScheda = document.querySelector('.scheda:first-child')
activeScheda.classList.add('active');

const activeItem = document.querySelector('.item .cover')
activeItem.classList.add('off');

const selectedItem = document.querySelector('.item img')
selectedItem.classList.add('selected');

//funzionamento tasti

//prendo la freccie
const frecciaGiu = document.querySelector('.fa-circle-arrow-down');
const frecciaSu = document.querySelector('.fa-circle-arrow-up');

//prendo le immagini
const arrayItemSchede = document.querySelectorAll('#container-schede .scheda');
const arrayCaruselImg = document.querySelectorAll('#carusel .item img');
const arrayCaruselCover = document.querySelectorAll('#carusel .item .cover');

console.log('schede', arrayItemSchede);
console.log('img', arrayCaruselImg);
console.log('schede', arrayCaruselCover);

//funzionamento
let immagineAttiva = 0;

//click su
frecciaGiu.addEventListener('click', vaiGiu);
 
//click su
frecciaSu.addEventListener('click', vaiSu);

//funzioni
//freccia giu
function vaiGiu() {
    if (immagineAttiva < (arrayItemSchede.length - 1)) {

        //tolgo active
        arrayItemSchede[immagineAttiva].classList.remove('active');
        arrayCaruselImg[immagineAttiva].classList.remove('selected');
        arrayCaruselCover[immagineAttiva].classList.remove('off');

        //passo al successivo
        immagineAttiva++;

        //aggiungo active al nuovo elemento
        arrayItemSchede[immagineAttiva].classList.add('active');
        arrayCaruselImg[immagineAttiva].classList.add('selected');
        arrayCaruselCover[immagineAttiva].classList.add('off');

    }else if(immagineAttiva === (arrayItemSchede.length - 1)){

        //tolgo active
        arrayItemSchede[immagineAttiva].classList.remove('active');
        arrayCaruselImg[immagineAttiva].classList.remove('selected');
        arrayCaruselCover[immagineAttiva].classList.remove('off');

        //torno alla prima
        immagineAttiva = 0;

        //aggiungo active
        arrayItemSchede[immagineAttiva].classList.add('active');
        arrayCaruselImg[immagineAttiva].classList.add('selected');
        arrayCaruselCover[immagineAttiva].classList.add('off');
        
    }
};
//freccia su
function vaiSu() {
    if (immagineAttiva > 0) {

        //tolgo active
        arrayItemSchede[immagineAttiva].classList.remove('active');
        arrayCaruselImg[immagineAttiva].classList.remove('selected');
        arrayCaruselCover[immagineAttiva].classList.remove('off');

        //passo al precedente
        immagineAttiva--;

        //aggiungo active al nuovo elemento
        arrayItemSchede[immagineAttiva].classList.add('active');
        arrayCaruselImg[immagineAttiva].classList.add('selected');
        arrayCaruselCover[immagineAttiva].classList.add('off');

    }else if(immagineAttiva === 0){

        //tolgo active
        arrayItemSchede[immagineAttiva].classList.remove('active');
        arrayCaruselImg[immagineAttiva].classList.remove('selected');
        arrayCaruselCover[immagineAttiva].classList.remove('off');

        //torno alla prima
        immagineAttiva = arrayItemSchede.length - 1;

        //aggiungo active
        arrayItemSchede[immagineAttiva].classList.add('active');
        arrayCaruselImg[immagineAttiva].classList.add('selected');
        arrayCaruselCover[immagineAttiva].classList.add('off');
    }
};
