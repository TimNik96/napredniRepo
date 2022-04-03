//POP - izbacuje poslednji element iz niza i vraca ga nazad

// let niz = [1, 2, 3, 4, 5]

// let poslednji = niz.pop()

// console.log(poslednji)
// console.log(niz)

//PUSH - ubacuje element na kraj niza i vraca length niza

// niz.push(poslednji)
// console.log(niz)
// console.log(niz.push(poslednji))
// console.log(niz)

//SHIFT - brise element sa pocetka niza i vraca ga nazad

// let prviUNizu = niz.shift()
// console.log(prviUNizu)

//UNSHIFT - ubacuje element na pocetak niza i vraca duzinu niza

// console.log(niz.unshift(prviUNizu))
// console.log(niz)

//INCLUDES - proverava da li element postoji u nizu

// let element = 6

// console.log(niz.includes(element))

//JOIN - spaja elemente u string

// console.log(typeof niz.join('-'))

//CONCAT - nadovezuje niz na niz

// let primerNiz = [10, 11, 12]
// console.log(primerNiz.concat(niz))

//INDEXOF - vraca lokaciju elementa u nizu, a ako ne postoji, funkcija vraca -1

// let element = 6
// console.log(niz.indexOf(element))

//SLICE - vraca kopiju dela niza u zadatom rasponu;
//      - -1 vraca poslednji element; ukoliko ne navedemo kraj isecka, onda cemo nazad dobiti niz od dela koji smo naveli do kraja

// console.log(niz.slice(-3, -1))
// console.log(niz.slice(0))
// console.log(niz)

//SPLICE - brise navedeni element ili sekciju u nizu u rasponu koji zadamo, a po potrebi moze da zameni nove elemente na lokacije sa kojih
//       - elementi prethodno izbrisani; parametri koji se navode su pocetak isecanja i koliko od tog pointa hocemo elemenata da izbrisemo;
//       - funkcija vraca nazad obrisane elemente;

// niz.splice(2, 2)
// console.log(niz.splice(2, 2, 10, 20))
// console.log(niz)

//REVERSE - obrce elemente u nizu(prvi postaje poslednji, itd...)

// console.log(niz.reverse())

//SOME - proverava da li postoji bar neki element koji zadovoljava uslov; ako postoji, vraca true

// console.log(niz.some((element) => element < 10))

//EVERY - proverava da li svi elementi niza zadovoljavaju odredjeni uslov

// console.log(niz.every((element) => element > 1));

//FIND - trazi element koji zadovoljava uslov i vraca prvi na koji naidje, u suprotnom vraca UNDEFINED

// console.log(niz.find((element) => element % 6 == 0))

//FINDINDEX - vraca index zadatog elementa, u suprotnom vraca -1

// console.log(niz.findIndex((element) => element % 2 !== 0))

//MAP - mapira elemente u nizu po odredjenom uslovu

// console.log(niz.map((element) => element * 2))

//SORT - sortira elemente (Po ascii tabeli https://www.asciitable.com/)
//     - sto se tice brojeva, sortirace ih po rastucem redosledu ukoliko je a - b, a po opadajucem za b - a. Ukoliko razlika bude za a - b = 0, 
//       nece dolaziti do izmene, jer su elementi identicni; ukoliko vrati negativan broj, onda je poredak u redu, a ukoliko vrati broj u plusu
//       onda ce doci do zamene mesta, jer se prvo nalazi veci broj pa manji

// let niz = [1, 2, 22, 3, 4, 45, 5]

// let imena = ['Nikola', 'Naum','Ana', 'Uros', 'Bojana']

// console.log(imena.sort());
// console.log(niz.sort((a, b) => b - a))

//FILTER - vraca nazad niz svih elemenata koji zadovoljavaju odredjeni uslov

// console.log(
//     imena.filter((element) => element.charAt(0) == 'N').sort()
// );


//ZAMENA VREDNOSTI ELEMENATA

// let a = 10
// let b = 20
// let tmp = a
// a = b
// b = tmp

// console.log(a, b)