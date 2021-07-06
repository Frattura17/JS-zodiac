function clases(){
class Pokemon {
    constructor(name, type, power, attacks, price){
        this.nombre = name;
        this.type = type;
        this.power = power;
        this.attacks = attacks;
        this.price = price
    }
    showAttackPower() {
        return `El poder de ataque de ${this.nombre} es de ${this.power * 1000} DMG`;
    }
    updatedPrice(dolarValue) {
        return Math.floor((this.price * dolarValue) * 1.21)
    }
}


let pokemon1 = new Pokemon('Pikachu', 'Electric', 105, ['Thunder attack', 'Embestida', 'Cortocortito'], 15);


console.log(pokemon1.showAttackPower());
console.log('$ ', pokemon1.updatedPrice(150));
}



