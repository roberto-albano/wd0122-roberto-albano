class p1 {
    constructor(name, età) {
        this.name = name;
        this.età = età;
    }
    hi(){
        console.log(this.name, 'è più vecchio di');
    }
    hi2(){
        console.log(this.name, 'è più giovane di');
    }
}

let persona = new p1("Mario" , "30");
console.log(persona);

class p2 {
    constructor(name, età) {
        this.name = name;
        this.età = età;
    }}
let persona2 = new p2("Dario" , "27");
console.log(persona2);

class p3 {
    constructor(name, età) {
        this.name = name;
        this.età = età;
    }}
let persona3 = new p3("Gianni" , "35");
console.log(persona3);


persona.hi();
persona.hi2();


