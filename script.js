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

// estilizando a class color
const createColor = () => {
  const value = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += value[Math.floor(Math.random() * 16)];
  };

  return (color !== 'FFFFFF' ? color : createColor());
};

const styleColor = () => {
  for (let i = 1; i < classColor.length; i += 1) {
    const idColor = document.getElementById(i);
    idColor.style.backgroundColor = createColor();
  }
};
styleColor();

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores
