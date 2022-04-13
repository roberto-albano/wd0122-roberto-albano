// Trasforma Età //

function getAge(dateString) {
    var ageInMilliseconds = new Date() - new Date(dateString);
    return Math.floor(ageInMilliseconds/1000/60/60/24/365); // convert to years
 }
 console.log(getAge("1991-09-12"));

// Funzione freccia //
 
 let x = (x, y) => x * y;
 
 console.log(x);

// Funzione all'interno di una funzione //

    function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  a = addSquares(2, 3); // 13
  b = addSquares(3, 4); // 25
  c = addSquares(4, 5); // 41

  console.log(a,b,c)

// Operatori di comparazione //

const d = 5, e = 2, f = 'Ciao';

console.log(d == 5);     // True
console.log(e == '2');   // Vero
console.log(f == 'Grazie!');  // Falso
