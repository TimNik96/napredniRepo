// const btn = document.querySelector('button')
const inputUser = document.querySelector('#user')

let korisnici = [
    {
        user: 'ucenik',
        pass: '123'
    },
    {
        user: 'gamer',
        pass: 'razer'
    },
    {
        user: 'admin',
        pass: 'imamKontrolu'
    },
    {
        user: 'pocetnik',
        pass: 'mojPass'
    }
]

inputUser.addEventListener('focusout', (event) => {
    // if(event.key === 'Enter'){
        let postoji = false
        
        korisnici.forEach(korisnik => {
            if(inputUser.value.trim() === korisnik.user)
                postoji = true
        })
    
        if(postoji)
            inputUser.style.borderColor = '#f00'
        else
            inputUser.style.borderColor = '#0f0'
    // } else {
    //     console.log(event.key)
    // }
})