function cadastrar() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha !== confirmaSenha) {
        alert('As senhas não conferem!');
        return;
    }

    const usuario = {
        nome,
        email,
        senha
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}
