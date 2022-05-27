interface Smartphone {

    credito:number;
    costo:number;
    numerochiamate:number;
    ricarica:number;
    getRicarica(a:number):number;
    getNumeroChiamate(a:number):void;
}

class PrimoUtente implements Smartphone{
        credito:number = 20;
        costo: number = 1;
        numerochiamate: number;
        ricarica: number;
        


        constructor(){
            this.numerochiamate = 0;
            this.ricarica = 0;
            this.credito = 0
        }

        getRicarica(a: number): number {
            this.credito = this.credito + a
            return this.credito
        }
        getNumeroChiamate(a: number): void {
            this.credito = this.credito - (this.costo*a)
            this.numerochiamate = this.numerochiamate + a;
            
        };


}

class SecondoUtente implements Smartphone{
    credito:number = 20;
    costo: number = 1;
    numerochiamate: number;
    ricarica: number;
    


    constructor(){
        this.numerochiamate = 0;
        this.ricarica = 0;
        this.credito = 0
    }

    getRicarica(a: number): number {
        this.credito = this.credito + a
        return this.credito
    }
    getNumeroChiamate(a2: number): void {
        this.credito = this.credito - (this.costo*a2)
        this.numerochiamate = this.numerochiamate + a2;
        
    };


}

class TerzoUtente implements Smartphone{
    credito:number = 20;
    costo: number = 1;
    numerochiamate: number;
    ricarica: number;
    


    constructor(){
        this.numerochiamate = 0;
        this.ricarica = 0;
        this.credito = 0
    }

    getRicarica(a: number): number {
        this.credito = this.credito + a
        return this.credito
    }
    getNumeroChiamate(a: number): void {
        this.credito = this.credito - (this.costo*a)
        this.numerochiamate = this.numerochiamate + a;
        
    };


}

let test = new PrimoUtente()
console.log(test);
test.getNumeroChiamate(5)
test.getRicarica(10)

let test2 = new SecondoUtente()
console.log(test2)
test.getNumeroChiamate(2)
test.getRicarica(5)

let test3 = new TerzoUtente()
console.log(test3)
test.getNumeroChiamate(10)
test.getRicarica(6)
