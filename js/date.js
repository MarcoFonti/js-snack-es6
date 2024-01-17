// CHECK 
console.log ('JS OK DATI');


//! SCALETTA SNACK 1
/*
1- RECUPERO ELEMENTI
2- VARIABILE CHE CONOSCO
3 GRAZIE AL METODO MAP CREO UN NUOVO ARRAY CON GLI ELEMENTI CHE HO GIA'
4- CREO I TITOLI DELLA TABELLA
5- GRAZIE AL METODO FOREACH CREO PER OGNI ELEMENTO UNA TD PER QUANTI SONO INDICI
6- STAMPO
 */

/*
// RECUPERO ELEMENTI
const divElement = document.querySelector('.my-table');

// TAVOLO
const tableName = 'Tavolo Vip';

// INIVITATI
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

*/

//! SCALETTA SNACK 2
/*
1- PRENDO ELEMENTI
2- CREO ARRAY CON AL SUO INTERNO 7 OGGETTI
3- USO IL METODO FILTER
4- USO IL METODO MAP
5- STAMPO
*/

/*
// RECUPERO ELEMENTI
const arrayStudents = 
[
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },

    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },

    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },

    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },

    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },

    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },

    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    },

];

console.log(arrayStudents);

*/

//!SCALETTA SNACK 3
/*
1- RECUPERO ELEMENTO
2- CREO ARRAY CON 5 OGETTI
3- CON IL METODO FOREACH PER TROVO L'ELEMENTO CHE MI SERVE
*/

/*
// RECUPERO ELEMENTO
const strongParagraphElement = document.getElementById('strong-paragraph')

// CREO ARRAY DI OGETTI
const arrayBicycles = 
[
    {
        name: 'Pinarello',
        weight: 65,
    },

    {
        name: 'Colnago',
        weight: 75,
    },

    {
        name: 'BMC',
        weight: 35,
    },

    {
        name: 'Specialized',
        weight: 100,
    },

    {
        name: 'Bianchi',
        weight: 20,
    },
];

*/

//!SCALETTA SNACK 4
/*
1- RECUPERO ELEMENTO
2- CREO ARRAY CON 5 OGETTI
3- NUMERI RANDOM
4- ASSEGNO NUMERI RANDOM AI PUNTI E HAI FALLI
5- CREO UN NUOVO ARRAY CON IL METODO MAP CON SOLO NOME E PUNTI
6- STAMPO
*/

// RECUPERO ELEMENTI
const divElement = document.querySelector('.my-table-snack');

// VARIABILI MAX E MIN
const maxPoint = 114
const min = 0
const maxFouls = 30

// ARRAY DI OGETTI
const arrayTeams = 
[
    {
        name: 'Napoli',
        points_made: 0,
        fouls_immediately: 0,

    },

    {
        name: 'Roma',
        points_made: 0,
        fouls_immediately: 0,
    },

    {
        name: 'Lazio',
        points_made: 0,
        fouls_immediately: 0,
    },

    {
        name: 'Bologna',
        points_made: 0,
        fouls_immediately: 0,
    },

    {
        name: 'Milan',
        points_made: 0,
        fouls_immediately: 0,
    },
]