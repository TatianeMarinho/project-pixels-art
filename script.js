const idTop = document.getElementById('top');
const colorPalette = document.getElementById('color-palette');

// 1 - Adicione à página o título "Paleta de Cores"
const tagH1 = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  idTop.appendChild(title);
};
tagH1();

// 2 - Adicione à página uma paleta contendo quatro cores distintas
const createGridPalette = () => {
  for (let i = 0; i < 4; i += 1) {
    const div = document.createElement('div');

    div.className = 'color';
    div.id = i;
    colorPalette.appendChild(div);
  }
};
createGridPalette();

const classColor = document.getElementsByClassName('color');

// 3 - Adicione a cor preta como a primeira cor da paleta de cores
const fixedBlack = () => {
  const idColor = document.getElementById(0);
  idColor.style.backgroundColor = 'black';
};
fixedBlack();

// Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página
const idUm = document.getElementById('1');
const idDois = document.getElementById('2');
const idTres = document.getElementById('3');

const savePalette = (um, dois, tres) => {
  const backg = {
    colorUm: um.style.backgroundColor,
    colorDois: dois.style.backgroundColor,
    colorTres: tres.style.backgroundColor,
  };

  localStorage.setItem('colorPalette', JSON.stringify(backg));
};

const loadPalette = (um, dois, tres) => {
  const backg = JSON.parse(localStorage.getItem('colorPalette'));
  um.style.backgroundColor = backg.colorUm;
  dois.style.backgroundColor = backg.colorDois;
  tres.style.backgroundColor = backg.colorTres;
};

// estilizando a class color
const createColor = () => {
  const value = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += value[Math.floor(Math.random() * 16)];
  }

  return (color !== 'FFFFFF' ? color : createColor());
};

const styleColor = () => {
  for (let i = 1; i < classColor.length; i += 1) {
    const idColor = document.getElementById(i);
    idColor.style.backgroundColor = createColor();
  }
  savePalette(idUm, idDois, idTres);
};

window.onload = () => {
  if (localStorage.getItem('colorPalette')) {
    loadPalette(idUm, idDois, idTres);
  } else {
    styleColor();
  }
};

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores
const buttonPalette = () => {
  const buttomPalette = document.getElementById('button-random-color');
  buttomPalette.addEventListener('click', styleColor);
};
buttonPalette();

// 6 - Adicione à página um quadro contendo 25 pixels
const pixelBoard = document.getElementById('pixel-board');

const pixel25 = () => {
  for (let l = 0; l < 5; l += 1) {
    for (let c = 0; c < 5; c += 1) {
      const div = document.createElement('div');

      div.className = 'pixel';
      // eslint-disable-next-line no-useless-concat
      div.id = 'l' + 'c';

      pixelBoard.appendChild(div);
    }

  }
};
pixel25();


