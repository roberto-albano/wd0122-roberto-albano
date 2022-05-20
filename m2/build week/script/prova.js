let tabella = document.querySelector('#utenti')

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(res => {

    for(let utente of res){

        let tr = document.createElement('tr')
        tr.classList.add('row')

        let tdId = document.createElement('td')
        tdId.classList.add('col-1')
        tdId.innerHTML = utente.id

        let tdName = document.createElement('td')
        tdName.classList.add('col-2')
        tdName.innerHTML = utente.name

        let tdUser = document.createElement('td')
        tdUser.classList.add('col-2')
        tdUser.innerHTML = utente.username

        let tdMail = document.createElement('td')
        tdMail.classList.add('col-2')
        tdMail.innerHTML = utente.email

        let tdMostra = document.createElement('td')
        tdMostra.classList.add('col-1')
        tdMostra.innerHTML = `<button class="btn btn-primary">Mostra</button>`
        
        let tdModifica = document.createElement('td')
        tdModifica.classList.add('col-1')
        tdModifica.innerHTML = `<button class="btn btn-warning">Modifica</button>`
        
        let tdCancella = document.createElement('td')
        tdCancella.classList.add('col-1')
        tdCancella.innerHTML = `<button class="btn btn-danger">Elimina</button>`

        // FUNZIONE PER MOSTRA

        tdMostra.addEventListener('click', function(){
            let form = document.querySelector('#Form')
            let card = document.createElement('div')
            card.classList.add('card', 'text-dark', 'bg-light', 'mb-3')
            form.prepend(card)
        
            let cardHeader = document.createElement('div')
            cardHeader.classList.add('card-header')
            cardHeader.innerHTML = utente.name
            
            let cardBody = document.createElement('div')
            cardBody.classList.add('card-body')
            
            let cardText = document.createElement('p')
            cardText.classList.add('card-text')
            cardText.innerHTML = 'Username: ' + utente.username + '<br>' + 'Email: ' + utente.email + '<br>' + 'Address: ' + utente.address.street + ', '+ utente.address.suite + ', ' + utente.address.city 
            cardBody.append(cardText)
        
            
            card.append(cardHeader, cardBody)
        })
       
        // FUNZIONE PER CANCELLARE
       
        tdCancella.addEventListener('click', function(){
            
            fetch('https://jsonplaceholder.typicode.com/users/'+ utente.id,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            
            })
            
            .then(response => {
                console.log(response);

                if (response.ok) {
                    Swal.fire({
                        title: `Sei sicuro di voler eliminare l'utente ${utente.id}?`,
                        icon : 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                    })
                }
            })
        })
            
        // FUNZIONE PER MODIFICA

        let username1 = document.getElementById('username1')
        let nome1 = document.getElementById('name1')
        let email1 = document.getElementById('email1')

        let data2 = {
            name: nome1.value,
            username: username1.value,
            email: email1.value
        }
        
        tdModifica.addEventListener('click', function(e){

            e.preventDefault()

            username1.value = utente.username
            nome1.value = utente.name
            email1.value = utente.email

            //ULTIMO MOMENTO IN CUI ABBIAMO ACCESSO ALLA VARIABILE UTENTE.ID

            fetch('https://jsonplaceholder.typicode.com/users/'+ utente.id,{
                method: 'PATCH',
                body: JSON.stringify(data2),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
            .then(function(res){
                console.log(res)
            })
                   
        })
        
        tr.append(tdId,tdName,tdUser,tdMail,tdMostra,tdModifica,tdCancella)
        tabella.append(tr)
    
    }
    
})

// FUNZIONI PER AGGIUNGI

let tdAggiungi = document.querySelector('.btn-success')
tdAggiungi.addEventListener('click', function(e){
    
    e.preventDefault()

    let username = document.getElementById('username')
    let nome = document.getElementById('name')
    let email = document.getElementById('email')
    
    let data = {
        name: nome.value,
        username: username.value,
        email: email.value
    }

    fetch('https://jsonplaceholder.typicode.com/users',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    .then(response => {
        console.log(response);
        console.log(data)
        if (response.ok) {
            Swal.fire({
                title: `è stato creato il nuovo utente, <br> Name: "${data.name}" <br> Username: "${data.username}" <br> Email: "${data.email}"`,
                icon : 'success',
            })
        }
    })

    
})

// if (document.getElementById('username').value == "" ) {
//     document.getElementById('formsalva').style.display = 'none'
// }
// else {
//     document.getElementById('formsalva').style.display = 'block'
// }