    let url = 'https://mcstatus.snowdev.com.br/api/query/v3/redemaniacraft.tk '

    fetch(url).then(function(response){
        response.json().then(function(data){
            statuss(data)
        })})

function statuss(dados){
    if(dados.online == true){
        let online1 = document.getElementById("online1")
        let online2 = document.getElementById("online2")

        online1.innerHTML = `redemaniacraft.tk`
        online2.innerHTML = `Servidor <strong id='on'>Online</strong> ${dados.players_online}/${dados.max_players} Players`
    }else{
        online.innerHTML = `Servidor <strong id='off'>Servidor offiline</strong>`
    }
}