// CHECK 
console.log ('JS OK');

//! SCALETTA 
/*
1- RECUPERO ELEMENTI
2- VARIABILE CHE CONOSCO
3 GRAZIE AL METODO MAP CREO UN NUOVO ARRAY CON GLI ELEMENTI CHE HO GIA'
4- CREO I TITOLI DELLA TABELLA
5- GRAZIE AL METODO FOREACH CREO PER OGNI ELEMENTO UNA TD PER QUANTI SONO INDICI
6- STAMPO
 */

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

   







