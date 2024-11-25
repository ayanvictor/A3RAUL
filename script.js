// Usuário cadastrado previamente para login
const usuarioCadastrado = {
    usuario: "admin",
    senha: "dk2024"
};

// Login - Validação
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita envio do formulário

    const usuarioInput = document.getElementById("usuario").value;
    const senhaInput = document.getElementById("senha").value;
    const loginError = document.getElementById("login-error");

    if (usuarioInput === usuarioCadastrado.usuario && senhaInput === usuarioCadastrado.senha) {
        loginError.style.display = "none";
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    } else {
        loginError.textContent = "Usuário ou senha inválidos. Tente novamente.";
        loginError.style.display = "block";
    }
});







