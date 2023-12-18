let bevittErtek
const szamok = []
let legkisebbSzam = 0
document.getElementById(hozGomb).addEventListener("click", () => {
    bevittErtek = document.getElementById(bevitel).value
    szamok.push(bevittErtek)
    szamok.forEach(element => {
        if(element => elozoSzam)
        legkisebbSzam = element
    });
    document.getElementById(kiiras).innerHTML(legkisebbSzam)
})