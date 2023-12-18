let bevittErtek
const szamok = []
document.getElementById(hozGomb).addEventListener("click", () => {
    bevittErtek = document.getElementById(bevitel).value
    szamok.push(bevittErtek)
    document.getElementById(kiiras).innerHTML(szamok)
})