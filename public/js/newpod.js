const createPodFormHandler = async function (event) {
    event.preventDefault();
  
    const podTitle = document.querySelector('input[id="podTitle"]').value;
    const content = document.querySelector('input[id="content"]').value;
    const posterEmail = document.querySelector('input[id="posterEmail"]').value;

    if (body) {
      await fetch('/api/pod/', {
        method: 'POST',
        body: JSON.stringify({
          podTitle,
          content,
          posterEmail
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      document.location.reload();
    }
  };
  
  document
    .querySelector('#submitPodPost')
    .addEventListener('submit', createPodFormHandler);