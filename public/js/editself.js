const editSelfCareFormHandler = async function (event) {
    event.preventDefault();
  
    const selfCareTitle = document.querySelector('input[id="selfTitle"]').value;
    const selfCareContent = document.querySelector('input[id="selfContent"]').value;
  
    if (body) {
      await fetch('/api/self-care/:id', {
        method: 'PUT',
        body: JSON.stringify({
          selfCareTitle,
          selfCareContent
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
    .addEventListener('submit', editSelfCareFormHandler);