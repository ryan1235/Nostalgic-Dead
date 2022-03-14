    let url = 'https://mcstatus.snowdev.com.br/api/query/v3/ntgdead.hostsquare.com.br'

    fetch(url).then(function(response){
        response.json().then(function(data){
            statuss(data)
        })})

function statuss(dados){
    if(dados.online == true){
        const online1 = document.getElementById("online1")
        const online2 = document.getElementById("online2")

        online1.innerHTML = `ntgdead.hostsquare.com.br`
        online2.innerHTML = `Players <strong id='on'>Online</strong> ${dados.players_online}/${dados.max_players}`
    }else{
        online.innerHTML = `Servidor <strong id='off'>Servidor offiline</strong>`
    }
}
