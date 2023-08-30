document.addEventListener("DOMContentLoaded", function () {
    var navbarContainer = document.getElementById("navbarContainer");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "navbar.html", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        navbarContainer.innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  });

  function onChangeEmail(){
    toggleButtonDiseble();
    toggleErrorEmail();
  } 
  
  function onChangePassword(){
    toggleButtonDiseble();
    toggleErrorPassword();
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
  function toggleButtonDiseble(){
    const emailValid = isEmailValid();
    document.getElementById('recover-password-button').disabled =!emailValid;
    const passwordValid = isPasswordValid();
    document.getElementById('login-button').disabled =!emailValid || !passwordValid;  
  }