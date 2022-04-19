const buttonKolicina = document.querySelector('#kolicina')
const buttonPoruci = document.querySelector('#poruci')

const pKolicina = document.querySelector('#porukaKolicina')
const pPoruci = document.querySelector('#porukaPoruci')

let brojPica = 0

const generateTime = () => {
    const divTime = document.querySelector('#time')
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()
    let vreme = ''

    if(sekunde < 10) {
        sekunde = '0' + sekunde
    }

    if(minuti < 10) {
        minuti = '0' + minuti
    }

    if(sati < 10) {
        sati = '0' + sati
    }

    vreme = `${sati}:${minuti}:${sekunde}`
    divTime.textContent = vreme

    return setTimeout(() => {
        generateTime()  
    }, 1000)
}

generateTime()

buttonKolicina.addEventListener('click', e => {
    brojPica++
    pKolicina.textContent = 'Kolicina pica koju ste porucili: ' + brojPica
})

buttonPoruci.addEventListener('click', e => {
    let vreme = generateTime()
    pPoruci.textContent = `Narucili ste ${brojPica} pica u ${vreme} i stici ce na vasu adresu u roku od sat vremena.`
    setTimeout(() => {
        pPoruci.textContent = ''
    }, 3000)
})