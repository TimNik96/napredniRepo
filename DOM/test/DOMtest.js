// -Na koje sve nacine mozemo da selektujemo DOM elemente?

// -Koja je razlika izmedju querySelector() i querySelectorAll()?

// -Koji element se dobija na sledeci nacin: (html za zadatak u DOMtest.html fajlu)
	// document.querySelector('.par').parentElement

// -Gde ce se dodati noviParagraf? Struktura html kao u proslom zadatku.

    // const div2 = document.querySelector('#div2')
    // const noviParagraf = document.createElement('p')
    // div2.children[1].appendChild(noviParagraf)

// -Sta ce se ispisati?

    // const lista = document.createElement('ul')

    // for(let i = 0; i < 3; i++){
    //     const li = document.createElement('li')
    //     li.className = 'stavka'
    //     li.innerText = i
    //     lista.appendChild(li)
    // }

    // console.log(lista)

// -Sta ce se promeniti nakon sledeceg koda?
//  U html postoji <ul> lista sa tri <li> elementa.
    
    // const clanovi = document.querySelectorAll('.clan')
    // clanovi.forEach(el => {
    //     el.innerHTML = '<button> X </button>'
    // })