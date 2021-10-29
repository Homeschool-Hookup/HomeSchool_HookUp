const editPodFormHandler = async function (event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[id="podTitle"]').value;
  const postContent = document.querySelector('input[id="content"]').value;
  const postEmail = document.querySelector('input[name="posterEmail]').value;

  if (body) {
    await fetch('/api/pod/:id', {
      method: 'PUT',
      body: JSON.stringify({
        postTitle,
        postContent,
        postEmail
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#editPod-form')
  .addEventListener('submit', editPodFormHandler);