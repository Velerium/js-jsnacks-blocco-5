var palla = {
    nome: 'Palla',
    peso: 10
}

console.log(palla);

// --------- 1b --------- //

palla.peso = parseInt(prompt('Quanto vuoi che pesi la tua palla?'))

console.log(palla);

// --------- 1c --------- //

var giochi = [];

giochi.push(palla);

console.log(giochi);

// --------- 1d --------- //

var gameName = prompt('Inserisci il nome del tuo gioco!');
var gameWeight = parseInt(prompt('Inserisci il peso del tuo gioco!'));

giochi.push({
    nome: gameName,
    peso: gameWeight
})

for (i = 0; i < giochi.length; i++) {
    console.log(giochi[i].nome + ';', 'il suo peso:' + giochi[i].peso);
}