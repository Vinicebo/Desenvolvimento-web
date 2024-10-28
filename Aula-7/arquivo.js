const container = document.getElementById("container")
// atleta = dados.filter( (e) => e.id === 40)[0]
let conteudo = ""
const montaCard = (atleta) => `
    <div class ="card">
    <h1>${atleta.nome}</h1>
    <img src=${atleta.imagem}>
    <p>${atleta.detalhes}</p>
    </div>
`
// for (let i = 0; i < dados.length; i++){
//     let atleta = dados[i];
//     ;
    
    


// }
dados.forEach((atleta) => conteudo += montaCard(atleta))

container.innerHTML = conteudo;




