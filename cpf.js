document.getElementById("cadastro-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envio do formulário para teste

    const cpfInput = document.getElementById("cpf");
    const cpfError = document.getElementById("cpf-error");
    const cpf = cpfInput.value;

    if (validarCPF(cpf)) {
        cpfError.style.display = "none";
        alert("Cadastro realizado com sucesso!");
    } else {
        cpfError.textContent = "CPF inválido. Por favor, revise os dados.";
        cpfError.style.display = "block";
    }
});

// Função para validar CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ""); 

    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica tamanho e repetições

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    return resto === parseInt(cpf.charAt(10));
}

