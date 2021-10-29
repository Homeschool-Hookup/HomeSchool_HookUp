const createSelfCareFormHandler = async function (event) {
    event.preventDefault();
  
    const selfTitle = document.querySelector('input[id="selfTitle"]').value;
    const selfContent = document.querySelector('input[id="selfContent"]').value;

    if (body) {
      await fetch('/api/self-care/', {
        method: 'POST',
        body: JSON.stringify({
          selfTitle,
          selfContent
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#submitCare')
    .addEventListener('submit', createSelfCareFormHandler);