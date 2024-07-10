
/*
step

1. chiedi all'utente il suo nome
2. Chiedi il suo cognome
3. Chiedi il suo colore preferito
4. Inserisci la classe 
5. Visualizza il tutto nella pagina 

*/

// 1 step

const name = prompt('Scrivi il tuo Nome ');
console.log('Nome:', name);

// 2 step

const surname = prompt('Scrivi il tuo Cognome ');
console.log('Cognome:', surname);

// 3 step

const color = prompt('Scrivi il tuo colore preferito ');
console.log('Colore preferito:', color);

// 4 step

const classe = '130';
console.log('Classe:', classe);

// 5 step

document.getElementById ('user-info').innerHTML= name + surname + color + classe;