const prviBroj = document.querySelector('#prviBroj')
const drugiBroj = document.querySelector('#drugiBroj')
const treciBroj = document.querySelector('#treciBroj')
const inputResenje = document.querySelector('#resenje')
const buttonResenje = document.querySelector('#resi')

buttonResenje.addEventListener('click', e => {
    let broj_1 = parseInt(prviBroj.value)
    let broj_2 = parseInt(drugiBroj.value)
    let broj_3 = parseInt(treciBroj.value)

    let max = broj_1

    if(broj_2 > max)
        max = broj_2
    if(broj_3 > max)
        max = broj_3

    inputResenje.value = max

    setTimeout(() => {
        prviBroj.value = ''
        drugiBroj.value = ''
        treciBroj.value = ''
        inputResenje.value = ''
    }, 5000)

})