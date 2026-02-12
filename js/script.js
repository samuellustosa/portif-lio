//sobre mim aqui
const usuario = {
    nome: "Samuel Lustosa",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tecnologias: ["HTML", "CSS", "JavaScript"]
};



const elementoNome = document.getElementById('nome-dev');
const partesDonome = usuario.nome.split(" ");

const elementoBio = document.getElementById('bio-dev');
const divHabilidades = document.getElementById('habilidades');


elementoNome.innerText = `${partesDonome[0]} ${partesDonome[1]}`;
elementoBio.innerText = usuario.bio;

usuario.tecnologias.forEach(tech => {
    divHabilidades.innerHTML += `<span> ${tech} </span>`;
});

//meus projeto aqui
const meusProjetos = [
    {
        titulo: "ainda nao tem",
        tecnologia: "javascript",
        link: "https://github.com"
    },
        {
        titulo: "ainda nao tem",
        tecnologia: "javascript",
        link: "https://github.com"
    },
        {
        titulo: "ainda nao tem",
        tecnologia: "javascript",
        link: "https://github.com"
    }
];


const container = document.getElementById('projetos');

meusProjetos.forEach(projeto => {
    container.innerHTML += `
    <div class="card-projeto">
     <h3>${projeto.titulo}</h3>
      <p>Feito com: ${projeto.tecnologia}</p>
      <a href="${projeto.link}" target=_blank>Ver código</a>
      </div>
    `;
});
