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
const id0 = document.getElementById(0);



// 3 - Adicione a cor preta como a primeira cor da paleta de cores
const fixedBlack = () => {
  id0.style.backgroundColor = '#000000';
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

  if (color !== '#FFFFFF' || color !== '#000000') {
    return color;
  }
  return createColor;
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
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');

    div.className = 'pixel';
    div.id = i;

    pixelBoard.appendChild(div);
  }
};
pixel25();

// 8 - Defina a cor preta como cor inicial da paleta de cores
classColor[0].classList.add('selected');

// 9 - Crie uma função para selecionar uma cor na paleta de cores
const selectColor = () => {
  for (let i = 0; i < classColor.length; i += 1) {
    classColor[i].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
};
selectColor();

// 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores
const pixel = document.querySelectorAll('.pixel');
const colorPixel = () => {
  for (const p of pixel) {
    p.addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      p.style.backgroundColor = selected.style.backgroundColor;
    });
  }
};
colorPixel();

// 11 - Crie um botão que retorne a cor do quadro para a cor inicial
const clearBoard = document.getElementById('clear-board');
const buttomClean = () => {
  for (const p of pixel) {
    clearBoard.addEventListener('click', () => {
      p.style.backgroundColor = '#FFFFFF';
    });
  }
};
buttomClean();