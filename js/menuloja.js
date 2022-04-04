const conteiner = document.getElementById('conteiner')

const soldados = document.getElementById('soldado')
const taifeiros = document.getElementById('taifeiros')
const cabos = document.getElementById('Cabo')
const sargentos = document.getElementById('sargentos')
const Marechals = document.getElementById('Marechal')

function exit(){
    soldados.classList.remove('soldado')
    soldados.classList.add('of')
    taifeiros.classList.remove('taifeiro')
    taifeiros.classList.add('of')
    cabos.classList.remove('cabo')
    cabos.classList.add('of')
    sargentos.classList.remove('sargento')
    sargentos.classList.add('of')
    Marechals.classList.remove('marechal')
    Marechals.classList.add('of')
    conteiner.classList.remove('on')

}

function S_btm(){
    soldados.classList.add('soldado')
    conteiner.classList.add('on')
    taifeiros.classList.add('of')
    cabos.classList.add('of')
    sargentos.classList.add('of') 
    Marechals.classList.add('of')
}

function t_btm(){
    taifeiros.classList.add('taifeiro')
    conteiner.classList.add('on')
    soldados.classList.add('of')  
    cabos.classList.add('of')
    sargentos.classList.add('of') 
    Marechals.classList.add('of')
}

function c_btm(){
    conteiner.classList.add('on')
    cabos.classList.add('cabo')
    soldados.classList.add('of') 
    taifeiros.classList.add('of')
    sargentos.classList.add('of') 
    Marechals.classList.add('of')

}

function  ss_btm(){
    conteiner.classList.add('on')
    sargentos.classList.add('sargento')
    soldados.classList.add('of')
    taifeiros.classList.add('of')
    cabos.classList.add('of')
    Marechals.classList.add('of')
}

function m_btm(){
    conteiner.classList.add('on')
    Marechals.classList.add('marechal')
    soldados.classList.add('of')
    taifeiros.classList.add('of')
    cabos.classList.add('of')
    sargentos.classList.add('of')
}
const banner = document.getElementById('banner-promocionar')
function banner_exit(){
    banner.classList.remove('banneron') 
}