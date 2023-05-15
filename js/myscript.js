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



//array di oggetti
const persone = [
    {
        nome: 'Pippo',
        cognome: 'Baudo',
        eta: 68
    },
    {
        nome: 'Maria',
        cognome: 'Massimi',
        eta: 12
    },
    {
        nome: 'Felice',
        cognome: 'Pistoletta',
        eta: 77
    },
    {
        nome: 'Massimo',
        cognome: 'Massimi',
        eta: 2
    },
    {
        nome: 'Pluto',
        cognome: 'Bello',
        eta: 5
    },
    {
        nome: 'Pino',
        cognome: 'Gatto',
        eta: 44
    },
    {
        nome: 'Franco',
        cognome: 'Bollo',
        eta: 14
    },
    {
        nome: 'Remo',
        cognome: 'Labarca',
        eta: 42
    },
    {
        nome: 'Anna',
        cognome: 'Cocca',
        eta: 18
    },
    {
        nome: 'Giacomo',
        cognome: 'Bianchi',
        eta: 8
    }

 
]

//aggiungo all'array

//con patente
const conPatente = persone.map((persona) => {
    if (persona.eta < 18) {
        persona.patente = 'Minorenne, non può guidare';
    }else{
        persona.patente = 'Maggiorenne, può guidare';
    }
    return persona;
});
console.log('Con Patente: ', conPatente);

//patenteFrase
const patenteFrase = persone.map((persona) => {
    const nome = persona.nome + ' ' + persona.cognome;
    let patente = ' minorenne, non può guidare';
    if (persona.eta >= 18) {
        patente = ' maggiorenne, può guidare';
    }
    return nome + patente;
    
});
console.log('Patente frase: ', patenteFrase);
