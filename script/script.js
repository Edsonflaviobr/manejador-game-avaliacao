const cases = [
  {
    title: 'Pós-operatório abdominal',
    communicates: true,
    badge: 'Comunica',
    description: 'Paciente mulher, 41 anos, em pós-operatório imediato de laparotomia por abdome agudo. Encontra-se acordada, orientada e comunicativa. Refere dor intensa na região abdominal, principalmente ao tossir, respirar profundamente e durante as mudanças de decúbito. Relata medo de realizar movimentos por acreditar que poderá romper os pontos cirúrgicos e demonstra ansiedade sempre que necessita ser mobilizada pela equipe.',
    vitals: { hr: '104 bpm', bp: '138/84 mmHg', spo2: '96%', support: 'Cateter nasal' },
    note: 'Apresenta dreno abdominal, curativo cirúrgico extenso e expressão facial de dor durante a mobilização no leito.',
    assessmentHelp: '',
    factors: [
      { id: 'c1f1', text: 'Cirurgia abdominal recente', field: 'biological' },
      { id: 'c1f2', text: 'Dreno abdominal (procedimento invasivo)', field: 'biological' },
      { id: 'c1f3', text: 'Dor intensa', field: 'biological' },
      { id: 'c1f4', text: 'Medo de realizar movimentos', field: 'emotional' },
      { id: 'c1f5', text: 'Ansiedade durante a mobilização', field: 'emotional' }
    ],
    complexityKey: {
      multipleFactors: 'present',
      multipleFields: 'present',
      highImpact: 'present',
      importantInteraction: 'present'
    },
    complexityFeedback: {
      success: 'Você identificou corretamente os aspectos que aumentam a complexidade do manejo deste caso. A presença de múltiplos fatores distribuídos entre os campos biológico e emocional, associada à dor intensa e à interação entre medo, ansiedade e limitação para o movimento, torna o manejo mais complexo. Nesses casos, o fisioterapeuta deve considerar estratégias terapêuticas integradas, individualizadas e reavaliar continuamente a efetividade dos manejos implementados.',
      multipleFactors: 'O caso apresenta diversos fatores biopsicossociais que devem ser considerados em conjunto durante o planejamento do manejo.',
      multipleFields: 'O caso apresenta fatores distribuídos nos campos biológico e emocional. A integração entre diferentes campos biopsicossociais contribui para aumentar a complexidade do manejo.',
      highImpact: 'A dor intensa representa um fator de alta repercussão clínica, pois pode aumentar a experiência dolorosa, comprometer a funcionalidade e exigir estratégias terapêuticas mais abrangentes.',
      importantInteraction: 'Os fatores não devem ser analisados isoladamente. Neste caso, a dor intensa favorece o medo do movimento, que aumenta a ansiedade e pode dificultar a mobilização, tornando o manejo mais complexo.'
    }
  },
  {
    title: 'Trauma torácico em ventilação mecânica',
    communicates: false,
    badge: 'Não comunica',
    description: 'Paciente homem, 28 anos, politraumatizado após acidente automobilístico, internado na UTI em ventilação mecânica invasiva sob sedação leve. Desperta ao chamado, porém não consegue se comunicar verbalmente devido ao tubo orotraqueal. Apresenta fraturas múltiplas de costelas, sendo submetido frequentemente à aspiração traqueal, mudanças de decúbito e outros procedimentos potencialmente dolorosos. Durante esses procedimentos, a equipe observa expressão facial de dor, tensão muscular e assincronia com o ventilador.',
    vitals: { hr: '118 bpm', bp: '152/90 mmHg', spo2: '94%', support: 'Ventilação mecânica invasiva' },
    note: 'No prontuário consta histórico de ansiedade generalizada em acompanhamento psicológico antes da internação. A equipe também registra que, devido à distância, a família consegue realizar visitas apenas esporadicamente, reduzindo sua rede de apoio durante a hospitalização.',
    assessmentHelp: '',
    factors: [
      { id: 'c2f1', text: 'Fraturas múltiplas de costelas', field: 'biological' },
      { id: 'c2f2', text: 'Procedimentos potencialmente dolorosos (aspiração e mobilização)', field: 'biological' },
      { id: 'c2f3', text: 'Ventilação mecânica invasiva dificultando a comunicação da dor', field: 'biological' },
      { id: 'c2f4', text: 'Histórico de ansiedade generalizada', field: 'emotional' },
      { id: 'c2f5', text: 'Rede de apoio familiar reduzida durante a internação', field: 'social' }
    ],
    complexityKey: {
      multipleFactors: 'present',
      multipleFields: 'present',
      highImpact: 'present',
      importantInteraction: 'present'
    },
    complexityFeedback: {
      success: 'O caso apresenta fatores distribuídos nos campos biológico, emocional e social. As fraturas, os procedimentos dolorosos, a dificuldade de comunicação, o histórico de ansiedade e a redução da rede de apoio familiar interagem entre si, aumentando a complexidade do manejo. Nesses casos, recomenda-se uma abordagem integrada, envolvendo avaliação sistemática da dor, estratégias multiprofissionais e reavaliações frequentes das intervenções implementadas.',
      multipleFactors: 'O caso apresenta diversos fatores que precisam ser considerados em conjunto: fraturas, procedimentos dolorosos, dificuldade de comunicação, ansiedade e redução da rede de apoio familiar.',
      multipleFields: 'Os fatores estão distribuídos nos campos biológico, emocional e social. O comprometimento simultâneo desses campos aumenta a complexidade do manejo.',
      highImpact: 'As fraturas múltiplas, os procedimentos potencialmente dolorosos e a impossibilidade de comunicação verbal representam fatores de elevada repercussão clínica, pois dificultam a avaliação da dor e podem comprometer seu manejo adequado.',
      importantInteraction: 'Os fatores identificados atuam de forma integrada. A dificuldade de comunicação pode dificultar o reconhecimento da dor, enquanto a ansiedade e a redução da rede de apoio podem influenciar negativamente a experiência dolorosa e a recuperação do paciente.'
    }
  },
  {
    title: 'Internação prolongada por sepse',
    communicates: true,
    badge: 'Comunica',
    description: 'Paciente homem, 60 anos, em recuperação de sepse pulmonar após internação prolongada na UTI. Encontra-se consciente, orientado e comunicativo. Relata dor lombar crônica de difícil controle, intensificada após o longo período de permanência no leito. Apresenta limitação funcional importante, necessitando de auxílio para sentar-se e iniciar a marcha. Durante a avaliação, demonstra baixa confiança em sua capacidade de voltar a caminhar, afirmando acreditar que dificilmente conseguirá recuperar sua independência. Relata ainda preocupação constante com sua recuperação, dificuldade para dormir e insegurança em relação ao futuro. Possui baixa escolaridade, apresentando dificuldade para compreender algumas orientações fornecidas pela equipe.',
    vitals: { hr: '88 bpm', bp: '126/78 mmHg', spo2: '97%', support: 'Nenhum necessário (ar ambiente)' },
    note: 'Necessita de auxílio para sentar-se e iniciar a marcha. Demonstra baixa confiança na recuperação da independência, preocupação constante, dificuldade para dormir e dificuldade para compreender algumas orientações.',
    assessmentHelp: 'A entrevista deve explorar intensidade, qualidade, fatores de piora e melhora, sem reduzir a avaliação a um número.',
    factors: [
      { id: 'c3f1', text: 'Dor lombar crônica de difícil controle', field: 'biological' },
      { id: 'c3f2', text: 'Limitação funcional importante', field: 'biological' },
      { id: 'c3f3', text: 'Baixa autoeficácia para recuperação funcional', field: 'emotional' },
      { id: 'c3f4', text: 'Ansiedade em relação à recuperação', field: 'emotional' },
      { id: 'c3f5', text: 'Baixa escolaridade dificultando a compreensão das orientações', field: 'social' }
    ],
    complexityKey: {
      multipleFactors: 'present',
      multipleFields: 'present',
      highImpact: 'present',
      importantInteraction: 'present'
    },
    complexityFeedback: {
      success: 'O caso apresenta fatores distribuídos nos campos biológico, emocional e social. A dor crônica, a limitação funcional, a baixa autoeficácia e a ansiedade podem influenciar mutuamente a recuperação funcional, enquanto a baixa escolaridade pode dificultar a compreensão das orientações e a adesão ao tratamento. Esses aspectos aumentam a complexidade do manejo e reforçam a necessidade de estratégias individualizadas, educação em saúde adaptada e reavaliações periódicas.',
      multipleFactors: 'O caso reúne diversos fatores relevantes: dor crônica, limitação funcional, baixa autoeficácia, ansiedade e dificuldade para compreender as orientações. Todos devem ser considerados no planejamento do manejo.',
      multipleFields: 'Há comprometimento dos campos biológico, emocional e social. A presença de fatores nesses diferentes campos exige uma abordagem biopsicossocial integrada.',
      highImpact: 'A dor crônica de difícil controle, a limitação funcional importante e a baixa autoeficácia são fatores frequentemente associados à maior repercussão clínica, podendo dificultar a recuperação e aumentar a complexidade do manejo.',
      importantInteraction: 'Neste caso, os fatores não atuam de forma isolada. A dor persistente pode aumentar a insegurança para o movimento, enquanto a baixa autoeficácia e a ansiedade podem reduzir o engajamento na reabilitação. Além disso, a dificuldade de compreensão das orientações pode comprometer a adesão ao plano terapêutico.'
    }
  },
  {
    title: 'Curativo de cateter e ferida operatória',
    communicates: false,
    badge: 'Não comunica',
    description: 'Paciente homem, 45 anos, em pós-operatório de cirurgia vascular devido trombose venosa profunda, internado na UTI. Encontra-se sonolento, com comunicação verbal limitada, porém desperta aos estímulos. Durante a troca do curativo cirúrgico e a manipulação do acesso venoso central, apresenta discreta expressão facial de desconforto e aumento transitório da tensão muscular. Não há registro de dor crônica prévia, limitações funcionais importantes, ansiedade, depressão ou outras condições emocionais associadas. A família participa ativamente do cuidado e mantém contato frequente com a equipe, oferecendo bom suporte durante a internação.',
    vitals: { hr: '92 bpm', bp: '122/76 mmHg', spo2: '98%', support: 'Máscara simples' },
    note: 'Apresenta discreta expressão facial de desconforto e aumento transitório da tensão muscular durante a troca do curativo e a manipulação do acesso venoso central. A família oferece bom suporte durante a internação.',
    assessmentHelp: 'A escolha segura é uma escala comportamental validada associada ao registro da equipe.',
    factors: [
      { id: 'c4f1', text: 'Troca de curativo e manipulação de acesso invasivo', field: 'biological' },
      { id: 'c4f2', text: 'Comunicação limitada devido ao rebaixamento do nível de consciência', field: 'biological' },
      { id: 'c4f3', text: 'Procedimento cirúrgico recente', field: 'biological' }
    ],
    complexityKey: {
      multipleFactors: 'present',
      multipleFields: 'absent',
      highImpact: 'absent',
      importantInteraction: 'absent'
    },
    complexityFeedback: {
      success: 'Embora o paciente apresente fatores biológicos relacionados ao procedimento cirúrgico e à limitação temporária da comunicação, não foram identificados fatores emocionais ou sociais relevantes, nem fatores de alta repercussão clínica ou interação importante entre diferentes dimensões biopsicossociais. Nesse contexto, o manejo tende a ser menos complexo, mantendo-se a necessidade de monitoramento e reavaliação conforme a evolução clínica.',
      multipleFields: 'Neste caso, os fatores identificados estão restritos ao campo biológico. Não foram descritos fatores emocionais ou sociais relevantes.',
      highImpact: 'Apesar de o paciente necessitar de procedimentos potencialmente dolorosos, o caso não descreve fatores frequentemente associados à alta repercussão clínica, como dor intensa, limitação funcional importante, delirium, ansiedade grave ou outras condições que aumentem significativamente a complexidade do manejo.',
      importantInteraction: 'Os fatores biológicos descritos estão relacionados ao procedimento cirúrgico e à avaliação da dor, mas não há elementos que indiquem interação relevante entre diferentes dimensões biopsicossociais.'
    }
  },
  {
    title: 'Queimadura extensa e dor complexa',
    communicates: true,
    badge: 'Comunica',
    description: 'Paciente mulher, 32 anos, internada na UTI após queimadura de 2º e 3º graus em membro inferior direito. Encontra-se consciente, orientada e comunicativa. Refere dor intensa, principalmente durante as trocas de curativo e mobilização do membro acometido. Apresenta importante limitação funcional, evitando movimentar a perna devido ao medo de intensificação da dor. Durante a avaliação, demonstra ansiedade, medo de piora do quadro e preocupação constante com sua recuperação. Relata dificuldade para dormir desde a internação. Informa ainda histórico de experiência traumática prévia, baixa renda, acesso irregular aos serviços de saúde antes da internação e preocupação por estar distante da família, que não consegue visitá-la com frequência.',
    vitals: { hr: '112 bpm', bp: '146/86 mmHg', spo2: '95%', support: 'Cateter nasal' },
    note: 'Dor intensa durante curativos e mobilização, limitação funcional importante, dificuldade para dormir e rede de apoio familiar reduzida durante a internação.',
    assessmentHelp: 'Além de quantificar intensidade, é preciso escutar qualidade, local, piora, melhora e significado da dor para o paciente.',
    factors: [
      { id: 'c5f1', text: 'Dor intensa', field: 'biological' },
      { id: 'c5f2', text: 'Limitação funcional importante', field: 'biological' },
      { id: 'c5f3', text: 'Queimadura extensa em membro inferior', field: 'biological' },
      { id: 'c5f4', text: 'Ansiedade', field: 'emotional' },
      { id: 'c5f5', text: 'Medo de piora da dor', field: 'emotional' },
      { id: 'c5f6', text: 'Experiência traumática prévia', field: 'emotional' },
      { id: 'c5f7', text: 'Baixa renda', field: 'social' },
      { id: 'c5f8', text: 'Acesso irregular aos serviços de saúde', field: 'social' },
      { id: 'c5f9', text: 'Rede de apoio familiar reduzida durante a internação', field: 'social' }
    ],
    complexityKey: {
      multipleFactors: 'present',
      multipleFields: 'present',
      highImpact: 'present',
      importantInteraction: 'present'
    },
    complexityFeedback: {
      success: 'Este caso reúne fatores de elevada complexidade distribuídos nos campos biológico, emocional e social. A dor intensa, a limitação funcional, a ansiedade, o medo, a experiência traumática prévia e as vulnerabilidades sociais podem potencializar-se mutuamente, tornando o manejo mais complexo. Nesses casos, recomenda-se uma abordagem biopsicossocial integrada, individualizada, interdisciplinar e com reavaliações frequentes da efetividade dos manejos implementados.',
      multipleFactors: 'O caso apresenta diversos fatores biopsicossociais relevantes que devem ser considerados em conjunto durante o planejamento terapêutico.',
      multipleFields: 'Os fatores identificados estão distribuídos entre os campos biológico, emocional e social. A integração dessas dimensões é fundamental para compreender a complexidade do caso.',
      highImpact: 'Dor intensa, limitação funcional importante e ansiedade representam fatores frequentemente associados à alta repercussão clínica e podem aumentar a complexidade do manejo.',
      importantInteraction: 'Neste caso, os fatores influenciam-se mutuamente. A dor intensa pode aumentar o medo e a ansiedade, reduzindo a movimentação e agravando a limitação funcional. Ao mesmo tempo, as vulnerabilidades sociais podem dificultar o enfrentamento da doença e a recuperação.'
    }
  }
];

const assessmentOptions = {
  communicates: [
    { id: 'local', text: 'Investigar local da dor', correct: true },
    { id: 'quality', text: 'Perguntar qualidade da dor', correct: true },
    { id: 'intensity', text: 'Quantificar intensidade com apoio da EVA', correct: true },
    { id: 'worseBetter', text: 'Identificar piora e melhora', correct: true },
    { id: 'listen', text: 'Escutar o relato sem reduzir a dor a um número', correct: true },
    { id: 'impact', text: 'Perguntar impacto da dor na respiração, sono ou mobilidade', correct: true },
    { id: 'meaning', text: 'Explorar o significado da dor para o paciente', correct: true },
    { id: 'previousPain', text: 'Investigar dores prévias e experiências anteriores', correct: true },
    { id: 'reassess', text: 'Registrar e reavaliar após intervenção', correct: true },
    { id: 'onlyEva', text: 'Usar apenas EVA e encerrar avaliação', correct: false },
    { id: 'ignoreNarrative', text: 'Ignorar relato subjetivo se sinais vitais estiverem estáveis', correct: false },
    { id: 'waitVitalChange', text: 'Esperar alteração importante nos sinais vitais para considerar dor', correct: false },
    { id: 'familyInstead', text: 'Substituir o relato do paciente pela opinião do acompanhante', correct: false },
    { id: 'scoreOnly', text: 'Registrar somente um escore e não investigar fatores de piora', correct: false }
  ],
  notCommunicates: [
    { id: 'cpot', text: 'Aplicar CPOT ou BPS', correct: true },
    { id: 'habitos', text: 'Investigar hábitos do paciente com a família', correct: true },
    { id: 'observe', text: 'Associar observação clínica', correct: true },
    { id: 'records', text: 'Consultar registros da equipe', correct: true },
    { id: 'facial', text: 'Observar expressão facial, tensão muscular e adaptação ventilatória', correct: true },
    { id: 'procedure', text: 'Relacionar sinais comportamentais a procedimentos e mobilização', correct: true },
    { id: 'teamReassess', text: 'Registrar achados e reavaliar com a equipe', correct: true },
    { id: 'knownHistory', text: 'Considerar histórico clínico e lesões associadas', correct: true },
    { id: 'familyInfo', text: 'Usar informações da família como apoio, sem substituir a escala', correct: true },
    { id: 'waitVerbal', text: 'Aguardar comunicação verbal para avaliar dor', correct: false },
    { id: 'sedationOnly', text: 'Considerar sedação como ausência de dor', correct: false },
    { id: 'evaNonverbal', text: 'Aplicar EVA mesmo sem comunicação confiável', correct: false },
    { id: 'ignoreTeam', text: 'Desconsiderar registros da equipe e avaliar apenas no plantão atual', correct: false },
    { id: 'vitalsOnly', text: 'Usar somente frequência cardíaca e pressão arterial', correct: false }
  ]
};

const fieldLabels = {
  biological: 'biológico',
  emotional: 'emocional',
  social: 'social'
};


const complexityCriteria = {
  multipleFactors: 'Presença de múltiplos fatores',
  multipleFields: 'Comprometimento de múltiplos campos biopsicossociais',
  highImpact: 'Fatores de alta repercussão clínica',
  importantInteraction: 'Interação importante entre os fatores'
};
const COMPLEXITY_SCORE = 25;
const MAX_CASE_SCORE = 75;
const MAX_TOTAL_SCORE = cases.length * MAX_CASE_SCORE;

let playerName = 'Profissional';
let currentCaseIndex = 0;
let currentStep = 1;
let score = 0;
let currentCaseScore = 0;
let selectedCommunication = null;
let selectedFactorId = null;
let placements = {};
let complexityAnswers = {};
let caseResults = [];

const screens = {
  intro: document.getElementById('intro'),
  video: document.getElementById('video-screen'),
  game: document.getElementById('game-area'),
  transition: document.getElementById('transition-screen'),
  final: document.getElementById('final-screen')
};

const bgAudio = document.getElementById('sound-bg');
const logo = document.getElementById('logo');
const video = document.getElementById('intro-video');
const backToTopButton = document.getElementById('back-to-top');
const readCaseButton = document.getElementById('read-case-btn');
const instructionsModal = document.getElementById('instructions-modal');
const instructionsButton = document.getElementById('instructions-btn');
const closeInstructionsButton = document.getElementById('close-instructions-btn');
const listenInstructionsButton = document.getElementById('listen-instructions-btn');
const instructionsAudio = new Audio('audio/instrucaosimulacao.mp3');

const caseAudios = cases.map((_, index) => new Audio(`audio/caso${index + 1}.mp3`));
const feedbackAudios = {
  good: new Audio('audio/bom.mp3'),
  bad: new Audio('audio/ruim.mp3'),
  correct: new Audio('audio/certo.mp3'),
  wrong: new Audio('audio/errado.mp3'),
  victory: new Audio('audio/vitoria.mp3'),
  gameover: new Audio('audio/gameover.mp3'),
  final: new Audio('audio/final.mp3')
};

let caseAudioActive = false;
let complexityLocked = false;

document.getElementById('case-total').textContent = cases.length;

document.getElementById('start-intro-btn').addEventListener('click', () => {
  showScreen('video');
  playIntroVideo();
});

document.getElementById('start-btn').addEventListener('click', () => {
  const typedName = document.getElementById('player-name').value.trim();
  playerName = typedName || 'Profissional';
  document.getElementById('player-display').textContent = playerName;
  stopIntroVideo();
  showScreen('game');
  loadCase(0);
  tryPlayAudio();
});

document.getElementById('confirm-assessment').addEventListener('click', confirmAssessment);
document.getElementById('confirm-factors').addEventListener('click', confirmFactors);
document.getElementById('confirm-complexity').addEventListener('click', confirmComplexity);
readCaseButton.addEventListener('click', toggleCaseReader);
instructionsButton.addEventListener('click', openInstructions);
closeInstructionsButton.addEventListener('click', closeInstructions);
listenInstructionsButton.addEventListener('click', toggleInstructionsAudio);
instructionsAudio.addEventListener('ended', stopInstructionsAudio);
instructionsAudio.addEventListener('error', stopInstructionsAudio);
video.addEventListener('play', stopInstructionsAudio);
instructionsModal.addEventListener('click', (event) => {
  if (event.target === instructionsModal) {
    closeInstructions();
  }
});

backToTopButton.addEventListener('click', () => {
  document.getElementById('game-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

window.addEventListener('scroll', updateBackToTopVisibility);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && instructionsModal.classList.contains('open')) {
    closeInstructions();
  }
});

document.querySelectorAll('[data-communication]').forEach((button) => {
  button.addEventListener('click', () => chooseCommunication(button.dataset.communication));
});

document.querySelectorAll('[data-complexity]').forEach((button) => {
  button.addEventListener('click', () => chooseComplexity(button.dataset.complexity, button.dataset.value));
});

document.querySelectorAll('.field-column').forEach((column) => {
  column.addEventListener('click', () => {
    if (selectedFactorId) {
      placeFactor(selectedFactorId, column.dataset.field);
    }
  });

  column.addEventListener('dragover', (event) => {
    event.preventDefault();
    column.classList.add('drag-over');
  });

  column.addEventListener('dragleave', () => {
    column.classList.remove('drag-over');
  });

  column.addEventListener('drop', (event) => {
    event.preventDefault();
    column.classList.remove('drag-over');
    const factorId = event.dataTransfer.getData('text/plain');
    placeFactor(factorId, column.dataset.field);
  });
});

logo.addEventListener('error', () => {
  logo.style.display = 'none';
  document.querySelector('.brand-fallback').style.display = 'inline-block';
});

video.addEventListener('error', () => {
  video.style.display = 'none';
});

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('active'));
  screens[name].classList.add('active');
  document.getElementById('game-container').classList.toggle('intro-mode', name === 'intro');
  updateBackToTopVisibility();
}

function openInstructions() {
  instructionsModal.classList.add('open');
  instructionsModal.setAttribute('aria-hidden', 'false');
}

function closeInstructions() {
  stopInstructionsAudio();
  instructionsModal.classList.remove('open');
  instructionsModal.setAttribute('aria-hidden', 'true');
}

function toggleInstructionsAudio() {
  if (!instructionsAudio.paused) {
    stopInstructionsAudio();
    return;
  }

  video.pause();
  instructionsAudio.currentTime = 0;
  instructionsAudio.play().then(() => {
    listenInstructionsButton.classList.add('playing');
    listenInstructionsButton.setAttribute('aria-pressed', 'true');
    listenInstructionsButton.querySelector('.listen-icon').textContent = '■';
    listenInstructionsButton.querySelector('.listen-label').textContent = 'Parar instruções';
  }).catch(stopInstructionsAudio);
}

function stopInstructionsAudio() {
  instructionsAudio.pause();
  instructionsAudio.currentTime = 0;
  listenInstructionsButton.classList.remove('playing');
  listenInstructionsButton.setAttribute('aria-pressed', 'false');
  listenInstructionsButton.querySelector('.listen-icon').textContent = '▶';
  listenInstructionsButton.querySelector('.listen-label').textContent = 'Ouvir instruções';
}

function tryPlayAudio() {
  bgAudio.volume = 0.02;
  bgAudio.play().catch(() => {});
}

function playIntroVideo() {
  video.currentTime = 0;
  video.play().catch(() => {});
}

function stopIntroVideo() {
  video.pause();
  video.currentTime = 0;
}

function loadCase(index) {
  stopCaseReader();
  currentCaseIndex = index;
  currentStep = 1;
  currentCaseScore = 0;
  complexityLocked = false;
  selectedCommunication = null;
  selectedFactorId = null;
  placements = {};
  complexityAnswers = {};

  const currentCase = cases[index];
  document.getElementById('case-counter').textContent = index + 1;
  document.getElementById('patient-title').textContent = currentCase.title;
  document.getElementById('patient-description').textContent = currentCase.description;
  const communicationBadge = document.getElementById('communication-badge');
  communicationBadge.textContent = 'Comunicação a avaliar';
  communicationBadge.className = 'pending';
  document.getElementById('vital-hr').textContent = currentCase.vitals.hr;
  document.getElementById('vital-bp').textContent = currentCase.vitals.bp;
  document.getElementById('vital-spo2').textContent = currentCase.vitals.spo2;
  document.getElementById('vital-support').textContent = currentCase.vitals.support;
  document.getElementById('team-note').textContent = currentCase.note;

  document.querySelectorAll('[data-communication]').forEach((button) => {
    button.classList.remove('selected', 'correct-answer', 'incorrect-answer');
  });

  document.getElementById('assessment-panel').classList.add('hidden');
  document.getElementById('assessment-options').innerHTML = '';
  renderFactors(currentCase.factors);
  resetComplexityStep();
  setStep(1);
  setFeedback('Leia o caso e indique se o paciente consegue comunicar a dor.', 'neutral');
}

function setStep(step) {
  currentStep = step;
  document.querySelectorAll('.game-step').forEach((section) => section.classList.remove('active'));
  document.querySelectorAll('.workflow-step').forEach((item) => {
    const itemStep = Number(item.dataset.step);
    item.classList.toggle('active', itemStep === step);
    item.classList.toggle('done', itemStep < step);
  });

  const sectionMap = {
    1: 'step-communication',
    2: 'step-factors',
    3: 'step-complexity'
  };
  document.getElementById(sectionMap[step]).classList.add('active');
}

function chooseCommunication(choice) {
  selectedCommunication = choice;
  document.querySelectorAll('[data-communication]').forEach((button) => {
    button.classList.toggle('selected', button.dataset.communication === choice);
  });

  renderAssessmentOptions(choice);
}

function renderAssessmentOptions(choice) {
  const panel = document.getElementById('assessment-panel');
  const title = document.getElementById('assessment-title');
  const help = document.getElementById('assessment-help');
  const optionsArea = document.getElementById('assessment-options');
  const currentCase = cases[currentCaseIndex];

  title.textContent = choice === 'communicates'
    ? 'Selecione os itens da avaliação por autorrelato'
    : 'Selecione os itens da avaliação comportamental';
  help.textContent = currentCase.assessmentHelp;
  optionsArea.innerHTML = '';

  buildAssessmentOptions(choice).forEach((option) => {
    const chip = document.createElement('button');
    chip.className = 'assessment-chip';
    chip.type = 'button';
    chip.textContent = option.text;
    chip.dataset.id = option.id;
    chip.dataset.correct = String(option.correct);
    chip.addEventListener('click', () => chip.classList.toggle('selected'));
    optionsArea.appendChild(chip);
  });

  panel.classList.remove('hidden');
}

function confirmAssessment() {
  if (!selectedCommunication) {
    setFeedback('Escolha primeiro se o paciente comunica ou não comunica.', 'warning');
    return;
  }

  const currentCase = cases[currentCaseIndex];
  const correctCommunication = currentCase.communicates ? 'communicates' : 'notCommunicates';
  const chips = [...document.querySelectorAll('.assessment-chip')];
  const selected = chips.filter((chip) => chip.classList.contains('selected'));

  if (!selected.length) {
    setFeedback('Selecione os itens que fazem parte da avaliação antes de confirmar.', 'warning');
    return;
  }

  const selectedCorrect = selected.filter((chip) => chip.dataset.correct === 'true').length;
  const selectedWrong = selected.filter((chip) => chip.dataset.correct === 'false').length;
  const totalCorrect = chips.filter((chip) => chip.dataset.correct === 'true').length;
  const missedCorrect = totalCorrect - selectedCorrect;
  const communicationOk = selectedCommunication === correctCommunication;
  const assessmentOk = selectedCorrect === totalCorrect && selectedWrong === 0;

  chips.forEach((chip) => {
    if (chip.classList.contains('selected') && chip.dataset.correct === 'false') {
      chip.classList.add('wrong-selected');
    }

    if (!chip.classList.contains('selected') && chip.dataset.correct === 'true') {
      chip.classList.add('missed-correct');
    }
  });

  if (communicationOk) {
    addPoints(10);
  }

  const communicationBadge = document.getElementById('communication-badge');
  communicationBadge.textContent = currentCase.badge;
  communicationBadge.className = 'revealed';

  if (assessmentOk) {
    addPoints(15);
  } else {
    addPoints(Math.max(0, selectedCorrect * 3 - selectedWrong * 2 - missedCorrect * 2));
  }

  if (communicationOk && assessmentOk) {
    playFeedbackAudio('good');
    setFeedback('Ótimo. Você reconheceu a comunicação do paciente e selecionou uma avaliação adequada.', 'success');
  } else if (!communicationOk) {
    playFeedbackAudio('bad');
    setFeedback(`Atenção: neste caso, o paciente ${currentCase.communicates ? 'consegue comunicar a dor' : 'não consegue comunicar verbalmente a dor'}. Revise essa primeira decisão.`, 'error');
  } else {
    playFeedbackAudio('bad');
    setFeedback('A direção está boa, mas observe as opções em vermelho: algumas atitudes incorretas podem ter sido escolhidas ou atitudes necessárias podem ter ficado sem seleção.', 'warning');
  }

  const assessmentTransitionDelay = communicationOk && assessmentOk ? 2500 : 8000;
  setTimeout(() => setStep(2), assessmentTransitionDelay);
}

function renderFactors(factors) {
  const bank = document.getElementById('factor-bank');
  bank.innerHTML = '';
  document.querySelectorAll('.drop-zone').forEach((zone) => {
    zone.innerHTML = '';
  });

  shuffleItems(factors).forEach((factor) => {
    const chip = createFactorChip(factor);
    bank.appendChild(chip);
  });
}

function buildAssessmentOptions(choice) {
  const correctOptions = assessmentOptions[choice].filter((option) => option.correct);
  const wrongOptions = assessmentOptions[choice].filter((option) => !option.correct);
  return shuffleItems([
    ...shuffleItems(correctOptions).slice(0, 5),
    ...shuffleItems(wrongOptions).slice(0, 3)
  ]);
}

function shuffleItems(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function createFactorChip(factor) {
  const chip = document.createElement('button');
  chip.className = 'factor-chip';
  chip.type = 'button';
  chip.draggable = true;
  chip.textContent = factor.text;
  chip.dataset.factorId = factor.id;
  chip.dataset.correctField = factor.field;

  chip.addEventListener('click', (event) => {
    event.stopPropagation();

    const currentColumn = chip.closest('.field-column');
    if (selectedFactorId && selectedFactorId !== factor.id && currentColumn) {
      placeFactor(selectedFactorId, currentColumn.dataset.field);
      return;
    }

    selectedFactorId = factor.id;
    document.querySelectorAll('.factor-chip').forEach((item) => item.classList.remove('selected'));
    chip.classList.add('selected');
    setFeedback(`Fator selecionado. Agora escolha o campo ${fieldLabels.biological}, ${fieldLabels.emotional} ou ${fieldLabels.social}.`, 'neutral');
  });

  chip.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', factor.id);
    selectedFactorId = factor.id;
  });

  return chip;
}

function placeFactor(factorId, field) {
  const chip = document.querySelector(`[data-factor-id="${factorId}"]`);
  const target = document.querySelector(`.field-column[data-field="${field}"] .drop-zone`);

  if (!chip || !target) {
    return;
  }

  placements[factorId] = field;
  chip.classList.remove('selected', 'correct', 'incorrect');
  target.appendChild(chip);
  selectedFactorId = null;
  setFeedback(`Fator movido para o campo ${fieldLabels[field]}.`, 'neutral');
}

function confirmFactors() {
  const currentCase = cases[currentCaseIndex];
  const placedCount = Object.keys(placements).length;

  if (placedCount < currentCase.factors.length) {
    setFeedback('Classifique todos os fatores antes de confirmar.', 'warning');
    return;
  }

  let correctCount = 0;
  currentCase.factors.forEach((factor) => {
    const chip = document.querySelector(`[data-factor-id="${factor.id}"]`);
    const isCorrect = placements[factor.id] === factor.field;
    if (isCorrect) {
      correctCount += 1;
    }
    chip.classList.toggle('correct', isCorrect);
    chip.classList.toggle('incorrect', !isCorrect);
  });

  const factorScore = Math.round((correctCount / currentCase.factors.length) * 25);
  addPoints(factorScore);
  if (correctCount === currentCase.factors.length) {
    playFeedbackAudio('good');
    setFeedback('Excelente classificação. Você conectou os achados aos campos corretos da abordagem ampliada.', 'success');
  } else {
    playFeedbackAudio('bad');
    setFeedback(`Você classificou ${correctCount} de ${currentCase.factors.length} fatores corretamente. Observe as marcações antes de avaliar a complexidade do manejo.`, 'warning');
  }

  const factorsTransitionDelay = correctCount === currentCase.factors.length ? 1600 : 5000;
  setTimeout(() => setStep(3), factorsTransitionDelay);
}

function resetComplexityStep() {
  complexityAnswers = {};
  complexityLocked = false;
  document.querySelectorAll('[data-complexity]').forEach((button) => {
    button.classList.remove('selected', 'correct-answer', 'incorrect-answer');
    button.disabled = false;
    button.setAttribute('aria-pressed', 'false');
  });
}

function chooseComplexity(criterion, value) {
  if (complexityLocked) {
    return;
  }

  complexityAnswers[criterion] = value;
  document.querySelectorAll(`[data-complexity="${criterion}"]`).forEach((button) => {
    const selected = button.dataset.value === value;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

function confirmComplexity() {
  const requiredCriteria = Object.keys(complexityCriteria);
  if (requiredCriteria.some((criterion) => !complexityAnswers[criterion])) {
    setFeedback('Responda Presente ou Ausente em todos os quatro aspectos antes de confirmar.', 'warning');
    return;
  }

  complexityLocked = true;
  document.querySelectorAll('[data-complexity]').forEach((button) => {
    button.disabled = true;
  });

  const currentCase = cases[currentCaseIndex];
  const incorrectCriteria = currentCase.complexityKey
    ? requiredCriteria.filter((criterion) => complexityAnswers[criterion] !== currentCase.complexityKey[criterion])
    : [];
  const hasAnswerKey = Boolean(currentCase.complexityKey);
  const allCorrect = hasAnswerKey && incorrectCriteria.length === 0;
  const correctComplexityCount = hasAnswerKey
    ? requiredCriteria.length - incorrectCriteria.length
    : 0;

  if (hasAnswerKey) {
    addPoints((correctComplexityCount / requiredCriteria.length) * COMPLEXITY_SCORE);
  }
  if (hasAnswerKey) {
    document.querySelectorAll('[data-complexity]').forEach((button) => {
      const criterion = button.dataset.complexity;
      const isExpected = button.dataset.value === currentCase.complexityKey[criterion];
      const wasSelected = button.dataset.value === complexityAnswers[criterion];
      button.classList.toggle('correct-answer', isExpected);
      button.classList.toggle('incorrect-answer', wasSelected && !isExpected);
    });
  }

  caseResults.push({
    title: currentCase.title,
    complexityAnswers: { ...complexityAnswers },
    correctComplexity: hasAnswerKey ? allCorrect : null,
    correctComplexityCount,
    incorrectComplexityCriteria: incorrectCriteria,
    score: currentCaseScore
  });

  const continueGame = () => {
    if (currentCaseIndex + 1 < cases.length) {
      showCaseTransition();
    } else {
      stopCaseReader();
      showFinalScreen();
    }
  };

  if (!hasAnswerKey) {
    renderComplexityFeedback({
      title: 'Respostas registradas',
      introduction: 'O gabarito e o feedback específico deste caso serão adicionados na próxima etapa de revisão.',
      details: [],
      type: 'success',
      onContinue: continueGame
    });
    return;
  }

  if (allCorrect) {
    playFeedbackAudio('good');
    createConfetti();
    renderComplexityFeedback({
      title: 'Excelente!',
      introduction: currentCase.complexityFeedback.success,
      details: [],
      type: 'success',
      onContinue: continueGame
    });
    return;
  }

  playFeedbackAudio('bad');
  const details = incorrectCriteria.map((criterion) => ({
    title: complexityCriteria[criterion],
    message: currentCase.complexityFeedback[criterion]
  }));
  renderComplexityFeedback({
    title: incorrectCriteria.length > 1 ? 'Atenção aos aspectos assinalados' : 'Atenção!',
    introduction: incorrectCriteria.length > 1
      ? `Você precisa revisar ${incorrectCriteria.length} aspectos deste caso. Veja todos os feedbacks abaixo.`
      : 'Revise o aspecto abaixo para compreender melhor a complexidade do manejo.',
    details,
    type: 'warning',
    onContinue: continueGame
  });
}

function renderComplexityFeedback({ title, introduction, details, type, onContinue }) {
  const feedback = document.getElementById('feedback');
  feedback.className = `complexity-feedback ${type}`;
  feedback.replaceChildren();

  const heading = document.createElement('strong');
  heading.className = 'feedback-heading';
  heading.textContent = title;
  feedback.appendChild(heading);

  const intro = document.createElement('p');
  intro.textContent = introduction;
  feedback.appendChild(intro);

  details.forEach((detail) => {
    const item = document.createElement('div');
    item.className = 'feedback-detail';

    const itemTitle = document.createElement('strong');
    itemTitle.textContent = detail.title;
    item.appendChild(itemTitle);

    const itemMessage = document.createElement('p');
    itemMessage.textContent = detail.message;
    item.appendChild(itemMessage);
    feedback.appendChild(item);
  });

  const continueButton = document.createElement('button');
  continueButton.type = 'button';
  continueButton.className = 'feedback-continue';
  continueButton.textContent = currentCaseIndex + 1 < cases.length ? 'PRÓXIMO CASO' : 'VER RESULTADO';
  continueButton.addEventListener('click', onContinue, { once: true });
  feedback.appendChild(continueButton);

  setTimeout(() => {
    feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 120);
}

function updateScore() {
  const normalizedScore = getNormalizedScore();
  document.getElementById('score-display').textContent = normalizedScore;
  document.getElementById('score-fill').style.width = `${normalizedScore}%`;
}

function addPoints(points) {
  score += points;
  currentCaseScore += points;
  updateScore();
}

function getNormalizedScore() {
  return Math.min(100, Math.round((score / MAX_TOTAL_SCORE) * 100));
}

function setFeedback(message, type) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.className = '';

  if (type && type !== 'neutral') {
    feedback.classList.add(type);
  }

  if (type === 'error' || type === 'warning') {
    feedback.classList.remove('attention-pulse');
    void feedback.offsetWidth;
    feedback.classList.add('attention-pulse');
    setTimeout(() => {
      feedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 120);
  }
}

function updateBackToTopVisibility() {
  const gameIsActive = screens.game.classList.contains('active');
  const shouldShow = gameIsActive && window.scrollY > 360;
  backToTopButton.classList.toggle('visible', shouldShow);
}

function toggleCaseReader() {
  if (caseAudioActive) {
    stopCaseReader();
    return;
  }

  startCaseReader();
}

function startCaseReader() {
  stopCaseReader(false);

  const audio = caseAudios[currentCaseIndex];
  audio.currentTime = 0;
  audio.onended = () => stopCaseReader();
  audio.onerror = () => stopCaseReader();

  caseAudioActive = true;
  readCaseButton.classList.add('reading');
  readCaseButton.textContent = '■ Parar áudio';
  lowerGameAudioForReading();
  audio.play().catch(() => stopCaseReader());
}

function stopCaseReader(restoreAudio = true) {
  caseAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });

  caseAudioActive = false;

  if (readCaseButton) {
    readCaseButton.classList.remove('reading');
    readCaseButton.textContent = '▶ Ouvir o caso';
  }

  if (restoreAudio) {
    restoreGameAudioAfterReading();
  }
}

function lowerGameAudioForReading() {
  if (!bgAudio.paused) {
    bgAudio.volume = 0.00;
  }
}

function restoreGameAudioAfterReading() {
  if (!bgAudio.paused) {
    bgAudio.volume = 0.02;
  }
}

function playFeedbackAudio(type) {
  const audio = feedbackAudios[type];

  if (!audio) {
    return;
  }

  if (type !== 'final') {
    stopCaseReader();
  }

  audio.pause();
  audio.currentTime = 0;
  audio.volume = type === 'final' ? 0.85 : 0.75;
  audio.play().catch(() => {});
}

function playTransitionAudio() {
  playFeedbackAudio('victory');
  setTimeout(() => playFeedbackAudio('correct'), 450);
}
function showCaseTransition() {
  const transitionScreen = screens.transition;
  const nextCaseIndex = currentCaseIndex + 1;
  const casePercent = Math.round((currentCaseScore / MAX_CASE_SCORE) * 100);

  transitionScreen.classList.add('success');
  transitionScreen.classList.remove('error');
  document.getElementById('transition-icon').textContent = '✓';
  document.getElementById('transition-title').textContent = 'Caso analisado!';
  renderTransitionStars(casePercent);
  document.getElementById('transition-message').textContent =
    'Suas respostas sobre a complexidade do manejo foram registradas. Vamos para o próximo caso clínico.';

  showScreen('transition');
  playTransitionAudio();

  setTimeout(() => {
    showScreen('game');
    loadCase(nextCaseIndex);
  }, 6200);
}

function renderTransitionStars(casePercent) {
  const litStars = Math.round((casePercent / 100) * 5);
  const stars = Array.from({ length: 5 }, (_, index) => {
    const className = index < litStars ? ' class="lit"' : '';
    return `<span${className}>★</span>`;
  }).join('');

  document.getElementById('transition-stars').innerHTML = stars;
}


function showFinalScreen() {
  stopCaseReader();
  bgAudio.pause();
  bgAudio.currentTime = 0;
  playFeedbackAudio('final');
  showScreen('final');
  const maxScore = 100;
  const percentage = getNormalizedScore();
  const totalComplexityAspects = cases.length * Object.keys(complexityCriteria).length;
  const correctComplexityAspects = caseResults.reduce((total, result) => total + result.correctComplexityCount, 0);
  const title = percentage >= 85
    ? 'Simulação concluída com excelente raciocínio clínico'
    : percentage >= 65
      ? 'Simulação concluída com bom desempenho'
      : 'Simulação concluída: vale revisar o conteúdo do guia';

  document.getElementById('final-title').textContent = title;
  document.getElementById('final-message').textContent =
    `${playerName}, você fez ${percentage} de ${maxScore} pontos. A proposta é reconhecer comunicação, escolher instrumentos adequados, organizar fatores e reconhecer aspectos que aumentam a complexidade do manejo.`;

  document.getElementById('final-breakdown').innerHTML = `
    <div class="final-card"><strong>${percentage}/100</strong><span>Pontuação final</span></div>
    <div class="final-card"><strong>${correctComplexityAspects}/${totalComplexityAspects}</strong><span>Aspectos de complexidade corretos</span></div>
    <div class="final-card"><strong>${caseResults.length}/${cases.length}</strong><span>Casos concluídos</span></div>
  `;

  createConfetti();
}

function createConfetti() {
  const colors = ['#7b1fa2', '#00acc1', '#1976d2', '#2e7d32', '#ffd54f'];
  const container = document.getElementById('game-container');

  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement('div');
    piece.className = 'confetti';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${1.8 + Math.random() * 1.7}s`;
    piece.style.opacity = `${0.55 + Math.random() * 0.45}`;
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 3800);
  }
}
