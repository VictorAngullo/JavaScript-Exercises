class Jedi {
    constructor(health, strength) {
        this._health = health
        this._strength = strength
    }
    attack() {
        return this._strength
    }
    receiveDamage(damage) {
        this._health = this._health - damage
    }
};

class Sith extends Jedi {
    constructor(name, health, strength)
    {
        super(health, strength)
        this._name = name
    }
    receiveDamage(damage) {
        this._health = this._health - damage
        if (this._health < 0) {
            return `${this._name} ha muerto en acto de combate`
        } else {
            return `${this._name} ha recibido ${damage} puntos de daño`
        }

    }
    battelCry() {
        return "El lado oscuro manda!"
    }
};

class Imperial extends Jedi {

    receiveDamage(damage) {
        this._health = this._health - damage
        if (this._health < 0) {
            return `Un Imperial ha muerto en acto de combate`
        } else {
            return `Un Imperial ha recibido ${damage} puntos de daño`
        }
    }
};

class War {
    constructor(){
        this.sithArmy = []
        this.imperialArmy = []
    }
    
    addSith(Sith) {
        this.sithArmy.push(Sith)
    }
    addImperial(Imperial) {
        this.imperialArmy.push(Imperial)
    }
    SithAttack() {
        if (this.imperialArmy.length > 0 && this.sithArmy.length > 0) {
            const randomNumber = (max) => Math.floor(Math.random() * (max - 0 + 1) + 0)
            let randomSith = this.sithArmy[randomNumber(this.sithArmy.length)]
            let randomImperial = this.imperialArmy[randomNumber(this.imperialArmy.length)]
            
            randomImperial.receiveDamage(randomSith.attack())
            this.imperialArmy = this.imperialArmy.filter(imperial => imperial.health > 0)
    
            return toReturn
        }
        console.log('No me queda a quién matar!!!')
    }
    ImperialAttack() {
        if (this.imperialArmy.length > 0 && this.sithArmy.length > 0) {
            const randomNumber = (max) => Math.floor(Math.random() * (max - 0 + 1) + 0)
            let randomSith = this.sithArmy[randomNumber(this.sithArmy.length)]
            let randomImperial = this.imperialArmy[randomNumber(this.imperialArmy.length)]
            
            randomSith.receiveDamage(randomImperial.attack())
            this.sithArmy = this.sithArmy.filter(sith => sith.health > 0)
            
            return toReturn
        }
        console.log('No me queda a quién matar!!!')
    }
    showStatus() {
        if (this.imperialArmy.length <= 0) {
            return "Siths have won the war of the century!"
        } else if (this.sithArmy.length <= 0) {
            return "Imperials have fought for their lives and survived another day..."
        } else {
            return "Siths and Imperials are still in the thick of battle."
        }
    }
};