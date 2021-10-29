const editProjectFormHandler = async function (event) {
  event.preventDefault();

  const projectTitle = document.querySelector('input[id="projectTitle"]').value;
  const projectContent = document.querySelector('input[id="projectContent"]').value;

  if (body) {
    await fetch('/api/projects/:id', {
      method: 'PUT',
      body: JSON.stringify({
        projectTitle,
        projectContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    document.location.reload();
  }
};

document
  .querySelector('#editProject-form')
  .addEventListener('submit', editProjectFormHandler);