
let soldado = {
    id: 'S_btm',
    nome: 'Soldado',
    imagem: 'img/soldado.png',
    preço: '10',
    Dias: '60 Dias',
    mercadopago: 'https://i.ibb.co/b7rJ32M/image.png',
    pixImagem: 'img/soldadoqrcode.png',
    chavepix: '37999149104 (telefone)',
}
let Cabo = {
    id: 't_btm',
    nome: 'Cabo',
    imagem: 'img/taifero.png',
    preço: '20',
    Dias: '70 Dias',
    mercadopago: 'https://mpago.la/1FTT16v',
    pixImagem: 'img/caboqrcode.png',
    chavepix: '37999149104 (telefone)'
}

let Sargento = {
    id: 'c_btm',
    nome: 'Sargento',
    imagem: 'img/cabo.png',
    preço: '40',
    Dias: '80 Dias',
    mercadopago: 'https://mpago.la/16V8ZeJ',
    pixImagem: 'img/sargentoqrcode.png',
    chavepix: '37999149104 (telefone)'
}
let Major = {
    id: 'ss_btm',
    nome: 'Major',
    imagem: 'img/sargento.png',
    preço: '65',
    Dias: '90 Dias',
    mercadopago: 'https://mpago.la/2oqBsV9',
    pixImagem: 'img/majorqrcode.png',
    chavepix: '37999149104 (telefone)'
}
let Governador = {
    id: 'm_btm',
    nome: 'Governador',
    imagem: 'img/Marechal.png',
    preço: '80',
    Dias: '120 dias',
    mercadopago: 'img/https://mpago.la/17fCQ5k',
    pixImagem: 'governadorqrcode.png',
    chavepix: '37999149104 (telefone)'
}
let Mercenario = {
    id: 'mm_btm',
    nome: 'Mercenario',
    imagem: 'img/tenente.png',
    preço: '100',
    Dias: '150 dias',
    mercadopago: 'https://mpago.la/2kope4e',
    pixImagem: 'img/mercenarioqrcode.png',
    chavepix: '37999149104 (telefone)'
}
let cacto = {
    id: 'cc_btm',
    nome: 'Farm_de_Cacto',
    imagem: 'img/cacto.png',
    preço: '50',
    Dias: 'permanente',
    mercadopago: 'https://mpago.la/2sfvRZn',
    pixImagem: 'img/cactoqrcode.png',
    chavepix: '37999149104 (telefone)'
}

let vips = [soldado, Cabo, Sargento, Major, Governador, Mercenario, cacto]

const loja = document.getElementById('loja')
loja.innerHTML = ''
for (let i = 0; i < vips.length; i++) {
    loja.innerHTML += `<div class="loja_card"><h2>${vips[i].nome}</h2><img src="${vips[i].imagem}"/><p>R$${vips[i].preço}</p><p id='tempo'>Tempo: ${vips[i].Dias}</p><div class="botoes_loja">  <button onclick="${vips[i].nome}_sabermais()"><img src="https://img.icons8.com/ios-glyphs/30/000000/macos-maximize.png"/>Saber mais</button><button onclick="loja_${vips[i].nome}()"><img src="https://img.icons8.com/ios-glyphs/30/000000/shop.png"/>comprar</button></div></div>`
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

function loja_Cabo() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${Cabo.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${Cabo.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${Cabo.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${Cabo.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Sargento() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${Sargento.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${Sargento.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${Sargento.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${Sargento.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Governador() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${Governador.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${Governador.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${Governador.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${Governador.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Major() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${Major.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${Major.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${Major.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${Major.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
    </div></div></div>`
}

function loja_Mercenario() {
    aloja.classList.add('alojaative')
    aloja.innerHTML = ''
    aloja.innerHTML += `<div class="loja_res"><h2>Comprar Vip ${Mercenario.nome}!<img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2>
    <h3>R$${Mercenario.preço}.00</h3><h3><strong>Atenção!</strong></h3><p>Após efetuar a compra entre no nosso <a target="_blank" href="https://discord.gg/2xAkFJPDrj">Discord</a> e envie o comprovante em <strong>Pagamentos-VIP</strong></p>
    <img id='pix_img' src="img/pagamendovip.png" alt="imagem pagamento vip"><div class="btn_pagamento">
    <p><label><input id="check" type="checkbox">Aceito e concordo com as <target="_blank" href="regras.html">regras do servidor</a> e com o <a href="">termo de compra</a></p><p id="checkress"></p></label>
    <button onclick="${Mercenario.nome}_mercadopago()"><img id="btn_pagamento" src="https://img.icons8.com/color/48/000000/mercado-pago.png"/>Mercado Pago</button>
    <button onclick="${Mercenario.nome}_pix()"><img id="btn_pagamento" src="https://logospng.org/download/pix/logo-pix-icone-512.png"/>pix</button>
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
function Cabo_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${Cabo.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
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
function Governador_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${Governador.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Major_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${Major.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Mercenario_mercadopago() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        checkress.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="carregando"><img src="img/zumbi.gif"/><h2>Carregando...<h2/></div> <iframe src="${Mercenario.mercadopago}" height="100%" width="100%" title="MercadoPago"></iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></div>`
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
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${soldado.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img id="qrcode" src="${soldado.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${soldado.preço}</strong> para seguinte chave pix: <strong>${soldado.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Cabo_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${Cabo.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img id="qrcode" src="${Cabo.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${Cabo.preço}</strong> para seguinte chave pix: <strong>${Cabo.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Sargento_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${Sargento.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img id="qrcode" src="${Sargento.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${Sargento.preço}</strong> para seguinte chave pix: <strong>${Sargento.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Major_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${Major.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img id="qrcode" src="${Major.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${Major.preço}</strong> para seguinte chave pix: <strong>${Major.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Governador_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${Governador.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img id="qrcode" src="${Governador.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${Governador.preço}</strong> para seguinte chave pix: <strong>${Governador.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Mercenario_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${Mercenario.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img id="qrcode" src="${Mercenario.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${Mercenario.preço}</strong> para seguinte chave pix: <strong>${Mercenario.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
function Farm_de_Cacto_pix() {
    const check = document.getElementById('check')
    const checkress = document.getElementById('checkress')
    if (check.checked) {
        aloja.innerHTML = ''
        aloja.innerHTML += `<div class="loja_res"><div class="pix_area"><h2>Pagamento pix vip ${cacto.nome} </iframe><img id="exit_loja" onclick="exit_loja()" src="https://img.icons8.com/ios-glyphs/90/000000/xbox-x.png"/></h2><img id="qrcode" src="${cacto.pixImagem}"/><p>Não consegue pagar pelo QR Code?</p><p>Então Envie <strong>R$${cacto.preço}</strong> para seguinte chave pix: <strong>${cacto.chavepix}</strong></p></div></div>`
    } else {
        checkress.innerHTML = 'Porfavor aceite os termos a cima.'
    }
}
