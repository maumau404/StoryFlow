const story2 = document.getElementById("story-2"); // Seleciona os textos
const choices2 = document.getElementById("choices-2"); // Seleciona os botoes
const imagem2 = document.getElementById("imagem-cenario-2"); // Seleciona a imagem
const scene2 = document.querySelector("#landing-tres .imagem_historias"); // Seleciona o container da cena

function nextScene2(choice) {

    // 1. COMEÇA A TRANSIÇÃO (FADE OUT)
    scene2.classList.add("fade-out"); // Adiciona a classe que deixa invisível

    // 2. ESPERA A ANIMAÇÃO ACABAR (0.5 segundos = 500 milissegundos)
    setTimeout(() => {
        // --- TUDO AQUI DENTRO ACONTECE ENQUANTO ESTÁ INVISÍVEL ---    

        // CENA 2
        if (choice === "celular") {

            imagem2.src = "assets/game 2/mensagem celular.png"; // Troca a imagem

            story2.innerText =
                "O celular acende por um segundo. A foto de fundo é você abraçado a uma mulher em frente a uma delegacia. Uma mensagem chega: Eles sabem que você fugiu com as provas. A porta do quarto é esmurrada por fora..";

            choices2.innerHTML = `
<button onclick="nextScene2('pularjanela')">Tentar pular a janela para o beco</button>
<button onclick="nextScene2('guardaroupa')">Se esconder no guarda-roupa e esperar</button>
`;

        }

        // CENA 3
        else if (choice === "bilhete") {

            imagem2.src = "assets/game 2/Quarto 302.png";

            story2.innerText =
                "O bilhete diz: Quarto 302, 22:00. Não confie na recepcionista. Você olha para o número na porta: você está no 302. Alguém começa a girar a maçaneta lentamente por fora.";

            choices2.innerHTML = `
<button onclick="nextScene2('abrirporta')">Abrir a porta de uma vez para confrontar a pessoa</button>
<button onclick="nextScene2('trancarporta')">Trancar a porta com a trava de segurança e gritar por ajuda</button>
`;

        }

        // CENA 4
        else if (choice === "pularjanela") {

            imagem2.src = "assets/game 2/cai no lixo.png";

            story2.innerText =
                "Você cai em uma caçamba de lixo. No beco, um homem em um carro preto buzina e diz: Doutor, entre rápido! O hospital foi cercado!. Você percebe que suas mãos têm cicatrizes de cirurgião.";

            choices2.innerHTML = `
<button onclick="nextScene2('carro')">Entrar no carro e confiar no motorista</button>
<button onclick="nextScene2('correr')">Correr na direção oposta, suspeitando que "Doutor" não é você</button>
`;

        }

        // CENA 5
        else if (choice === "guardaroupa") {

            imagem2.src = "assets/game 2/Homens armados.png";

            story2.innerText =
                "Dois homens armados entram. Eles reviram o quarto e um diz: Onde está o dinheiro que ele roubou da carga?. Você percebe que há uma maleta pesada sob o fundo falso do armário onde você está.";

            choices2.innerHTML = `
<button onclick="nextScene2('sair')">Tentar sair de fininho enquanto eles estão de costas</button>
<button onclick="nextScene2('chutarporta')">Chutar a porta do armário para derrubar um deles e lutar</button>
`;

        }

        // CENA 6
        else if (choice === "abrirporta") {

            imagem2.src = "assets/game 2/recepcionista bate na porta.png";

            story2.innerText =
                "É a recepcionista. Ela empalidece. O senhor... você deveria estar morto. Eu vi o acidente!. Ela tenta correr para o elevador.";

            choices2.innerHTML = `
<button onclick="nextScene2('perseguir')">Persegui-la pelas escadas</button>
<button onclick="nextScene2('voltarquarto')">Voltar ao quarto e procurar por notícias de "acidente" no jornal</button>
`;

        }

        // CENA 7
        else if (choice === "trancarporta") {

            imagem2.src = "assets/game 2/esposa na porta.png";

            story2.innerText =
                "Uma voz feminina do outro lado diz: Sou eu, sua esposa! Abra, a polícia está vindo te buscar pelo que você fez!. Ela parece desesperada, mas você não reconhece a voz dela.";

            choices2.innerHTML = `
<button onclick="nextScene2('aceitarajuda')">Abrir a porta e aceitar a ajuda dela</button>
<button onclick="nextScene2('policia')">Dizer que chamou a polícia e ver a reação dela</button>
`;

        }

        // FINAIS

        else if (choice === "carro") {

            imagem2.src = "assets/game 2/Final voce neurocientista.png";

            story2.innerText =
                "O motorista te leva ao hospital. Você descobre que é um neurocientista que apagou a própria memória para não revelar onde escondeu a cura de uma doença que seria vendida por bilhões.";

            choices2.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        else if (choice === "correr") {

            imagem2.src = "assets/game 2/final atropelado.png";

            story2.innerText =
                "Você é atropelado por um carro de polícia. Ao ser preso, descobrem que você é um prisioneiro foragido que fez plástica para parecer o médico.";

            choices2.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        else if (choice === "sair") {

            imagem2.src = "assets/game 2/Final voce agente.png";

            story2.innerText =
                "Você escapa com a maleta. Ao abri-la, vê fotos de você vigiando os homens armados. Você não é a vítima, é um agente infiltrado que se feriu na missão.";

            choices2.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        else if (choice === "chutarporta") {

            imagem2.src = "assets/game2/final perde a briga.png";

            story2.innerText =
                "Você perde a briga. Antes de apagar, o homem diz: Pena que esqueceu onde enterrou o corpo, chefe. Você era o líder da gangue.";

            choices2.innerHTML = `
<button onclick="location.reload()">Tentar novamente</button>
`;

        }

        else if (choice === "perseguir") {

            imagem2.src = "assets/game 2/final recepcionista confessa.png";

            story2.innerText =
                "Você alcança a recepcionista. Ela confessa que você simulou a própria morte para fugir de uma dívida enorme com pessoas perigosas.";

            choices2.innerHTML = `
<button onclick="location.reload()">Tentar novamente</button>
`;

        }

        else if (choice === "voltarquarto") {

            imagem2.src = "assets/game 2/final voce cientista.png";

            story2.innerText =
                "A notícia mostra que você é um cientista desaparecido que estava trabalhando em uma tecnologia revolucionária (e talvez perigosa).";

            choices2.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        else if (choice === "aceitarajuda") {

            imagem2.src = "assets/game 2/final mulher te mata.png";

            story2.innerText =
                "Ela te abraça, mas você vê um bisturi na mão dela. Ela não é sua esposa, é a pessoa que você tentou denunciar. Ela te mata.";

            choices2.innerHTML = `
<button onclick="location.reload()">Tentar novamente</button>
`;

        }

        else if (choice === "policia") {

            imagem2.src = "assets/game 2/final espião esposa foge.png";

            story2.innerText =
                "Ela foge. Você encontra um cofre atrás do espelho com seu passaporte real. Você é um espião internacional e o quarto era um esconderijo.";

            choices2.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        // --- CONTEÚDO TROCADO, AGORA VOLTAMOS A APARECER ---

        // 3. FINALIZA A TRANSIÇÃO (FADE IN)
        scene2.classList.remove("fade-out"); // Remove a classe e o CSS suaviza a volta
    }, 400); // 500ms deve ser o mesmo tempo que você colocou no CSS transition

}