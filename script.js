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

window.onload = () => {
  criaHeader();
  criaParagr();
  criaInput();
  criaLO();
};
