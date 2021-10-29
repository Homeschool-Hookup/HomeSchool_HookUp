const signupFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector('#userNameInput');
    const useremail = document.querySelector('#userEmailInput');
    const password = document.querySelector('#userPassInput');
    const confirmPassword = document.querySelector('#userConfirmPass');
  
    const response = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        useremail: useremail.value,
        password: password.value,
        confirmPassword: confirmPassword.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signupBtn')
    .addEventListener('submit', signupFormHandler);