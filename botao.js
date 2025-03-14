document.addEventListener('DOMContentLoaded', function() {
    // Garante que os elementos já estão disponíveis no DOM
    var btnEnviar = document.getElementById('btnEnviar');
    if(btnEnviar) {
        btnEnviar.addEventListener('click', acionarBotao);
    }
});

function acionarBotao() {
    // Obtém os valores dos campos pelo id
    var txtNome = document.getElementById('txtNome');
    var txtEmail = document.getElementById('txtEmail');

    // Verifica se os elementos existem
    if (!txtNome || !txtEmail) {
        console.error("Os elementos do formulário não foram encontrados.");
        return;
    }
    
    var textoNome = txtNome.value.trim();
    var textoEmail = txtEmail.value.trim();

    if (textoNome === "") {
        alert("Por favor, preencha o campo Nome.");
        return;
    }
    
    if (textoEmail === "") {
        alert("Por favor, preencha o campo Email.");
        return;
    }
    
    // Se tudo estiver preenchido, você pode continuar com outras ações (ex: enviar formulário)
    console.log("Nome: " + textoNome + " | Email: " + textoEmail);
    alert("Formulário enviado com sucesso!");
}