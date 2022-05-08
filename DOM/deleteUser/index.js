const divIspisKorisnika = document.createElement('div')
divIspisKorisnika.classList.add('container')

const body = document.body
body.appendChild(divIspisKorisnika)

let korisnici = [
    {
        ime: 'Marta',
        prezime: 'Jankovic',
        godine: 27,
        zanimanje: 'HR rekruter',
        plata: 1000
    },
    {
        ime: 'Uros',
        prezime: 'Stankovic',
        godine: 32,
        zanimanje: 'Frontend developer',
        plata: 2000
    },
    {
        ime: 'Milan',
        prezime: 'Mitrovic',
        godine: 36,
        zanimanje: 'Fullstack lead developer',
        plata: 3500
    },
    {
        ime: 'Gavrilo',
        prezime: 'Stankovic',
        godine: 26,
        zanimanje: 'CEO',
        plata: '?'
    }
]

const renderBase = () => {
    const divHead = document.createElement('div')
    divHead.classList.add('korisnik')
    
    const pIme = document.createElement('p')
    pIme.textContent = 'IME'
    
    const pPrezime = document.createElement('p')
    pPrezime.textContent = 'PREZIME'
    
    const pGodine = document.createElement('p')
    pGodine.textContent = 'GODINE'
    
    const pZanimanje = document.createElement('p')
    pZanimanje.textContent = 'ZANIMANJE'
    
    const pPlata = document.createElement('p')
    pPlata.textContent = 'PLATA'
    
    divHead.append(
        pIme,
        pPrezime,
        pGodine,
        pZanimanje,
        pPlata
    )
    
    divIspisKorisnika.appendChild(divHead)
}

const renderUser = () => {
    korisnici.forEach(korisnik => {
        const divKorisnik = document.createElement('div')
        divKorisnik.classList.add('korisnik')
    
        const pIme = document.createElement('p')
        pIme.textContent = korisnik.ime
    
        const pPrezime = document.createElement('p')
        pPrezime.textContent = korisnik.prezime
    
        const pGodine = document.createElement('p')
        pGodine.textContent = korisnik.godine
    
        const pZanimanje = document.createElement('p')
        pZanimanje.textContent = korisnik.zanimanje
    
        const pPlata = document.createElement('p')
        pPlata.textContent = korisnik.plata
    
        const buttonBrisiKorisnika = document.createElement('button')
        buttonBrisiKorisnika.textContent = 'Obrisi'
    
        buttonBrisiKorisnika.addEventListener('click', (e) => {
            // console.log(e);
            // divKorisnik.classList.add('hide')
            korisnici.splice(korisnici.indexOf(korisnik), 1)
            divIspisKorisnika.textContent = ''
            // console.log(korisnici)
            renderBase()
            renderUser()
        })
    
        divKorisnik.append(
            pIme,
            pPrezime,
            pGodine,
            pZanimanje,
            pPlata,
            buttonBrisiKorisnika
        )
    
        divIspisKorisnika.appendChild(divKorisnik)
    })
}

renderBase()
renderUser()

