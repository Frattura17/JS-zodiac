
console.log('Ejercicio de dados');
class Player {
    constructor(name, lastname, score, victories) {
        this.name = name;
        this.lastname = lastname;
        this.score = score;
        this.victories = victories
    }
    dropDices(dices, faces) {
        dices = dices;
        
        let dado1 = parseInt(Math.random() * faces) + 1
        let dado2 = parseInt(Math.random() * faces) + 1
        this.score += dado1 + dado2
        return `El resultado del jugador ${this.name} es igual a ${dado1 + dado2}`;
        
    }
}

class Game {
    constructor(faces, dices, rounds) {
        this.faces = faces;
        this.dices = dices;
        this.rounds = rounds;
    }
}

let players = [];
let player1 = new Player('Carla', 'Perez', 0, 0);
let player2 = new Player('Jose', 'Benitez', 0, 0);
let player3 = new Player('Ricardo','Fort', 0, 0);
let player4 = new Player('Sofia', 'Ayala', 0, 0);
players.push(player1);
players.push(player2);
players.push(player3);
players.push(player4);

console.log('PLAYER', players)
//instancia del juego
let game = new Game(6, 2, 20);
console.log(game);

for(let i=0; i<players.length; i++) {
    console.log(players[i].dropDices(game.dices, game.faces));
}

console.log(player1);
console.log(players)





// let resultados = [];
// let jugadores = ["Amarillo" , "Verde" , "Azul" , "Rojo" , "Marron"]
// let maximo = 0;
// let ganador;

// for(let i = 0; i < 5; i++){

//     for(let j = 0; j < jugadores.length; j++){

//         if(resultados[j] == undefined){
//             resultados[j] = 0; }

//         let dadoUno = (Math.trunc(Math.random() * 6) + 1)
//         let dadoDos = (Math.trunc(Math.random() * 6) + 1)
//         console.log(jugadores[j], 'Tiro Dado Uno: ' + dadoUno)
//         console.log(jugadores[j], 'Tiro Dado Dos: ' + dadoDos)
        
//         resultados[j] += dadoUno + dadoDos;
//         console.log('Resultados: ', resultados[j])
//     }
// }
// for(let i = 0; i < jugadores.length; i++){
//     console.log('El jugador', jugadores[i], 'obtuvo', resultados[i], 'puntos')
//     if(maximo < resultados[i]){
//         maximo = resultados[i]
//         ganador = jugadores[i]
//     }
// }
// console.log('El Ganador es', ganador, 'con un puntaje de', maximo)