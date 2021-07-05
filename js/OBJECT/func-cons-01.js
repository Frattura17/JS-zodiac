//Funcion constructora de objetos
function funcionConstruc() {

function Pokemon(name, type, powerLevel, attacks) {
    this.name = name;
    this.type = type;
    this.powerLevel = powerLevel;
    this.attacks = attacks;
    this.sayHello = function() {
        let dmg = this.powerLevel *1000;
        dmg += 800;
        return console.log(`Hola soy el pokemon ${this.name}, mi tipo de ataque es ${dmg} DMG`)
    }
}

let pokemon1 = new Pokemon('Pikachu', 'Lighting', 55, 'Thunder');
let pokemon2 = new Pokemon('Charmander', 'Fire', 149, 'Fire');
let pokemon3 = new Pokemon('Bastroise', 'Lighting', 55, 'Thunder');
let pokemon4 = new Pokemon('Bulbasur', 'Lighting', 55, 'Thunder');
let pokemon5 = new Pokemon('Pikachu', 'Lighting', 50, 'Thunder');
let pokemon6 = new Pokemon('Pikachu', 'Lighting', 70, 'Thunder');
let pokemon7 = new Pokemon('Raichu', 'Lighting', 175, 'Thunder-light');


console.log(pokemon1);
console.log(pokemon2);
console.log(pokemon3);
console.log(pokemon4);
console.log(pokemon5);
console.log(pokemon6);
console.log(pokemon2.sayHello());
console.log(pokemon6.sayHello());
console.log(pokemon4.sayHello());
console.log(pokemon7.sayHello());

}