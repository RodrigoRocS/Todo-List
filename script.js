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
  if (e.target.className === 'completed') {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
};

const criaBtn = () => {
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

window.onload = () => {
  criaHeader();
  criaParagr();
  criaInput();
  criaLO();
  criaBtn();
};
