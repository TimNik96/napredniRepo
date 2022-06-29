let nizKorisnika = [
    {
        firstName: 'Nikola',
        lastName: 'Petrovic',
        dateOfBirth: '1999-12-03',
        phone: '060 234 6345',
        username: 'nikola111',
        email: 'nikola1111@gmail.com',
        pass: 'gamer'
    },
    {
        firstName: 'Petar',
        lastName: 'Markovic',
        dateOfBirth: '1994-10-13',
        phone: '0622349854',
        username: 'pera94',
        email: 'pera94@gmail.com',
        pass: 'pera94pera'
    }, {
        firstName: 'Milica',
        lastName: 'Mitic',
        dateOfBirth: '1989-02-03',
        phone: '060 234 6345',
        username: 'ucenik_1',
        email: 'mica1111@gmail.com',
        pass: 'mmmm'
    }, {
        firstName: 'ucenik',
        lastName: 'Stefanovic',
        dateOfBirth: '1999-12-06',
        phone: '060 234 456',
        username: 'ucenik',
        email: 'skola@gmail.com',
        pass: 'skola'
    }
]

let inputUser = 'ucenik'
let inputPassword = 'skola'

let postoji = false

nizKorisnika.forEach(korisnik => {
    if (inputUser === '' && inputPassword === '') return
    // console.log('prazan')
    if (inputUser !== korisnik.username) return
    // console.log('korisnik')
    if (inputPassword !== korisnik.pass) return
    // guard causes
    postoji = true
    console.log('Uspesno ste se ulogovali')
})

if (!postoji)
    console.log('Proverite Vase podatke')