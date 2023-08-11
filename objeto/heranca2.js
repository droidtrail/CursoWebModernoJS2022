// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'  //não faça isso em casa
const avo = { attr1: 'A' } //attr1
const pai = { __proto__: avo, attr2: 'B' } //attr2
const filho = { __proto__: pai, attr3: 'C' } //attr3
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super implementa o shadowing nos métodos
    }
}

Object.setPrototypeOf(ferrari, carro) //o objeto carro será sobreposto pelo obleto ferrari
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
