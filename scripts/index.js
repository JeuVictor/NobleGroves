
  function onChangeEmail(){
    toggleButtonDiseble();
    toggleErrorEmail();
  } 
  
  function onChangePassword(){
    toggleButtonDiseble();
    toggleErrorPassword();
  } 
  function onChangeCadastroEmail(){
    toggleErrorEmail()
    toggleButtonDisebleCadastro();
  }
  function onChangeCadastroPassword(){
    toggleErrorPassword()
    toggleButtonDisebleCadastro();
  }
  function onChangeCadastroRepetPassword(){
    toggleErrorPassordRepet();
    toggleButtonDisebleCadastro();
  }
  function isEmailValid(){
    const email = document.getElementById('email').value;
    if(!email){
      return false;
    }
    return validateEmail(email);
    
  }
  function isPasswordValid(){
    const password = document.getElementById('password').value
    if (!password){
      return false;
    }
    return true;
  }
  function isRepetPassword(){
    const repetPassword = document.getElementById('confirme_password').value;
    const password = document.getElementById('password').value 
    if (repetPassword != password){
      return false;
    }
    return true;
  }
  
  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  function toggleErrorEmail(){
    const email = document.getElementById('email').value;
    if(!email){
      document.getElementById('email-required-error').style.display = "block";
    }
    else{
      document.getElementById('email-required-error').style.display = "none";
    }
    if(!validateEmail(email)){
      document.getElementById('email-invalid-error').style.display = "block";
    }
    else{
      document.getElementById('email-invalid-error').style.display = "none";
    }
  }
  function toggleErrorPassword(){
    const password = document.getElementById('password').value;
    if(!password){
      document.getElementById('password-required-error').style.display = "block";
    }
    else{
      document.getElementById('password-required-error').style.display = "none";
    }
  }
  function toggleErrorPassordRepet(){
    const password = document.getElementById('password').value;
    const passwordRepet = document.getElementById('confirme_password').value;
    if(password != passwordRepet){
      document.getElementById('password-repet-error').style.display ="block";
    }
    else{
      document.getElementById('password-repet-error').style.display ="none";
    }

  }
  function toggleButtonDiseble(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled =!emailValid;
    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled =!emailValid || !passwordValid;  
  }

  function toggleButtonDisebleCadastro(){
    const emailValid = isEmailValid();
    const passwordValid = isPasswordValid();
    const repetPassword = isRepetPassword();
    document.getElementById('login-button').disabled =!emailValid || !passwordValid || !repetPassword; 
  }
  const form = {
    email: ()=> document.getElementById('email'),
    password: ()=> document.getElementById('password')
    

  }

  function login(){
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
      window.location.href = "index.html";
  }).catch(error => {
    alert("Usuario ou senha incorretos");
  });
  }
  function registro(){
    window.location.href = "registro.html ";
  }
  function entrarConta(){
    window.location.href ="login.html";
  }

