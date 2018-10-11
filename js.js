button.addEventListener('click', function(){
  // la fonction est : je crée un message dans une boite de dialogue
  if (password.value==confirmPassword.value) {
    password.style.border='3px solid green';
    confirmPassword.style.border='3px solid green';

  } else {
    password.style.border='3px solid red';
    confirmPassword.style.border='3px solid red';
  }
});
