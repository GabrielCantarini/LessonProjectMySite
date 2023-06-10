
function calculoEscopo() {

    const form = document.querySelector('.formSubmenu');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const usuario = document.querySelector('.login').value;
      const senha = document.querySelector('.senha').value;
      const verifica = document.querySelector('.resultado-login');
  
  
      const usuariosString = localStorage.getItem(usuario);
      if (usuariosString) {
  
        const usuario2 = JSON.parse(usuariosString);
        
        if (usuario2.senha === senha) {
          alert('Login Realizado');
          window.location.href = "pt-br/about.html";
        } else{
          verifica.innerHTML = 'Usuário ou Senha incorreta!';
        }
      }else{
        verifica.innerHTML = 'Essa conta não existe!';
      }
  
  
  
  
  
  
      });
  }
  
  calculoEscopo();
