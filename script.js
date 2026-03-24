const story = document.getElementById("story"); // Seleciona os textos
const choices = document.getElementById("choices"); // Seleciona os botoes
const imagem = document.getElementById("imagem-cenario"); // Seleciona a imagem
const scene = document.querySelector(".imagem_historias"); // Seleciona o container da cena

function nextScene(choice) {

    // 1. COMEÇA A TRANSIÇÃO (FADE OUT)
    scene.classList.add("fade-out"); // Adiciona a classe que deixa invisível

    // 2. ESPERA A ANIMAÇÃO ACABAR (0.5 segundos = 500 milissegundos)
    setTimeout(() => {
        // --- TUDO AQUI DENTRO ACONTECE ENQUANTO ESTÁ INVISÍVEL ---    

        // CENA 2
        if (choice === "caminho") {

            imagem.src = "assets/cabana.png"; // Troca a imagem

            story.innerText =
                "Você segue pelo caminho e encontra uma cabana abandonada.";

            choices.innerHTML = `
<button onclick="nextScene('entrarCabana')">Entrar na cabana</button>
<button onclick="nextScene('ignorarCabana')">Ignorar e continuar</button>
`;

        }

        // CENA 3
        else if (choice === "floresta") {

            imagem.src = "assets/Ouve Barulho.png";

            story.innerText =
                "Você entra na floresta densa e escuta um barulho estranho.";

            choices.innerHTML = `
<button onclick="nextScene('correr')">Correr</button>
<button onclick="nextScene('investigar')">Investigar o som</button>
`;

        }

        // CENA 4
        else if (choice === "entrarCabana") {

            imagem.src = "assets/Mapa.png";

            story.innerText =
                "Dentro da cabana você encontra um mapa antigo da floresta.";

            choices.innerHTML = `
<button onclick="nextScene('seguirMapa')">Seguir o mapa</button>
`;

        }

        // CENA 5
        else if (choice === "ignorarCabana") {

            imagem.src = "assets/Ponte.png";

            story.innerText =
                "Você continua andando e encontra uma ponte quebrada.";

            choices.innerHTML = `
<button onclick="nextScene('pularPonte')">Tentar atravessar</button>
<button onclick="nextScene('voltar')">Voltar</button>
`;

        }

        // CENA 6
        else if (choice === "correr") {

            imagem.src = "assets/Estrada Iluminada.png";

            story.innerText =
                "Você corre e encontra uma estrada iluminada.";

            choices.innerHTML = `
<button onclick="nextScene('cidade')">Seguir pela estrada</button>
`;

        }

        // CENA 7
        else if (choice === "investigar") {

            imagem.src = "assets/Cervo.png";

            story.innerText =
                "Era apenas um cervo, mas você se perde ainda mais.";

            choices.innerHTML = `
<button onclick="nextScene('perdido')">Continuar andando</button>
`;

        }

        // FINAIS

        else if (choice === "seguirMapa") {

            imagem.src = "assets/Mapa Acha saida.png";

            story.innerText =
                "O mapa leva você até a saída da floresta. Você venceu!";

            choices.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        else if (choice === "pularPonte") {

            imagem.src = "assets/Caiu Ponte.png";

            story.innerText =
                "A ponte quebra e você cai no rio, mas consegue sobreviver.";

            choices.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        else if (choice === "voltar") {

            imagem.src = "assets/Pós Ponte.png";

            story.innerText =
                "Você se perde completamente na floresta.";

            choices.innerHTML = `
<button onclick="location.reload()">Tentar novamente</button>
`;

        }

        else if (choice === "cidade") {

            imagem.src = "assets/Cidade.png";

            story.innerText =
                "A estrada leva você até uma cidade segura.";

            choices.innerHTML = `
<button onclick="location.reload()">Jogar novamente</button>
`;

        }

        else if (choice === "perdido") {

            imagem.src = "assets/Pós cervo se perde.png";

            story.innerText =
                "Você continua andando até desaparecer na floresta.";

            choices.innerHTML = `
<button onclick="location.reload()">Tentar novamente</button>
`;

        }

        // --- CONTEÚDO TROCADO, AGORA VOLTAMOS A APARECER ---

        // 3. FINALIZA A TRANSIÇÃO (FADE IN)
        scene.classList.remove("fade-out"); // Remove a classe e o CSS suaviza a volta
    }, 400); // 500ms deve ser o mesmo tempo que você colocou no CSS transition

}