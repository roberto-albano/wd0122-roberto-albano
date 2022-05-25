class SonAccount{
    balance:number
    constructor(s:number){
        this.balance = s
    }
    deposit(s:number) {
        this.balance += s
        return s
    }
    preleva(s:number) {
        this.balance -= s
        return s
    }
    getBalance(){
        return this.balance
    }
}
console.log('------------son account----------------- ' + '\n');
// set della proprietÃ  al costruttore
let son = new SonAccount(0)
let son1 = new SonAccount(500)
console.log(son.getBalance());
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + son.deposit(1000));
console.log('withdraw:-' + son.preleva(500));
console.log('withdraw:-' + son.preleva(400));
console.log('totalBalance:' + son.getBalance());
console.log('deposit:+' + son1.deposit(1000));
console.log('withdraw:-' + son1.preleva(500));
console.log('withdraw:-' + son1.preleva(400));
console.log('totalBalance:' + son1.getBalance());

class MotherAccount extends SonAccount {
    private interesse(s:number) {
        return s * 0.1
    }
    preleva(s:number) {
        this.balance -= s + this.interesse(s)
        return s
    }
}
let mother = new MotherAccount(0)
console.log('--------------mother account----------------------------------' + '\n');
console.log(mother);
// stampo i versamenti-prelievi fatti ed il saldo attuale del conto
console.log('deposit:+' + mother.deposit(1000));
console.log('withdraw:-' + mother.preleva(500));
console.log('withdraw:-' + mother.preleva(400));
console.log('totalBalance:' + mother.getBalance());