//struttura var//
var something = 'prova global scope'

function logSomething(){

    var something = 'prova function scope';
}
console.log(something)

// --> "Prova global scope"

//struttura let//
let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hi"

//struttura const//

const gree = {
    message: "say Hi",
    times: 4
}
console.log(gree);

//Differenze tra var,let e const//

var a = 10
function f(){
    console.log(a)
}

f();
console.log(a)

//L'ambito della variabile 'a' è globale e può essere accessibile ovunque nel programma.

//Se venisse inserita all'interno di una funzione, perderebbe il suo scopo poichè non è block scoped: come riportato qui sotto " a " non sarebbe definita

function f() {

		var a = 10;
		console.log(a)
	}
	f();

	console.log(a);

//Let è una versione migliorata della keyword var ed è block scoped ovvero sarà accessibile solo all'interno del ({block})

let c = 10;
    function f() {
        let b = 9
        console.log(b);
        console.log(a);
    }
    f();

//Const ha le stesse proprietà di Let tranne per il fatto che l'utente non può aggiornarla una volta dichiarata.

const d = 10;
    function f() {
        e = 9
        console.log(a)
    }
    f();

//Ovviamente in questo esercizio di prova ho inserito il tutto in unico script quindi andrà in conflitto poichè alcuni valori utilizzati per l'esempio sono uguali    

console.log(2 + 2);


console.log(2 + true);


console.log('ciccio ' + 'bello');


console.log(2001 + ': A Space Odyssey');

//Qui sopra esempi d'operazioni aritmetiche di addizione e boolean