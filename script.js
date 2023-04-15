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
// estilizando a class color
const classColor = document.getElementsByClassName('color');
let color = ['papayawhip', 'lawngreen', 'indigo', 'khaki'];

const styleColor = () => {
  for (let i = 1; i < classColor.length; i += 1) {
    const idColor = document.getElementById(i);
    idColor.style.backgroundColor = color[i];
  }
};
styleColor();

//3 - Adicione a cor preta como a primeira cor da paleta de cores
const fixedBlack = () => {
  const idColor = document.getElementById(0);
  idColor.style.backgroundColor = "black";
};
fixedBlack();
