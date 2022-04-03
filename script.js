async function pegaProdutos(){
    return fetch("https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook").then(result => result.json());
}

async function carregaProdutos(){
    listaProdutos = await pegaProdutos();
    var divResultados = document.getElementById('resultados-busca');
    listaProdutos.products.forEach(produto => {
        divResultados.innerHTML += `<div name="produto" class="produto ocultar"><p>${produto.name}</p><p>${produto.id}</p><p>${produto.type}</p></div>`
    });
}

function filtraProdutos(){
    var palavraChave = document.getElementById('caixaBusca').value;
    if(palavraChave == null || palavraChave == ""){
        document.getElementById('titulo-busca').innerHTML += `<p class="mensagemErro">Por favor, insira uma palavra chave.</p>`
    } else {
        let listaProdutos = document.getElementsByName('produto');
        var contaProduto = 0;
        listaProdutos.forEach(item =>{
            if(item.textContent.includes(palavraChave)){
                item.classList.remove('ocultar');
                contaProduto += 1;
            } else{
                item.classList.add('ocultar');
               }
        })

        if(contaProduto == 0){
            document.getElementById('titulo-busca').innerHTML = `<p class="mensagemErro">Não foram encontrados resultados para sua busca.</p>` 
        } else{
            document.getElementById('titulo-busca').innerHTML = `<p class="mensagemErro">Encontrados ${contaProduto} resultado(s) de busca para ${palavraChave}</p>`
            
        }
        
    } 
}

