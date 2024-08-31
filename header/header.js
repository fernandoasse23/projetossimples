
//CONFIGURAÇÕES DO HEADER 
const btnMenu = document.getElementById('btnMenu');
const navConteiner = document.querySelector('.nav-conteiner');
const fecButton = document.getElementById('fec');

btnMenu.addEventListener('click', ()=>{
  navConteiner.style.display = 'block';
  btnMenu.style.display = 'none';
});

fecButton.addEventListener('click', function() {
  // Tab to edit
  navConteiner.style.display= 'none';
  btnMenu.style.display='block'
})