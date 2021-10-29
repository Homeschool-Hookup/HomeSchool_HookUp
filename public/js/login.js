const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const username = document.querySelector('#userEmail');
    const password = document.querySelector('#userPassword');
  
    const response = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
  };
  
  document
    .querySelector('#logInBtn')
    .addEventListener('submit', loginFormHandler);