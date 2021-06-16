var numbers = []

var number1 = parseInt(prompt('Inserisci un numero!'))
var number2 = parseInt(prompt('Inserisci un numero!'))
var number3 = parseInt(prompt('Inserisci un numero!'))

numbers.push(number1);
numbers.push(number2);
numbers.push(number3);

var result = 0;

for (n = 0; n < numbers.length; n++) {
    result += numbers[n]
}

var average = (result/n).toFixed(2);
console.log('La media è: ' + average);

// --------- 3b --------- //

var short = document.querySelector('.output');

var score = 0;
var players = [

    {
        Nome: 'Andrea',
        Cognome: 'Bondani',
        Anno: 1998,
        Score: 45
    },

    {
        Nome: 'Ottavio',
        Cognome: 'Fogliata',
        Anno: 1920,
        Score: 140
    },

    {
        Nome: 'Adina',
        Cognome: 'Pop',
        Anno: 2000,
        Score: 40
    }
]

for (i = 0; i < players.length; i++) {
    score += players[i].Score;

    for (var key in players[i]) {
        short.innerHTML += key + ': ' + players[i][key] + '<br><br>'; 
    }
    short.innerHTML += '__________________<br><br>';
}

var avgScore = (score/i).toFixed(2);
short.innerHTML += 'Il punteggio medio è: ' + avgScore;

