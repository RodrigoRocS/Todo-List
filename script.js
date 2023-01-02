const pegaBody = document.getElementsByTagName('body')[0];

const criaHeader = () => {
  const headerDaGalera = document.createElement('header');
  headerDaGalera.innerText = 'Minha Lista de Tarefas';
  pegaBody.appendChild(headerDaGalera);
};

const criaParagr = () => {
  const paragrDaGalera = document.createElement('p');
  paragrDaGalera.innerText =
    'Clique duas vezes em um item para marcá-lo como completo';
  paragrDaGalera.id = 'funcionamento';
  pegaBody.appendChild(paragrDaGalera);
};

const criaInput = () => {
  const inputDaGalera = document.createElement('input');
  inputDaGalera.id = 'texto-tarefa';
  pegaBody.appendChild(inputDaGalera);
};

const criaLO = () => {
  const olDaGalera = document.createElement('ol');
  olDaGalera.id = 'lista-tarefas';
  pegaBody.appendChild(olDaGalera);
};

const liSelect = (e) => {
  const pegaLis = document.getElementsByTagName('li');
  for (let index = 0; index < pegaLis.length; index += 1) {
    pegaLis[index].style.backgroundColor = 'unset';
  }
  e.target.style.backgroundColor = 'gray';
};

const liCompleted = (e) => {
  e.target.classList.toggle('completed');
};

const criaBtnAdd = () => {
  const btnDaGalera = document.createElement('button');
  const pegaInput = document.getElementById('texto-tarefa');
  const pegaOl = document.getElementById('lista-tarefas');
  btnDaGalera.id = 'criar-tarefa';
  btnDaGalera.innerText = 'Adicionar';
  btnDaGalera.addEventListener('click', () => {
    const liDaGalera = document.createElement('li');
    liDaGalera.innerHTML = pegaInput.value;
    liDaGalera.addEventListener('dblclick', liCompleted);
    liDaGalera.addEventListener('click', liSelect);
    pegaOl.appendChild(liDaGalera);
    pegaInput.value = '';
  });
  pegaBody.appendChild(btnDaGalera);
};

const salvaOl = () => {
  const pegaOl = document.getElementById('lista-tarefas');
  localStorage.setItem('ol', pegaOl.innerHTML);
};

const criaBtnClear = () => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.id = 'apaga-tudo';
  btnDaGalera.innerText = 'Clear';
  btnDaGalera.addEventListener('click', () => {
    const pegaOl = document.getElementById('lista-tarefas');
    pegaOl.innerHTML = '';
  });
  pegaBody.appendChild(btnDaGalera);
};

const criaBtnLimpaCompl = () => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.id = 'remover-finalizados';
  btnDaGalera.innerText = 'Remove Finalizados';
  btnDaGalera.addEventListener('click', () => {
    const pegaOl = document.getElementById('lista-tarefas');
    const pegaCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < pegaCompleted.length; index += 1) {
      pegaOl.removeChild(pegaCompleted[index]);
    }
  });
  pegaBody.appendChild(btnDaGalera);
};

const criaBtnSalvaOl = () => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.id = 'salvar-tarefas';
  btnDaGalera.innerText = 'Salva Lista';
  btnDaGalera.addEventListener('click', salvaOl);
  pegaBody.appendChild(btnDaGalera);
};

const movBaixo = () => {
  const pegaLis = document.getElementsByTagName('li');
  let indexValor = null;
  for (let index = 0; index < pegaLis.length; index += 1) {
    if (pegaLis[index].style.backgroundColor === 'gray') {
      indexValor = index;
    }
  }
  if (indexValor < pegaLis.length - 1 && indexValor !== null) {
    const liAux = pegaLis[indexValor].innerHTML;
    const corAux = pegaLis[indexValor].style.backgroundColor;
    const classAux = pegaLis[indexValor].className;
    pegaLis[indexValor].innerHTML = pegaLis[indexValor + 1].innerHTML;
    pegaLis[indexValor].style.backgroundColor =
      pegaLis[indexValor + 1].style.backgroundColor;
    pegaLis[indexValor].className = pegaLis[indexValor + 1].className;
    pegaLis[indexValor + 1].innerHTML = liAux;
    pegaLis[indexValor + 1].style.backgroundColor = corAux;
    pegaLis[indexValor + 1].className = classAux;
  }
};

const movCima = () => {
  const pegaLis = document.getElementsByTagName('li');
  for (let index = 1; index < pegaLis.length; index += 1) {
    if (pegaLis[index].style.backgroundColor === 'gray') {
      const liAux = pegaLis[index].innerHTML;
      const corAux = pegaLis[index].style.backgroundColor;
      const classAux = pegaLis[index].className;
      pegaLis[index].innerHTML = pegaLis[index - 1].innerHTML;
      pegaLis[index].style.backgroundColor =
        pegaLis[index - 1].style.backgroundColor;
      pegaLis[index].className = pegaLis[index - 1].className;
      pegaLis[index - 1].innerHTML = liAux;
      pegaLis[index - 1].style.backgroundColor = corAux;
      pegaLis[index - 1].className = classAux;
    }
  }
};

const criaBtnCima = () => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.id = 'mover-cima';
  btnDaGalera.innerText = 'Cima';
  btnDaGalera.addEventListener('click', movCima);
  pegaBody.appendChild(btnDaGalera);
};

const criaBtnBaixo = () => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.id = 'mover-baixo';
  btnDaGalera.innerText = 'Baixo';
  btnDaGalera.addEventListener('click', movBaixo);
  pegaBody.appendChild(btnDaGalera);
};

const removeSelecionado = () => {
  const pegaOl = document.getElementById('lista-tarefas');
  const pegaLis = document.getElementsByTagName('li');
  for (let index = 1; index < pegaLis.length; index += 1) {
    if (pegaLis[index].style.backgroundColor === 'gray') {
      pegaOl.removeChild(pegaLis[index]);
    }
  }
};

const criaBtnRemSelec = () => {
  const btnDaGalera = document.createElement('button');
  btnDaGalera.id = 'remover-selecionado';
  btnDaGalera.innerText = 'Remove Seleção';
  btnDaGalera.addEventListener('click', removeSelecionado);
  pegaBody.appendChild(btnDaGalera);
};

const botoesDaGalera = () => {
  criaBtnAdd();
  criaBtnClear();
  criaBtnLimpaCompl();
  criaBtnSalvaOl();
  criaBtnCima();
  criaBtnBaixo();
  criaBtnRemSelec();
};

const carregaOl = () => {
  const pegaOl = document.getElementById('lista-tarefas');
  pegaOl.innerHTML = localStorage.getItem('ol');
};

window.onload = () => {
  criaHeader();
  criaParagr();
  criaInput();
  criaLO();
  botoesDaGalera();
  carregaOl();
};
