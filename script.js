
// 1 - Adicione à página o título "Paleta de Cores"
const tagH1 = () => {
  const title = document.createElement('h1');
  title.id = 'title';
  title.innerText = 'Paleta de Cores';
  document.body.appendChild(title);
};
tagH1();


