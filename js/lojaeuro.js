const background_lojapt = document.getElementById('background_lojapt')
const aslojas = document.getElementById('aloja')
const lojapt_soldado = document.getElementById('lojapt_soldado')
const lojapt_taifero = document.getElementById('lojapt_taifero')

function exit_lojapt() {
    background_lojapt.classList.remove('alojaaback')
    lojapt_soldado.classList.remove('alojaatives')
    lojapt_taifero.classList.remove('alojaatives')
}

function Soldado_paypal() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        background_lojapt.classList.add('alojaaback')
        lojapt_soldado.classList.add('alojaatives')
        aslojas.classList.remove('alojaative')
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Taifeiro_paypal(){
    background_lojapt.classList.add('alojaaback')
    lojapt_taifero.classList.add('alojaatives')
    aslojas.classList.remove('alojaative')
}