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

/* loadLocalStorage !== null ? loadLocalStorage : styleColor();  nao esquecer de parar de chamar a funcao quando ja tiver um saveLocalStorage para iniciar a pagina */

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

  localStorage.setItem('paleta',JSON.stringify(backg));
};

// 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores
const buttomPalette = document.getElementById('button-random-color');
buttomPalette.addEventListener('click', styleColor);
savePalette(idUm, idDois, idTres);


const loadLocalStorage = null;