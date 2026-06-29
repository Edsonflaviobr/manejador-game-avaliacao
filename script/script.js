const cases = [
  {
    title: 'Pós-operatório abdominal',
    communicates: true,
    badge: 'Comunica',
    description: 'Paciente acordada, orientada, falante, relata dor abdominal ao tossir e ao mudar de decúbito. Refere medo de respirar fundo por antecipar piora da dor.',
    vitals: { hr: '104 bpm', bp: '138/84', spo2: '96%', support: 'Cateter nasal' },
    note: 'Cirurgia abdominal recente, dreno em flanco direito, expressão facial tensa durante mobilização.',
    assessmentHelp: 'Neste caso, a EVA pode apoiar a quantificação, mas a escuta clínica continua sendo central.',
    factors: [
      { id: 'c1f1', text: 'Cirurgia abdominal recente', field: 'biological' },
      { id: 'c1f2', text: 'Dreno e procedimento invasivo', field: 'biological' },
      { id: 'c1f3', text: 'Medo de respirar fundo', field: 'emotional' },
      { id: 'c1f4', text: 'Ansiedade ao movimentar-se', field: 'emotional' },
      { id: 'c1f5', text: 'Acompanhante presente e colaborativo', field: 'social' }
    ],
    risk: 'moderate',
    riskReason: 'Há vários fatores biológicos e emocionais, com fator social protetor. O risco é moderado por envolver até dois campos principais.'
  },
  {
    title: 'Ventilação mecânica e sedação leve',
    communicates: false,
    badge: 'Não comunica',
    description: 'Paciente em ventilação mecânica, desperta ao chamado, mas não consegue responder verbalmente. Apresenta tensão muscular e sincronia ventilatória variável.',
    vitals: { hr: '118 bpm', bp: '152/90', spo2: '94%', support: 'VM invasiva' },
    note: 'Procedimento de aspiração recente, fratura de costelas registrada, equipe relata caretas durante higiene.',
    assessmentHelp: 'Como o paciente não comunica verbalmente, a avaliação deve usar escala comportamental validada e observação clínica.',
    factors: [
      { id: 'c2f1', text: 'Fratura de costelas', field: 'biological' },
      { id: 'c2f2', text: 'Aspiração e procedimentos dolorosos', field: 'biological' },
      { id: 'c2f3', text: 'Impossibilidade de verbalizar dor', field: 'biological' },
      { id: 'c2f4', text: 'Agitação ao toque da equipe', field: 'emotional' },
      { id: 'c2f5', text: 'Família sem acesso no momento', field: 'social' }
    ],
    risk: 'high',
    riskReason: 'Existem múltiplos fatores biológicos, um componente emocional e um fator social, distribuídos nos três campos. Isso exige cuidado integrado.'
  },
  {
    title: 'Dor crônica prévia e internação prolongada',
    communicates: true,
    badge: 'Comunica',
    description: 'Paciente consciente relata lombalgia crônica, piora após longo período no leito e sensação de pouca confiança para caminhar novamente.',
    vitals: { hr: '88 bpm', bp: '126/78', spo2: '97%', support: 'Ar ambiente' },
    note: 'Sem novo procedimento invasivo nas últimas 24 horas. Escolaridade baixa e dificuldade para compreender orientações escritas.',
    assessmentHelp: 'A entrevista deve explorar intensidade, qualidade, fatores de piora e melhora, sem reduzir a avaliação a um número.',
    factors: [
      { id: 'c3f1', text: 'Dor lombar prévia', field: 'biological' },
      { id: 'c3f2', text: 'Limitação funcional pelo leito', field: 'biological' },
      { id: 'c3f3', text: 'Baixa autoeficácia para caminhar', field: 'emotional' },
      { id: 'c3f4', text: 'Escolaridade baixa', field: 'social' },
      { id: 'c3f5', text: 'Dificuldade para compreender orientações', field: 'social' }
    ],
    risk: 'high',
    riskReason: 'Os fatores aparecem nos três campos: biológico, emocional e social. A avaliação deve integrar essas dimensões.'
  },
  {
    title: 'Procedimento invasivo isolado',
    communicates: false,
    badge: 'Não comunica',
    description: 'Paciente sonolento, sem resposta verbal consistente. Durante troca de curativo, apresenta discreta expressão facial de desconforto.',
    vitals: { hr: '92 bpm', bp: '122/76', spo2: '98%', support: 'Máscara simples' },
    note: 'Sem história de dor prévia conhecida. Família informa boa adaptação prévia ao tratamento.',
    assessmentHelp: 'A escolha segura é uma escala comportamental validada associada ao registro da equipe.',
    factors: [
      { id: 'c4f1', text: 'Troca de curativo dolorosa', field: 'biological' },
      { id: 'c4f2', text: 'Sonolência limita comunicação', field: 'biological' },
      { id: 'c4f3', text: 'Rede familiar disponível', field: 'social' }
    ],
    risk: 'low',
    riskReason: 'Há poucos fatores, principalmente concentrados no campo biológico, com apoio social preservado. O risco é baixo.'
  },
  {
    title: 'Paciente vulnerável e com ansiedade intensa',
    communicates: true,
    badge: 'Comunica',
    description: 'Paciente relata dor intensa em membro inferior, medo de piora, dificuldade para dormir e preocupação por estar distante da família.',
    vitals: { hr: '112 bpm', bp: '146/86', spo2: '95%', support: 'Cateter nasal' },
    note: 'Ferida extensa em membro inferior, baixa renda, acesso irregular a cuidado antes da internação e histórico de trauma.',
    assessmentHelp: 'Além de quantificar intensidade, é preciso escutar qualidade, local, piora, melhora e significado da dor para o paciente.',
    factors: [
      { id: 'c5f1', text: 'Ferida extensa em membro inferior', field: 'biological' },
      { id: 'c5f2', text: 'Dor intensa e limitação funcional', field: 'biological' },
      { id: 'c5f3', text: 'Ansiedade e medo de piora', field: 'emotional' },
      { id: 'c5f4', text: 'Histórico de trauma', field: 'emotional' },
      { id: 'c5f5', text: 'Baixa renda e acesso irregular ao cuidado', field: 'social' },
      { id: 'c5f6', text: 'Distância da rede familiar', field: 'social' }
    ],
    risk: 'high',
    riskReason: 'Há vários fatores simultâneos nos três campos. O caso pede cuidado integrado e plano multiprofissional.'
  }
];

const assessmentOptions = {
  communicates: [
    { id: 'local', text: 'Investigar local da dor', correct: true },
    { id: 'quality', text: 'Perguntar qualidade da dor', correct: true },
    { id: 'intensity', text: 'Quantificar intensidade com apoio da EVA', correct: true },
    { id: 'worseBetter', text: 'Identificar piora e melhora', correct: true },
    { id: 'onlyEva', text: 'Usar apenas EVA e encerrar avaliação', correct: false },
    { id: 'ignoreNarrative', text: 'Ignorar relato subjetivo se sinais vitais estiverem estáveis', correct: false }
  ],
  notCommunicates: [
    { id: 'cpot', text: 'Aplicar CPOT quando indicado', correct: true },
    { id: 'bps', text: 'Aplicar BPS quando indicado', correct: true },
    { id: 'observe', text: 'Associar observação clínica', correct: true },
    { id: 'records', text: 'Consultar registros da equipe', correct: true },
    { id: 'waitVerbal', text: 'Aguardar comunicação verbal para avaliar dor', correct: false },
    { id: 'sedationOnly', text: 'Considerar sedação como ausência de dor', correct: false }
  ]
};

const fieldLabels = {
  biological: 'biológico',
  emotional: 'emocional',
  social: 'social'
};

const riskLabels = {
  low: 'baixo risco',
  moderate: 'risco moderado',
  high: 'alto risco'
};

let playerName = 'Profissional';
let currentCaseIndex = 0;
let currentStep = 1;
let score = 0;
let selectedCommunication = null;
let selectedFactorId = null;
let placements = {};
let caseResults = [];

const screens = {
  intro: document.getElementById('intro'),
  video: document.getElementById('video-screen'),
  game: document.getElementById('game-area'),
  final: document.getElementById('final-screen')
};

const bgAudio = document.getElementById('sound-bg');
const logo = document.getElementById('logo');
const video = document.getElementById('intro-video');
const backToTopButton = document.getElementById('back-to-top');

document.getElementById('case-total').textContent = cases.length;

document.getElementById('start-intro-btn').addEventListener('click', () => {
  showScreen('video');
});

document.getElementById('start-btn').addEventListener('click', () => {
  const typedName = document.getElementById('player-name').value.trim();
  playerName = typedName || 'Profissional';
  document.getElementById('player-display').textContent = playerName;
  showScreen('game');
  loadCase(0);
  tryPlayAudio();
});

document.getElementById('confirm-assessment').addEventListener('click', confirmAssessment);
document.getElementById('confirm-factors').addEventListener('click', confirmFactors);

backToTopButton.addEventListener('click', () => {
  document.getElementById('game-area').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

window.addEventListener('scroll', updateBackToTopVisibility);

document.querySelectorAll('[data-communication]').forEach((button) => {
  button.addEventListener('click', () => chooseCommunication(button.dataset.communication));
});

document.querySelectorAll('[data-risk]').forEach((button) => {
  button.addEventListener('click', () => chooseRisk(button.dataset.risk));
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

function tryPlayAudio() {
  bgAudio.volume = 0.28;
  bgAudio.play().catch(() => {});
}

function loadCase(index) {
  currentCaseIndex = index;
  currentStep = 1;
  selectedCommunication = null;
  selectedFactorId = null;
  placements = {};

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
    button.classList.remove('selected');
  });

  document.getElementById('assessment-panel').classList.add('hidden');
  document.getElementById('assessment-options').innerHTML = '';
  renderFactors(currentCase.factors);
  renderRiskSummary();
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
    3: 'step-risk'
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

  assessmentOptions[choice].forEach((option) => {
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
  const communicationOk = selectedCommunication === correctCommunication;
  const assessmentOk = selectedCorrect === totalCorrect && selectedWrong === 0;

  chips.forEach((chip) => {
    if (chip.classList.contains('selected') && chip.dataset.correct === 'false') {
      chip.classList.add('wrong-selected');
    }
  });

  if (communicationOk) {
    score += 10;
  }

  const communicationBadge = document.getElementById('communication-badge');
  communicationBadge.textContent = currentCase.badge;
  communicationBadge.className = 'revealed';

  if (assessmentOk) {
    score += 15;
  } else {
    score += Math.max(0, selectedCorrect * 3 - selectedWrong * 2);
  }

  updateScore();

  if (communicationOk && assessmentOk) {
    setFeedback('Ótimo. Você reconheceu a comunicação do paciente e selecionou uma avaliação adequada.', 'success');
  } else if (!communicationOk) {
    setFeedback(`Atenção: neste caso, o paciente ${currentCase.communicates ? 'consegue comunicar a dor' : 'não consegue comunicar verbalmente a dor'}. Revise essa primeira decisão.`, 'error');
  } else {
    setFeedback('A direção está boa, mas a avaliação precisa evitar atalhos. EVA não substitui escuta, e sedação não significa ausência de dor.', 'warning');
  }

  setTimeout(() => setStep(2), 1400);
}

function renderFactors(factors) {
  const bank = document.getElementById('factor-bank');
  bank.innerHTML = '';
  document.querySelectorAll('.drop-zone').forEach((zone) => {
    zone.innerHTML = '';
  });

  factors.forEach((factor) => {
    const chip = createFactorChip(factor);
    bank.appendChild(chip);
  });
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
  score += factorScore;
  updateScore();
  renderRiskSummary();

  if (correctCount === currentCase.factors.length) {
    setFeedback('Excelente classificação. Você conectou os achados aos campos corretos da abordagem ampliada.', 'success');
  } else {
    setFeedback(`Você classificou ${correctCount} de ${currentCase.factors.length} fatores corretamente. Observe as marcações antes de estratificar o risco.`, 'warning');
  }

  setTimeout(() => setStep(3), 1600);
}

function renderRiskSummary() {
  const currentCase = cases[currentCaseIndex];
  const counts = { biological: 0, emotional: 0, social: 0 };

  currentCase.factors.forEach((factor) => {
    counts[factor.field] += 1;
  });

  document.getElementById('risk-summary').textContent =
    `Síntese do caso: ${counts.biological} fator(es) biológico(s), ${counts.emotional} emocional(is) e ${counts.social} social(is).`;
}

function chooseRisk(risk) {
  const currentCase = cases[currentCaseIndex];
  const isCorrect = risk === currentCase.risk;

  if (isCorrect) {
    score += 25;
    setFeedback(`Correto: ${riskLabels[risk]}. ${currentCase.riskReason}`, 'success');
    createConfetti();
  } else {
    setFeedback(`A melhor estratificação é ${riskLabels[currentCase.risk]}. ${currentCase.riskReason}`, 'error');
  }

  caseResults.push({
    title: currentCase.title,
    correctRisk: isCorrect
  });

  updateScore();

  setTimeout(() => {
    if (currentCaseIndex + 1 < cases.length) {
      loadCase(currentCaseIndex + 1);
    } else {
      showFinalScreen();
    }
  }, 2400);
}

function updateScore() {
  document.getElementById('score-display').textContent = score;
}

function setFeedback(message, type) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.className = '';

  if (type && type !== 'neutral') {
    feedback.classList.add(type);
  }
}

function updateBackToTopVisibility() {
  const gameIsActive = screens.game.classList.contains('active');
  const shouldShow = gameIsActive && window.scrollY > 360;
  backToTopButton.classList.toggle('visible', shouldShow);
}

function showFinalScreen() {
  showScreen('final');
  const maxScore = cases.length * 75;
  const percentage = Math.round((score / maxScore) * 100);
  const correctRisks = caseResults.filter((result) => result.correctRisk).length;
  const title = percentage >= 85
    ? 'Ronda concluída com excelente raciocínio clínico'
    : percentage >= 65
      ? 'Ronda concluída com bom desempenho'
      : 'Ronda concluída: vale revisar o fluxo';

  document.getElementById('final-title').textContent = title;
  document.getElementById('final-message').textContent =
    `${playerName}, você fez ${score} de ${maxScore} pontos. A proposta é reconhecer comunicação, escolher instrumentos adequados, organizar fatores e estratificar o risco de forma integrada.`;

  document.getElementById('final-breakdown').innerHTML = `
    <div class="final-card"><strong>${percentage}%</strong><span>Aproveitamento</span></div>
    <div class="final-card"><strong>${correctRisks}/${cases.length}</strong><span>Riscos corretos</span></div>
    <div class="final-card"><strong>${score}</strong><span>Pontos</span></div>
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
