var numeroCasuale:any
var scarto1:any
var scarto2:any
var a = true;
	while(a){
		for(var i=0; i<90; i++){
			numeroCasuale = Math.floor(Math.random()*99 + 1);
		}
		alert("Il programma prevede due ipotetici giocatori, che devono indovinare un numero compreso tra 1 e 100 (zero escluso), vince chi dei due giocatori ha azzeccato il numero casuale, e in caso contrario quale dei due si è avvicinato di più al numero.");
		var giocatore1 = prompt("Giocatore1, azzarda un numero:");
		var giocatore2 = prompt("Giocatore2, azzarda un numero:");
		if(giocatore1 == numeroCasuale){
			alert("Giocatore1 ci hai azzeccato!!");
		}
		else{
			scarto1 = Math.abs(numeroCasuale - giocatore1);
		}
		if(giocatore2 == numeroCasuale){
			alert("Giocatore2 ci hai azzeccato!!");
		}
		else{
			scarto2 = Math.abs(numeroCasuale - giocatore2);
		}
		if(scarto1 < scarto2){
			alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più! il numero era " + numeroCasuale);
		}
		else{
			alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più! il numero era " + numeroCasuale);
		}
		a = confirm("Vuoi giocare di nuovo?");
	}








    

