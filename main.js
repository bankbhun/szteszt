let bevittErtek
const szamok = []
let legnagyobbSzam = 0
document.getElementById(hozGomb).addEventListener("click", () => {
    bevittErtek = document.getElementById(bevitel).value
    szamok.push(bevittErtek)
    szamok.forEach(element => {
        if(element > legnagyobbSzam)
        legnagyobbSzam = element
    });
    document.getElementById(kiiras).innerHTML(legkisebbSzam)
})