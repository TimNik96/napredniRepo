const inputImeMusterije = document.querySelector('#ime')
const inputBrojStola = document.querySelector('#brojStola')
const inputRacun = document.querySelector('#racun')
const buttonUnosMusterije = document.querySelector('#unos')
const buttonIspisMusterija = document.querySelector('#ispis')
const divIspisMusterija = document.querySelector('#ispisMusterija')

let nizMusterija = []

buttonUnosMusterije.addEventListener('click', e => {
    if(inputImeMusterije.value.trim() != '' &&
          inputBrojStola.value.trim() != '' && 
              inputRacun.value.trim() != '') {
                  let musterija = {
                      ime: inputImeMusterije.value,
                      brojStola: parseInt(inputBrojStola.value),
                      racun: parseInt(inputRacun.value)
                  }
              
                  nizMusterija.push(musterija)
              
                  setTimeout(() => {
                      inputImeMusterije.value = ''
                      inputBrojStola.value = ''
                      inputRacun.value = ''
                  }, 1000)

                  console.log(musterija)
              } else {
                  console.log('Sva polja moraju biti popunjena')
              }
})

buttonIspisMusterija.addEventListener('click', e => {
    // console.log(nizMusterija)
    divIspisMusterija.textContent = ''

    if (nizMusterija.length != 0) {
        nizMusterija.forEach(element => {
            const divMusterija = document.createElement('div')
            const pImeMusterije = document.createElement('p')
            const pBrojStola = document.createElement('p')
            const pRacun = document.createElement('p')

            pImeMusterije.textContent = 'Ime musterije: ' + element.ime
            pBrojStola.textContent = 'Broj stola: ' + element.brojStola
            pRacun.textContent = 'Racun: ' + element.racun

            divMusterija.append(pImeMusterije, pBrojStola, pRacun)
            divIspisMusterija.appendChild(divMusterija)
        })
    } else {
        console.log('Nema musterija')
    }
})