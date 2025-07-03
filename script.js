const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que você ouviu falar sobre como a Inteligência Artificial pode influenciar emoções e comportamentos humanos, qual foi sua primeira reação?",
        alternativas: [
            {
                texto: "Isso me deixou curioso!",
                afirmacao: "Se interessou em entender como a IA pode ser usada para melhorar o bem-estar psicológico das pessoas. "
            },
            {
                texto: "Isso me deu um pouco de medo.",
                afirmacao: "Ficou preocupado com os possíveis impactos negativos da IA sobre emoções e pensamentos humanos."
            }
        ]
    },
    {
        enunciado: "Ao aprender que algumas ferramentas de IA conseguem reconhecer emoções humanas por meio de expressões faciais e tom de voz, como você reage?",
        alternativas: [
            {
                texto: "Quero aprender como isso funciona!",
                afirmacao: "Mostrou interesse em estudar como a psicologia ajuda a IA a interpretar emoções humanas."
            },
            {
                texto: "Acho isso invasivo.",
                afirmacao: "Preocupou-se com questões de privacidade e uso ético das emoções humanas em sistemas de IA."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre tecnologia, surgiu a questão: a IA pode influenciar as decisões que tomamos? Qual sua opinião?",
        alternativas: [
            {
                texto: "Sim, e é por isso que devemos entender como ela nos influencia psicologicamente.",
                afirmacao: "Acredita que a psicologia pode ajudar a entender e reduzir vieses na interação com a IA."
            },
            {
                texto: "A decisão final ainda é das pessoas, então isso não é tão preocupante.",
                afirmacao: "Considera importante a autonomia humana, mas acredita que a IA ainda deve ser monitorada de perto."
            }
        ]
    },
    {
        enunciado: "Você ficou encarregado de representar, em uma imagem, como a IA pode contribuir para a saúde mental. Como prefere fazer isso?",
        alternativas: [
            {
                texto: "Desenha manualmente, com base em ideias discutidas nas aulas de psicologia.",
                afirmacao: "Uniu criatividade e reflexão psicológica para expressar a relação entre IA e bem-estar mental."
            },
            {
                texto: "Utiliza um gerador de imagem por IA com base em uma descrição emocional.",
                afirmacao: "Descobriu como a IA pode materializar sentimentos e ideias subjetivas em formas visuais."
            }
        ]
    },
    {
        enunciado: "Você está fazendo um projeto escolar sobre emoções humanas e inteligência artificial. Um colega sugere usar textos gerados por IA sem alteração. O que você faz? ",
        alternativas: [
            {
                texto: "Revisa e adapta os textos, incluindo sua perspectiva pessoal.",
                afirmacao: "Compreendeu que a IA pode ajudar na construção de ideias, mas a reflexão crítica é essencial."
            },
            {
                texto: "Aceita os textos como estão e entrega o trabalho.",
                afirmacao: "Percebeu que se afastou da análise pessoal e passou a depender demais da IA."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();