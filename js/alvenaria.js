const servicos = [
    /* SERVIÇOS DE ALVENARIA*/
    {
        imagem: "../img/Serviços/Alvenaria/0  Demolição ceramica.webp",
        titulo: "Demolição ceramica",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/1 Pia de banheiro.webp",
        titulo: "Pia de banheiro",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/2 Limpeza de calhas e rufos m linear.webp",
        titulo: "Limpeza de calhas e rufos m2 linear",
        servico: "Limpeza",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/3 Demolição, contrapiso m2.webp",
        titulo: "Demolição, contrapiso m2",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/4 Vaso sanitário.webp",
        titulo: "Vaso sanitário",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/5 Telhado m2.webp",
        titulo: "Telhado m2",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/6 Quebra parede para elétrica.webp",
        titulo: "Quebra parede para elétrica",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/7 Demolição, piso cerâmico m2.webp",
        titulo: "Demolição, piso cerâmico m2",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/8 Tanque.webp",
        titulo: "Tanque",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/10 Demolição.webp",
        titulo: "Demolição",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Alvenaria/11 Reboco m2.webp",
        titulo: "Reboco m2",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
]


// FUNÇÃO PARA CRIAR E INSERIR OS CARTÕES NA PÁGINA 
function gerarCards() {
    const cardsContainer = document.getElementById("cardsContainer");

    servicos.forEach(servico => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${servico.imagem}" alt="${servico.titulo}">
            <h3>${servico.titulo}</h3>
            <h5><strong>Serviço:</strong> ${servico.servico}</h5>
            <a href="${servico.link}" class="solicite-agora">Solicite agora</a>
        `;

        cardsContainer.appendChild(card);
    });
}

// Chama a função para gerar os cartões e depois ativa a busca
document.addEventListener('DOMContentLoaded', function () {
    gerarCards();
    aplicarFiltroDeBusca();
});
