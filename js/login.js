function logar() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
        alert('Usuário não encontrado! Faça o cadastro.');
        return;
    }

    if (email === usuario.email && senha === usuario.senha) {
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html'; // Vai pra página principal
    } else {
        alert('E-mail ou senha incorretos!');
    }
}
