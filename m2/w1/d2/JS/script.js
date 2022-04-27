function iniziaShopping() {

    let cash = 1000;
    let spesa = 0;

    while (cash > 0) {

        let prezzi = Math.floor(Math.random() * 100);

        if (prezzi <= cash) {
            spesa += 1;
            cash -= prezzi;

            document.getElementById('mio_budget').innerHTML += '<p> Hai speso: € ' + prezzi + '<br>Cash: € ' + cash + '<p>';
        }

        if (cash < 200) {
            document.getElementById('messaggio2').innerHTML = 'Fai attenzione stai spendendo troppo, è ora di tornare a casa, se ti rimangono i soldi!';
            break;
        }

    }

    document.getElementById('mio_budget').innerHTML += '<p>Hai ottenuto: ' + spesa + ' oggetti </p>';

}