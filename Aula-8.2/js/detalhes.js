const params = new URLSearchParams(window.location.search)

console.log("id", params.get("id"));
console.log("altura",params.get("altura"));

const id = params.get("id")
const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;

}


cria_detalhes(`https://botafogo-atletas.mange.li/${id}`).then(
    ( obj ) => {
        const nome = document.createElement("h1")
        nome.innerHTML = obj.nome

        document.body.appendChild(nome)

        const imagem = documet.createElement("img")

        
    }

)