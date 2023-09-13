


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
    toggleErrorSmallPassword();
  }
  function onChangeCadastroRepetPassword(){
    toggleErrorPassordRepet();
    toggleButtonDisebleCadastro();
    toggleErrorSmallPassword();
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
  function isSmallPassword(){
    const password = form.password().value;
    if (password.length < 6) {
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
  function toggleErrorSmallPassword(){
    const password = form.password().value;
      form.smallPassword().style.display = password.length >=6 ? "none" : "block";       
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
    const smallPassword = isSmallPassword();
    document.getElementById('login-button').disabled =!emailValid || !passwordValid || !repetPassword || !smallPassword;
  }
  const form = {
    email: ()=> document.getElementById('email'),
    password: ()=> document.getElementById('password'),
    smallPassword: ()=> document.getElementById('small-password-error')    

  }
  function login(){

    showLoading();
    firebase.auth().signInWithEmailAndPassword(form.email().value, form.password().value).then(response => {
      hideLoading();
      window.location.href = "index.html";
  }).catch(error => {
    hideLoading();
    alert("Usuario ou senha incorretos");
  });
  }
  function registro(){
    showLoading();
    window.location.href = "registro.html ";
  }
  function entrarConta(){
    window.location.href ="login.html";
  }

  function recuperarSenha(){
    showLoading();
    firebase.auth().sendPasswordResetEmail(form.email().value).then(()=> {hideLoading();
    alert('Email enviado com sucesso');
  }).catch(error => {
    hideLoading();
    alert("Email não cadastrado!");
  });
  }

  function registroUsuario(){
    showLoading();
    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(
      email, password
      ).then(() => {
        hideLoading();
        window.location.href = "index.html"
       }).catch(error => {
        hideLoading();
        alert(errorRegistro(error));
       });
  }
  function errorRegistro(error){
    if (error == "auth/email-already-in-use"){
      return "email já está em uso";
    }
    return error.message; 
  }

  var pagAtual = window.location.pathname;
  firebase.auth().onAuthStateChanged(user => {
    if (user){
      if (pagAtual.endsWith('login.html') || pagAtual.endsWith('registro.html')) {
          window.location.href ="index.html";
          const nome = toString(user);
          console.log(nome);
      }
    }
  });
  firebase.auth().onAuthStateChanged(user => {
    
    if (!user){
      if (!pagAtual.endsWith('login.html'))
       {  if (!pagAtual.endsWith('registro.html')) {
           window.location.href ="login.html";              
        const nome = toString(user);
        console.log(nome);
          }
      }
    }
  }); 

  function logOut(){
    firebase.auth().signOut().then(()=>{
        window.location.href ="login.html";
    }).catch(() =>{
        alert("Error ao fazer logout");
    });
}

