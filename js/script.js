// CHECK 
console.log ('JS OK');

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
// PRENDO IL METODO MAP PER CREARE UN NUOVO ARRAY CON LE INFORMAZIONI GIA' DISPONIBILI
const arraysList = guests.map((element, index) => {

    // CREO UNA LISTA OGGETTI
    return guestsList = 
    
        {
            table: tableName,
            name: element,
            place: index + 1

        }


});

// CREO TABELLA 
let list =
 `
<tr>
<th scope="col">NOME TAVOLO</th>
<th scope="col">NOME</th>
<th scope="col">NUMERO TAVOLO</th>
</tr>
`
// CREO  SEZIONE PER OGNI ELEMENTO 
arraysList.forEach((element,index) => {

    list +=  `
    <tr>
        <td>${tableName}</td>
        <td>${element.name}</td>
        <td>${index + 1}</td>
    ` 

    list +=
   `
   </tr>
   `
});

// STAMPO 
console.log(arraysList);
divElement.innerHTML = list

*/

//! SCALETTA SANCK 2
/*
1- PRENDO ELEMENTI
2- CREO ARRAY CON AL SUO INTERNO 7 OGGETTI
3- USO IL METODO FILTER
4- USO IL METODO MAP
5- STAMPO
*/

/*
// CON IL METODO FILTER PRENDO GLI ELEMENTI CHE VOGLIO 
const voteSuperior70 = arrayStudents.filter((element) => {
    if (element.grades > 70) {
        return true;
    } 

    return false;
})


const voteId120 = arrayStudents.filter((element) => {
    if (element.grades > 70 && element.id < 120 ) {
        return true;
    } 

    return false;
})

console.log(voteSuperior70);
console.log(voteId120);


// CON IL METODO MAP CREO UN ARRAY IN CUI CI METTO I NOMI IN MAIUSCOLO
const nameVoto = voteSuperior70.map((element) => {

    return element.name.toUpperCase()

}) 

const nameId120 = voteId120.map((element) => {

    return element.name.toUpperCase()

}) 

// STAMPO
console.log('Persone con voto sopra il 70: ' + nameVoto);
console.log('Persone con voto sopra il 70 e id superiore a 120: ' + nameId120);

*/

//!SCALETTA SNACK 3
/*
1- RECUPERO ELEMENTO
2- CREO ARRAY CON 5 OGETTI
3- CON IL METODO SOME TROVO L'ELEMENTO CHE MI SERVE
*/

/*
// GIRO SUL L'ARRAY PER TROVARE LA BICI CON IL PESO PIU' BASSO
const biciclesLessHeavy = arrayBicycles.forEach(({name,weight})=> { 
    
// PRENDO ELEMENTO CHE HA COME PESO 
if(weight <= 20) {
    console.log('La bicicletta con peso più basso è: ' + name)
    strongParagraphElement.innerText = name
};
      
});
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

// GENERO NUMERI RANDOM 
const randomNumber = arrayTeams.forEach ((element) => {

    const randomPoint = Math.floor(Math.random()* (maxPoint + 1 - min) ) + min

    const randomFouls = Math.floor(Math.random()* (maxFouls + 1 - min) ) + min

    element.points_made = randomPoint
    element.fouls_immediately = randomFouls

});

// CREO TABELLA 
let list =
 `
<tr>
<th scope="col">NOME</th>
<th scope="col">PUNTI FATTI</th>
<th scope="col">FALLI SUBITI</th>
</tr>
`
// CREO  SEZIONE PER OGNI ELEMENTO 
arrayTeams.forEach((element) => {

    list +=  `
    <tr>
        <td>${element.name}</td>
        <td>${element.points_made}</td>
        <td>${element.fouls_immediately}</td>
    ` 

    list +=
   `
   </tr>
   `
});


divElement.innerHTML = list
console.log(arrayTeams)


// CREO NUOVO ARRAY SOLO CON NOME E PUNTI
const newArray = arrayTeams.map (({name, points_made}) => { return {name,points_made}});



console.log(newArray)




