// Array de dados dos cartões de serviços
const servicos = [
    /*SERVIÇOS DE REPAROS */
    {
        imagem: "../img/Serviços/Reparos/1 Assento para vaso sanitário.webp",
        titulo: "Assento para vaso sanitário",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/2  suporte de tv e tv ate 50.webp",
        titulo: "suporte de tv e tv ate 50",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/3 tela de animais linear.webp",
        titulo: "Tela de animais linear",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/4 pega ladrão para porta.webp",
        titulo: "Pega ladrão para porta",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/5 persiana.webp",
        titulo: "Persiana",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/6 protetor passaros telhado.webp",
        titulo: "Protetor passaros telhado",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/7 painel para tv.webp",
        titulo: "Painel para tv",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/8 numero de imovel.webp",
        titulo: "Número de imovel",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/9 olho magico para porta.webp",
        titulo: "Olho magico para porta",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/10 gabinete de banheiro.webp",
        titulo: "Gabinete de banheiro",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/11 espelho.webp",
        titulo: "Espelho",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/12 faixa anti derrapante.webp",
        titulo: "Faixa anti derrapante",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/13 Chuveiro eletrico plastico comum.webp",
        titulo: "Chuveiro eletrico plastico comum",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/14 chuveiro tipo ducha para aquecedor central.webp",
        titulo: "Chuveiro tipo ducha para aquecedor central",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/15 Chuveiro turbo.webp",
        titulo: "Chuveiro turbo",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/16 acessorios para cozinha.webp",
        titulo: "Acessórios para cozinha",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/17 Varal.webp",
        titulo: "Varal",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/18 Puxador de porta.webp",
        titulo: "Puxador de porta",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/19 Instalação de ar condicionado split.webp",
        titulo: "Instalação de ar condicionado split",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/20 Placa de sinalização de ambiente.webp",
        titulo: "Placa de sinalização de ambiente",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/21 Movimentação de móveis.webp",
        titulo: "Movimentação de móveis",
        servico: "Movimentação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/22 Suporte para micro-ondas.webp",
        titulo: "Suporte para micro-ondas",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/23 Metais para banheiro.webp",
        titulo: "Metais para banheiro",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/24 Limpeza de ar condicionado de janela.webp",
        titulo: "Limpeza de ar condicionado de janela",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/25 Prateleira.webp",
        titulo: "Prateleira",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/26 Limpeza de ar condicionado split.webp",
        titulo: "Limpeza de ar condicionado split",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/27 Limpeza de chuveiro.webp",
        titulo: "Limpeza de chuveiro",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/28  Barra Acessivel.webp",
        titulo: "Barra Acessivel",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "../img/Serviços/Reparos/29 Quadro decorativo.webp",
        titulo: "Quadro decorativo",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/30 Cortina.webp",
        titulo: "Cortina",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/31 Ventilador de teto.webp",
        titulo: "Ventilador de teto",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "../img/Serviços/Reparos/32 Caixa de correio.webp",
        titulo: "Caixa de correio",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    /* FIM SERVIÇOS DE REPAROS */
];

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
