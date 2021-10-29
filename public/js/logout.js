const logout = async function() {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to log out');
    }
};
  
document
  .querySelector('#logout')
  .addEventListener('click', logout);
  