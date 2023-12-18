let bevittErtek
const szamok = []
const novekvo = []
let elozoSzam = 0
document.getElementById(hozGomb).addEventListener("click", () => {
    bevittErtek = document.getElementById(bevitel).value
    szamok.push(bevittErtek)
    szamok.forEach(element => {
        if(element => elozoSzam)
        elozoSzam = element
        novekvo.push(element)
    });
    document.getElementById(kiiras).innerHTML(novekvo)
})