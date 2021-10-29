const createPodFormHandler = async function (event) {
  event.preventDefault();
  console.log("button clicked")
  const podTitle = document.querySelector('input[id="podTitle"]').value;
  const content = document.querySelector('input[id="content"]').value;
  const posterEmail = document.querySelector('input[id="posterEmail"]').value;

  if (body) {
    await fetch('/api/allpodpost/', {
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

    document.location.replace("/blog-post/new");
  }
};

document
  .querySelector('#newPodPost')
  .addEventListener('click', createPodFormHandler);