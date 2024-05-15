function validateForm() {
  var nome  = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var nomeError = document.getElementById("nomeError");
  var emailError = document.getElementById("emailError");

  // Verifica se o campo nome está vazio
  if (nome == "") {
      nomeError.innerHTML = "Por favor, preencha o campo nome";
      return false;
  } else {
      nomeError.innerHTML = "";
  }

  // Verifica se o campo email está vazio e se é um email válido
  if (email == "") {
      emailError.innerHTML = "Por favor, preencha o campo email";
      return false;
  } else if (!validateEmail(email)) {
      emailError.innerHTML = "Por favor, insira um email válido";
      return false;
  } else {
      emailError.innerHTML = "";
  }

  // Se tudo estiver preenchido e válido, o formulário pode ser enviado
  return true;
}


   