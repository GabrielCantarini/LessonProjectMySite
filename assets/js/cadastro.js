
const form = document.querySelector('.formulario');

form.addEventListener('submit', (e) => {
  e.preventDefault();


  const usuario = document.querySelector('#formLogin').value;
  const senha = document.querySelector('#senha').value;
  const resultado = document.querySelector('.resultado-cadastro');
  
  const verifica = verificaUsuario();


  function verificaUsuario() {
    const usuariosString = localStorage.getItem(usuario);
    return usuariosString !== null;

  }
  if (!verifica) {
    const usuarios = {
      login: usuario,
      senha: senha
    };

    const jsonString = JSON.stringify(usuarios);
    localStorage.setItem(usuario, jsonString);
    document.querySelector('.formulario').classList.add('hidden');
    resultado.innerHTML = "Sua Conta foi  cadastrada com sucesso.<br>";
    

  } else {
    resultado.innerHTML = 'Erro! Usuário já está cadastrado!';
  }


});

