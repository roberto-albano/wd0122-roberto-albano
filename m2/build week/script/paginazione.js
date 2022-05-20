class Paginazione {
    constructor(items = [], pageSize = 10) {
        this.items = items
        this.pageSize = Math.floor(pageSize)
        this.totalPages = Math.ceil(items.length / this.pageSize) || 1
        this.currentPage = 1

        const primo = document.querySelector('#primo')
        primo.addEventListener('click', function(){
            p.firstPage()
        })

        const ultimo = document.querySelector('#ultimo')
        ultimo.addEventListener('click', function(){
            p.lastPage()
        })

        // const precedente = document.querySelector('#precedente')
        // precedente.addEventListener('click', function(){
        //     p.prevPage()
        // })

        // const successivo = document.querySelector('#successivo')
        // successivo.addEventListener('click', function(){
        //     p.nextPage()
        // })

    }
    prevPage() {
        this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
        this.getVisibleItems()
    }

    nextPage() {
        this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
        this.getVisibleItems()
    }

    firstPage() {
        this.currentPage = 1
        this.getVisibleItems()
    }

    lastPage() {
        this.currentPage = this.totalPages
        this.getVisibleItems()
    }
    goToPage(page) {
        if (Math.sign(page) === -1) {
            this.currentPage = 1
            this.getVisibleItems()
        } else {
            this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
            this.getVisibleItems()
        }
    }
    getVisibleItems() {
        let start = this.currentPage * this.pageSize - this.pageSize
        let end = this.currentPage * this.pageSize
        let lista = this.items.slice(start, end)
        let wrapper = document.querySelector('#utenti')
        wrapper.innerHTML = ""
        lista.forEach((item) => {
            wrapper.append(item)
        })
        
    }
    
}

let tabellaArray = []
let p = new Paginazione(tabellaArray, 5)