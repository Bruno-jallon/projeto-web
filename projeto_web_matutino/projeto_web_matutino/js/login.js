function login() {
    const login_correto = "a";
    const password_correto = "a";

    let login_informado = document.getElementById("username").value;
    let password_informado = document.getElementById("password").value;

    if (login_informado == login_correto && password_informado == password_correto) {
        let continuar_logado = document.getElementById("remember-me");

        if (continuar_logado) {
            document.cookie = "logado=1";
        }

        window.location.href = "index.html";
    } else {
        alert("Erro ao logar, verifique seus dados (T_T)");
    }
}
