function validar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;


    var mensagem  = document.getElementById("mensagem");

    var nomeLocal = "Daniel Lopes Lisboa";
    var emailLocal = "daniellopeslisboa@gmail.com";
    var telefoneLocal = "61998765432";
    var cpfLocal = "01234567890";


    if (nome == nomeLocal && email == emailLocal && telefone == telefoneLocal && cpf == cpfLocal) {
        alert("Validado com Sucesso! - VOCÊ ESTÁ NO NOSSO BANCO DE DADOS.")
    }
    else {
        alert("OPS! VOCÊ INSERIU OS DADOS INCORRETOS OU NÃO ESTÁ NO NOSSO BANCO DE DADOS");
    }
}
