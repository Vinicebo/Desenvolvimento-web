const container = document.getElementById("container");


const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;

}

// atleta = dados.filter( (e) => e.id === 40)[0]

// for (let i = 0; i < dados.length; i++){
//     let atleta = dados[i];
//     ;
    
    


// }

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const desc = document.createElement("p");
    const link = document.createElement("a")

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    desc.inert = atleta.detalhes;
    cartao.appendChild(desc);

    link.innerHTML = "Saiba mais...";
    link.href = `detalhes.html?id=${atleta.id}`
    cartao.appendChild(link)

   container.appendChild(cartao)

}

pega_json("https://botafogo-atletas.mange.li/2024-1/all").then(
    ( variavel ) => {
        variavel.forEach((atleta) => montaCard(atleta))
        console.log("issp imprime depois")
        container.innerHTML = conteudo;
    }

)

console.log("Isso imprime antes");



container.innerHTML = conteudo;




