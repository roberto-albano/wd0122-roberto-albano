//NEW DATE//

const d = new Date();
document.getElementById("demo").innerHTML = d;

// Anno - mese - giorno //

const e = new Date(91,8,12);
document.getElementById("demo2").innerHTML = e;

// Formattazione in formato europeo //

const f = new Date(Date.UTC(2022, 3 , 26 , 13 , 27));
document.getElementById("demo3").innerHTML = f;
