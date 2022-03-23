
let soldado = {
    id: 'S_btm',
    nome: 'Soldado',
    imagem: 'img/soldado.png',
    preço: '15',
    Dias: '30 Dias',
    mercadopago: 'https://mpago.la/2atPRy7',
    pixImagem: 'https://www.serhsnatalgrandhotel.com//content/imgsxml/galerias/panel_galeriapage/1/qrcodeguestcontrol307.png',
    chavepix: 'jorginho@gmail.com',
}
let taifeiro = {
    id: 't_btm',
    nome: 'Taifeiro',
    imagem: 'img/taifero.png',
    preço: '25',
    Dias: '40 Dias',
    mercadopago: 'https://mpago.la/1L4ZmNp',
    pixImagem: 'https://www.serhsnatalgrandhotel.com//content/imgsxml/galerias/panel_galeriapage/1/qrcodeguestcontrol307.png',
    chavepix: 'jorginho@gmail.com'
}

let cabo = {
    id: 'c_btm',
    nome: 'Cabo',
    imagem: 'img/cabo.png',
    preço: '50',
    Dias: '30 Dias',
    mercadopago: 'https://mpago.la/1MbMUdY',
    pixImagem: 'https://www.serhsnatalgrandhotel.com//content/imgsxml/galerias/panel_galeriapage/1/qrcodeguestcontrol307.png',
    chavepix: 'jorginho@gmail.com'
}
let Sargento = {
    id: 'ss_btm',
    nome: 'Sargento',
    imagem: 'img/sargento.png',
    preço: '80',
    Dias: '60 Dias',
    mercadopago: 'https://mpago.la/1inGfd1',
    pixImagem: 'https://www.serhsnatalgrandhotel.com//content/imgsxml/galerias/panel_galeriapage/1/qrcodeguestcontrol307.png',
    chavepix: 'jorginho@gmail.com'
}
let Marechal = {
    id: 'm_btm',
    nome: 'Marechal',
    imagem: 'img/Marechal.png',
    preço: '120',
    Dias: '120 dias',
    mercadopago: 'https://mpago.la/2ZQQrVx',
    pixImagem: 'https://www.serhsnatalgrandhotel.com//content/imgsxml/galerias/panel_galeriapage/1/qrcodeguestcontrol307.png',
    chavepix: 'jorginho@gmail.com'
}
let cacto = {
    id: 'cc_btm',
    nome: 'Farm_de_Cacto',
    imagem: 'img/cacto.png',
    preço: '50',
    Dias: 'permanente',
    mercadopago: 'https://www.google.com/',
    pixImagem: 'https://www.serhsnatalgrandhotel.com//content/imgsxml/galerias/panel_galeriapage/1/qrcodeguestcontrol307.png',
    chavepix: 'jorginho@gmail.com'
}

let vips = [soldado, taifeiro, cabo, Sargento, Marechal, cacto]

const loja = document.getElementById('loja')
loja.innerHTML = ''
for (let i = 0; i < vips.length; i++) {
    loja.innerHTML += `<div class="loja_card"><h2>${vips[i].nome}</h2><img src="${vips[i].imagem}"/><p>R$${vips[i].preço}</p><p id='tempo'>Tempo: ${vips[i].Dias}</p><div class="botoes_loja">  <button onclick="${vips[i].id}()"><img src="https://img.icons8.com/ios-glyphs/30/000000/macos-maximize.png"/>Saber mais</button><button onclick="loja_${vips[i].nome}()"><img src="https://img.icons8.com/ios-glyphs/30/000000/shop.png"/>comprar</button></div></div>`
}



function euro() {
    let url = 'https://economia.awesomeapi.com.br/json/last/EUR-BRL'

    fetch(url).then(function (response) {
        response.json().then(function (data) {
            statuss(data)
        })
    })
    function statuss(dados) {

        const Paragrafo = document.getElementById('Paragrafo')
        Paragrafo.innerHTML = '<p id="Paragrafo">É Brasileiro? <button id="moedas" onclick="real()"><img src="https://img.icons8.com/external-flat-lima-studio/32/000000/external-real-currency-flat-lima-studio.png"/>Clique aqui</button></p>'

        loja.innerHTML = ''
        for (let i = 0; i < vips.length; i++) {
            let euro = vips[i].preço / dados.EURBRL.high
            loja.innerHTML += `<div class="loja_card"><h2>${vips[i].nome}</h2><img src="${vips[i].imagem}"/><p>€${euro.toFixed(2)}</p><p id='tempo'>Tempo: ${vips[i].Dias}</p><div class="botoes_loja">  <button onclick="${vips[i].id}()"><img src="https://img.icons8.com/ios-glyphs/30/000000/macos-maximize.png"/>Saber mais</button><button onclick="lojapt_${vips[i].nome}()"><img src="https://img.icons8.com/ios-glyphs/30/000000/shop.png"/>comprar</button></div></div>`
        }
    }
}
function real() {
    const Paragrafo = document.getElementById('Paragrafo')
    Paragrafo.innerHTML = ' <p id="Paragrafo">É de Portugal? <button id="moedas" onclick="euro()"><img src="https://img.icons8.com/doodle/32/000000/euro-pound-exchange--v1.png"/>Clique aqui</button></p>'
    loja.innerHTML = ''
    for (let i = 0; i < vips.length; i++) {
        loja.innerHTML += `<div class="loja_card"><h2>${vips[i].nome}</h2><img src="${vips[i].imagem}"/><p>R$${vips[i].preço}</p><p id='tempo'>Tempo: ${vips[i].Dias}</p><div class="botoes_loja">  <button onclick="${vips[i].id}()"><img src="https://img.icons8.com/ios-glyphs/30/000000/macos-maximize.png"/>Saber mais</button><button onclick="loja_${vips[i].nome}()"><img src="https://img.icons8.com/ios-glyphs/30/000000/shop.png"/>comprar</button></div></div>`
    }
}

const aloja = document.getElementById('aloja')
const alojares = document.getAnimations('alojares')

function exit_loja() {
    aloja.classList.remove('alojaative')
}

function loja_Soldado() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${soldado.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${soldado.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <a target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${soldado.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${soldado.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Taifeiro() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${taifeiro.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${taifeiro.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${taifeiro.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${taifeiro.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Cabo() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${cabo.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${cabo.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${cabo.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${cabo.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Sargento() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${Sargento.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${Sargento.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${Sargento.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${Sargento.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Marechal() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${Marechal.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${Marechal.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${Marechal.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${Marechal.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Farm_de_Cacto() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar ${cacto.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${cacto.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${cacto.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${cacto.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}


function Soldado_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${soldado.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }

}
function Taifeiro_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${taifeiro.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Cabo_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${cabo.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Sargento_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${Sargento.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Marechal_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${Marechal.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Farm_de_Cacto_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${cacto.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}

//pix

function Soldado_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${soldado.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img src="${soldado.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${soldado.preço}</strong> para seguinte chave pix: <strong>${soldado.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Taifeiro_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${taifeiro.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img src="${taifeiro.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${taifeiro.preço}</strong> para seguinte chave pix: <strong>${taifeiro.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Cabo_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${cabo.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img src="${cabo.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${cabo.preço}</strong> para seguinte chave pix: <strong>${cabo.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Sargento_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${Sargento.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img src="${Sargento.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${Sargento.preço}</strong> para seguinte chave pix: <strong>${Sargento.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Marechal_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${Marechal.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img src="${Marechal.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${Marechal.preço}</strong> para seguinte chave pix: <strong>${Marechal.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Farm_de_Cacto_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${cacto.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img src="${cacto.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${cacto.preço}</strong> para seguinte chave pix: <strong>${cacto.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}


function lojapt_Soldado() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${soldado.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img  src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <label><input id="check" type="checkbox"> Aceito e concordo com as <a target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><div class="checkress" id="checkress"></label></div>
    <button onclick="${soldado.nome}_paypal()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/paypal.png"/>Pay-pal</button>
    </div></div></div>`
}

function lojapt_Taifeiro() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${taifeiro.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img  src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <label><input id="check" type="checkbox"> Aceito e concordo com as <a target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><div class="checkress" id="checkress"></label></div>
    <button onclick="${taifeiro.nome}_paypal()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/paypal.png"/>Pay-pal</button>
    </div></div></div>`
}