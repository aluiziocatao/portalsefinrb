const btn = document.getElementById('acessibilidade-btn');
const menu = document.getElementById('acessibilidade-menu');

let fontSize = parseFloat(localStorage.getItem('fontSize')) || 16;
let lineHeight = parseFloat(localStorage.getItem('lineHeight')) || 1.6;

// Inicializar estilos
document.body.style.fontSize = fontSize + 'px';
document.body.style.lineHeight = lineHeight;

// Reaplicar classes salvas
const classes = JSON.parse(localStorage.getItem('classes')) || [];
classes.forEach(c => document.body.classList.add(c));

// Abrir/fechar menu
btn.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Eventos dos botões
menu.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    if (action && typeof window[action] === 'function') {
      window[action]();
    }
  });
});

// Funções
function aumentarFonte() {
  fontSize += 1;
  document.body.style.fontSize = fontSize + 'px';
  localStorage.setItem('fontSize', fontSize);
}

function diminuirFonte() {
  fontSize -= 1;
  document.body.style.fontSize = fontSize + 'px';
  localStorage.setItem('fontSize', fontSize);
}

function aumentarEspacamento() {
  lineHeight += 0.1;
  document.body.style.lineHeight = lineHeight;
  localStorage.setItem('lineHeight', lineHeight);
}

function diminuirEspacamento() {
  lineHeight -= 0.1;
  document.body.style.lineHeight = lineHeight;
  localStorage.setItem('lineHeight', lineHeight);
}

function toggleAltoContraste() {
  document.body.classList.toggle('alto-contraste');
  salvarClasses();
}

function toggleTonsCinza() {
  document.body.classList.toggle('tons-cinza');
  salvarClasses();
}

function toggleLinksSublinhados() {
  document.body.classList.toggle('links-sublinhados');
  salvarClasses();
}

function toggleCursorGrande() {
  document.body.classList.toggle('cursor-grande');
  salvarClasses();
}

function resetar() {
  fontSize = 16;
  lineHeight = 1.6;
  document.body.style.fontSize = fontSize + 'px';
  document.body.style.lineHeight = lineHeight;
  document.body.className = '';
  localStorage.clear();
}

function salvarClasses() {
  const classesAtivas = Array.from(document.body.classList);
  localStorage.setItem('classes', JSON.stringify(classesAtivas));
}
