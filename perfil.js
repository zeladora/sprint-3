var user1 = {
    usuario: 'miguelmfreire',
    nome: 'Miguel Freire',
    email: 'miguelmagalha@gmail.com',
    senha: 'lordao123'
};
var User = document.getElementById('usuario');
User.innerText = user1.usuario;

var Nome = document.getElementById('nome');
Nome.innerText = user1.nome;

var Email = document.getElementById('email');
Email.innerText = user1.email;

var btnNome = document.querySelector('#btnNome');
var btnEmail = document.querySelector('#btnEmail');
var btnSenha = document.querySelector('#btnSenha');

btnNome.addEventListener('click', function NOME(){
    var nameNome = document.querySelector('#altNome');
    const valueNome = nameNome.value;
});

btnEmail.addEventListener('click', function EMAIL(){
    var nameEmail = document.querySelector('#altEmail');
    const valueEmail = nameEmail.value;
});

btnSenha.addEventListener('click', function SENHA(){
    var nameSenha = document.querySelector('#altSenha');
    const valueSenha = nameSenha.value;
});
var user1 = {
    usuario: 'miguelmfreire',
    nome: valueNome,
    email: valueEmail,
    senha: valueSenha
};

var User = document.getElementById('usuario');
User.innerText = user1.usuario;

var Nome = document.getElementById('nome');
Nome.innerText = valueNome;

var Email = document.getElementById('email');
Email.innerText = valueEmail;