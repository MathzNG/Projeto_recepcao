
// ==============================
// 1. CRIAR OS CÍRCULOS ANIMADOS
// ==============================

const fundo = document.querySelector("#fundo-animado");

const cores = [
    "rgba(255, 157, 66, 0.55)",  // Laranja
    "rgba(167, 139, 250, 0.55)", // Roxo
    "rgba(255, 255, 255, 0.25)"  // Branco
];

const quantidadeCirculos = 30;

for (let i = 0; i < quantidadeCirculos; i++) {
    const circulo = document.createElement("div");

    // Adiciona a classe que configuramos no CSS
    circulo.classList.add("circulo");

    // Tamanho aleatório entre 8px e 45px
    const tamanho = Math.random() * 37 + 8;

    // Posição horizontal aleatória
    const posicao = Math.random() * 100;

    // Duração aleatória entre 10 e 25 segundos
    const duracao = Math.random() * 15 + 10;

    // Atraso aleatório para os círculos não subirem juntos
    const atraso = Math.random() * 20;

    // Escolhe uma cor aleatória
    const cor = cores[
        Math.floor(Math.random() * cores.length)
    ];

    // Define as propriedades do círculo
    circulo.style.width = `${tamanho}px`;
    circulo.style.height = `${tamanho}px`;
    circulo.style.left = `${posicao}%`;
    circulo.style.backgroundColor = cor;
    circulo.style.animationDuration = `${duracao}s`;
    circulo.style.animationDelay = `-${atraso}s`;

    // Coloca o círculo no fundo da página
    fundo.appendChild(circulo);
}

// ==============================
// 2. BOTÃO DE COMEÇAR O QUIZ
// ==============================

const botao = document.querySelector("#botao-comecar");

botao.addEventListener("click", () => {
    alert("O quiz será implementado em breve!");
});
