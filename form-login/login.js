  document.getElementById('formulario').addEventListener('click', (e)=>{
    
  e.preventDefault();
});

const button = document.querySelector('.btn');
const email = document.querySelector('#Email');
const password = document.querySelector('#Password');
const lab = document.querySelector('.form-control')

button.addEventListener('click', ()=>{
  
  if (email.value == '') {
    email.classList.add('is-invalid')
  } else {
    email.classList.add('is-valid')
  }
})

