// Array de dados dos cartões de serviços
const servicos = [
    /*SERVIÇOS DE REPAROS */
    {
        imagem: "img/Serviços/Reparos/1 Assento para vaso sanitário.webp",
        titulo: "Assento para vaso sanitário",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/2  suporte de tv e tv ate 50.webp",
        titulo: "suporte de tv e tv ate 50",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/3 tela de animais linear.webp",
        titulo: "Tela de animais linear",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/4 pega ladrão para porta.webp",
        titulo: "Pega ladrão para porta",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/5 persiana.webp",
        titulo: "Persiana",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/6 protetor passaros telhado.webp",
        titulo: "Protetor passaros telhado",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/7 painel para tv.webp",
        titulo: "Painel para tv",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/8 numero de imovel.webp",
        titulo: "Número de imovel",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/9 olho magico para porta.webp",
        titulo: "Olho magico para porta",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/10 gabinete de banheiro.webp",
        titulo: "Gabinete de banheiro",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/11 espelho.webp",
        titulo: "Espelho",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/12 faixa anti derrapante.webp",
        titulo: "Faixa anti derrapante",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/13 Chuveiro eletrico plastico comum.webp",
        titulo: "Chuveiro eletrico plastico comum",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/14 chuveiro tipo ducha para aquecedor central.webp",
        titulo: "Chuveiro tipo ducha para aquecedor central",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/15 Chuveiro turbo.webp",
        titulo: "Chuveiro turbo",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/16 acessorios para cozinha.webp",
        titulo: "Acessórios para cozinha",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/17 Varal.webp",
        titulo: "Varal",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/18 Puxador de porta.webp",
        titulo: "Puxador de porta",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/19 Instalação de ar condicionado split.webp",
        titulo: "Instalação de ar condicionado split",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/20 Placa de sinalização de ambiente.webp",
        titulo: "Placa de sinalização de ambiente",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/21 Movimentação de móveis.webp",
        titulo: "Movimentação de móveis",
        servico: "Movimentação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/22 Suporte para micro-ondas.webp",
        titulo: "Suporte para micro-ondas",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/23 Metais para banheiro.webp",
        titulo: "Metais para banheiro",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/24 Limpeza de ar condicionado de janela.webp",
        titulo: "Limpeza de ar condicionado de janela",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/25 Prateleira.webp",
        titulo: "Prateleira",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/26 Limpeza de ar condicionado split.webp",
        titulo: "Limpeza de ar condicionado split",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/27 Limpeza de chuveiro.webp",
        titulo: "Limpeza de chuveiro",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/28  Barra Acessivel.webp",
        titulo: "Barra Acessivel",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Reparos/29 Quadro decorativo.webp",
        titulo: "Quadro decorativo",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/30 Cortina.webp",
        titulo: "Cortina",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/31 Ventilador de teto.webp",
        titulo: "Ventilador de teto",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/32 Caixa de correio.webp",
        titulo: "Caixa de correio",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/33 Dobradiça de armário.webp",
        titulo: "Dobradiça de armário",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/34 Fechadura.webp",
        titulo: "Fechadura",
        servico: "Instalação,Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/35 folha de porta de madeira.webp",
        titulo: "Folha de porta de madeira",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Reparos/36 Protetor para quina de parede.webp",
        titulo: "Protetor para quina de parede",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    /* FIM SERVIÇOS DE REPAROS */





    /*SERVIÇOS DE ELETRICA */
    {
        imagem: "img/Serviços/Eletrica/1 Tomada.webp",
        titulo: "Tomada",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/2 Tomada 110v p 220v.webp",
        titulo: "Tomada 110v p 220v",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/3 Resistencia de chuveiro.webp",
        titulo: "Resistência de chuveiro",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/4 Senshor de presença.webp",
        titulo: "Sensor de presença",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    }
    , {
        imagem: "img/Serviços/Eletrica/5 Reator.webp",
        titulo: "Reator",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/6 Lampada par ou dicroica.webp",
        titulo: "Lampada par ou dicroica",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/7 Luminária.webp",
        titulo: "Luminária",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/8 Fiação eletrica ar condicionado.webp",
        titulo: "Fiacão elétrica ar condicionado",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/9 Fiação eletrica ar chuveiro.webp",
        titulo: "Fiação eletrica de chuveiro",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/10 projeto elétrico.webp",
        titulo: "Projeto elétrico",
        servico: "Construção m2",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/11 Disjuntor.webp",
        titulo: "Disjuntor",
        servico: "Instalação, Troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/12 lâmpada.webp",
        titulo: "Lâmpada",
        servico: "Instalação, troca, retirada",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/13 Canaleta plastica.webp",
        titulo: "Canaleta plastica",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/14 interruptor.webp",
        titulo: "Interruptor",
        servico: "Instalação, manutenção, troca",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/15 cabeamento tv e internet.webp",
        titulo: "Cabeamento tv e internet",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Eletrica/16 Exaustor de banheiro.webp",
        titulo: "Exaustor de banheiro",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    /** FIM SERVIÇOS DE ELETRICA */


    /* SERVIÇOS DE HIDRAULICA*/
    {
        imagem: "img/Serviços/Hidraulica/1 Vazamentos em vazos canos.webp",
        titulo: "Vazamentos em vazos canos",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/2 Vazamentos em pia sifão.webp",
        titulo: "Vazamentos em pia sifão",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/3 torneira de parede.webp",
        titulo: "Torneira de parede",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"

    },
    {
        imagem: "img/Serviços/Hidraulica/4 reparo de torneira.webp",
        titulo: "Reparo de torneira",
        servico: "Reparo",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/5 torneira de bancada.webp",
        titulo: "Torneira de bancada",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"

    },
    {
        imagem: "img/Serviços/Hidraulica/6 sifão.webp",
        titulo: "Sifão",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"

    },
    {
        imagem: "img/Serviços/Hidraulica/7 ralo pia valvula.webp",
        titulo: "Ralo pia valvula",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/8 descarga de vaso  valvula hydra.webp",
        titulo: "Descarga de vaso  valvula hydra",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/9 ducha higiênica.webp",
        titulo: "Ducha higiênica",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/10 Filtro de água.webp",
        titulo: "Filtro de água",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/11 Registo.webp",
        titulo: "Registo",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    {
        imagem: "img/Serviços/Hidraulica/12 limpeza de caixa d'água.webp",
        titulo: "Limpeza de caixa d'água",
        servico: "Limpeza",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "/img/Serviços/Hidraulica/13 ralo de piso.webp",
        titulo: "Ralo de piso",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },
    /* FIM SERVIÇOS DE HIDRAULICA*/

    /* SERVIÇOS DE ALVENARIA*/
    {
        imagem: "img/Serviços/Alvenaria/0  Demolição ceramica.webp",
        titulo: "Demolição ceramica",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/1 Pia de banheiro.webp",
        titulo: "Pia de banheiro",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/2 Limpeza de calhas e rufos m linear.webp",
        titulo: "Limpeza de calhas e rufos m2 linear",
        servico: "Limpeza",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/3 Demolição, contrapiso m2.webp",
        titulo: "Demolição, contrapiso m2",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/4 Vaso sanitário.webp",
        titulo: "Vaso sanitário",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/5 Telhado m2.webp",
        titulo: "Telhado m2",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/6 Quebra parede para elétrica.webp",
        titulo: "Quebra parede para elétrica",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/7 Demolição, piso cerâmico m2.webp",
        titulo: "Demolição, piso cerâmico m2",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/8 Tanque.webp",
        titulo: "Tanque",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/10 Demolição.webp",
        titulo: "Demolição",
        servico: "Demolição",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

    {
        imagem: "img/Serviços/Alvenaria/11 Reboco m2.webp",
        titulo: "Reboco m2",
        servico: "Instalação",
        link: "https://wa.me/5519997809406?text=Olá vim do seu site e,+gostaria+ de um+orçamento"
    },

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

// FUNÇÃO PARA CRIAR O FILTRO DE BUSCA
function aplicarFiltroDeBusca() {
    const searchInput = document.querySelector('.pesquisa input');
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.cards .card');

        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const service = card.querySelector('h5').textContent.toLowerCase();
            const keywords = card.getAttribute('data-keywords') || '';

            const isVisible =
                title.includes(searchTerm) ||
                service.includes(searchTerm) ||
                keywords.toLowerCase().includes(searchTerm);

            card.style.display = isVisible ? 'block' : 'none';
        });
    });
}

// Chama a função para gerar os cartões e depois ativa a busca
document.addEventListener('DOMContentLoaded', function () {
    gerarCards();
    aplicarFiltroDeBusca();
});
