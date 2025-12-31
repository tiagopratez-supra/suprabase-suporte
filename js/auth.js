function login() {
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value.trim();

  if (usuario === "suporte" && senha === "supra123") {
    localStorage.setItem("supra_auth", "1");
    window.location.href = "home.html";
  } else {
    document.getElementById("erro-login").innerText = "Usuário ou senha inválidos";
  }
}

function logout() {
  localStorage.removeItem("supra_auth");
  window.location.href = "index.html";
}

function requireAuth() {
  const ok = localStorage.getItem("supra_auth") === "1";
  if (!ok) {
    window.location.href = "index.html";
  }
}
