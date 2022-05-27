"use strict";
class PrimoUtente {
    constructor() {
        this.credito = 20;
        this.costo = 1;
        this.numerochiamate = 0;
        this.ricarica = 0;
        this.credito = 0;
    }
    getRicarica(a) {
        this.credito = this.credito + a;
        return this.credito;
    }
    getNumeroChiamate(a) {
        this.credito = this.credito - (this.costo * a);
        this.numerochiamate = this.numerochiamate + a;
    }
    ;
}
class SecondoUtente {
    constructor() {
        this.credito = 20;
        this.costo = 1;
        this.numerochiamate = 0;
        this.ricarica = 0;
        this.credito = 0;
    }
    getRicarica(a) {
        this.credito = this.credito + a;
        return this.credito;
    }
    getNumeroChiamate(a2) {
        this.credito = this.credito - (this.costo * a2);
        this.numerochiamate = this.numerochiamate + a2;
    }
    ;
}
class TerzoUtente {
    constructor() {
        this.credito = 20;
        this.costo = 1;
        this.numerochiamate = 0;
        this.ricarica = 0;
        this.credito = 0;
    }
    getRicarica(a) {
        this.credito = this.credito + a;
        return this.credito;
    }
    getNumeroChiamate(a) {
        this.credito = this.credito - (this.costo * a);
        this.numerochiamate = this.numerochiamate + a;
    }
    ;
}
let test = new PrimoUtente();
console.log(test);
test.getNumeroChiamate(5);
test.getRicarica(10);
let test2 = new SecondoUtente();
console.log(test2);
test.getNumeroChiamate(2);
test.getRicarica(5);
let test3 = new TerzoUtente();
console.log(test3);
test.getNumeroChiamate(10);
test.getRicarica(6);
