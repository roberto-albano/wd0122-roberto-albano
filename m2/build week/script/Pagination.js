class Paginazione {
    constructor(items = [], pageSize = 10) {
        this.items = items
        this.pageSize = Math.floor(pageSize)
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1
        this.currentPage = 1
    }
    prevPage() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
        return this
    }

    nextPage() {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
        return this
    }

    firstPage() {
        this.currentPage = 1
        return this
    }

    lastPage() {
        this.currentPage = this.totalPages
        return this
    }
    goToPage(page) {
        if (Math.sign(page) === -1) {
            this.currentPage = 1
            return this
        } else {
            this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
            return this
        }
    }
    getVisibleItems() {
        let start = this.currentPage * this.pageSize - this.pageSize
        let end = this.currentPage * this.pageSize
        let lista = this.items.slice(start, end)
        let wrapper = document.querySelector('#wrapper')
        let strHtml = ''
        lista.forEach((item) => {
            strHtml += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td><td>${item.classe}</td></tr>`
        })
        wrapper.innerHTML = strHtml
    }
}



/*FINE CLASSE INIZIO SCRIPT*/

//Invece di passare un array di oggetti Utente (come questo sotto)
//passiamo un array di elementi HTML da inserire nella tabella tramite .append() <- (impostare questa cosa nella classe, adesso non fa append ma usa l'innerHTML)
const users = [{
        id: 1,
        nome: 'Luca',
        cognome: 'Nobili',
        classe: 'A'
    },
    {
        id: 2,
        nome: 'Pietro',
        cognome: 'Marinangeli',
        classe: 'A'
    },
    {
        id: 3,
        nome: 'Franco',
        cognome: 'Pinzari',
        classe: 'A'
    },
    {
        id: 4,
        nome: 'Giovanni',
        cognome: 'Simeone',
        classe: 'A'
    },
    {
        id: 5,
        nome: 'Antonio',
        cognome: 'Di carlo',
        classe: 'A'
    },
    {
        id: 6,
        nome: 'Francesco',
        cognome: 'Pinzari',
        classe: 'A'
    },
    {
        id: 7,
        nome: 'Fabio',
        cognome: 'Nobili',
        classe: 'A'
    },
    {
        id: 8,
        nome: 'Massimiliano',
        cognome: 'Greco',
        classe: 'A'
    }
]

//creazione della paginazione
p = new Paginazione(users, 2)
//visualizza gli elementi corretti -> tutti i p.getVisibleItems() di seguito sono eseguiti in corrispondenza a un altro metodo della classe, quindi si potrebbe includere la loro esecuzione in questi metodi per evitare di doverlo riscrivere ogni volta
p.getVisibleItems()

//Questi EventListener possono essere creati nel constructor per scrivere meno codice qua,
//questo però limiterebbe la scalabilità della Classe perche funzionarebbe solo in scenari con i 4 pulsanti.
//Definire invece metodi next(), prev(), first(), last() e goToPage(n) e assegnare la loro esecuzione a qualunque elemento dell'interfaccia lo rende funzionale in piu situazioni <- (es. posso anche non avere un tasto primo e ultimo e non avrò degli .addEventListener() eseguiti su undefined)
const primo = document.querySelector('#primo')
primo.addEventListener('click', function () {
    p.firstPage()
    p.getVisibleItems()
})

const ultimo = document.querySelector('#ultimo')
ultimo.addEventListener('click', function () {
    p.lastPage()
    p.getVisibleItems()
})

const precedente = document.querySelector('#precedente')
precedente.addEventListener('click', function () {
    p.prevPage()
    p.getVisibleItems()
})

const successivo = document.querySelector('#successivo')

successivo.addEventListener('click', function () {
    p.nextPage()
    p.getVisibleItems()
})


/*ESEMPIO PROPGETTO*/
fetch().then(res=>res.json()).then(
    res => {
        let arrTr = []
        for(users of res){
            let tr = document.createElement("tr");
            //impostazione di tr
            /*
            *
            *
            * 
            */
            //
            table.append(tr) //rimuovere questo -> NON POPOLIAMO LA TABELLA QUA
            //invece
            arrTr.push(tr) //creaiamo un array da far impaginare da Paginazione
        }
        let p = new Paginazione(arrTr, 4) //avviamo la paginazione e se necessario sotto impostiamo gli EventListener per i metodi di navigazione
    }
)