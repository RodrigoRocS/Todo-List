const pegaBody = document.getElementsByTagName('body')[0];

const criaHeader = () => {
  const headerDaGalera = document.createElement('header');
  headerDaGalera.innerText = 'Minha Lista de Tarefas';
  pegaBody.appendChild(headerDaGalera);
};

window.onload = () => {
  criaHeader();
};
