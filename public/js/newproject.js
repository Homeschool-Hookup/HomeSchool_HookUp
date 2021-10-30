const createProjectFormHandler = async function (event) {
  event.preventDefault();

  const projectTitle = document.querySelector('#projectTitle').value;
  const projectContent = document.querySelector('#projectContent').value;
  console.log(projectContent)

  if (projectTitle && projectContent) {
    const response = await fetch('/api/projects/allprojects/new', {
      method: 'POST',
      body: JSON.stringify({
        title: projectTitle,
        content: projectContent
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response)
    if (response.ok) {
      document.location.replace("/api/projects/allprojects");
    } else {
      alert("Failed to Post");
    }
  }
};

document
  .querySelector('#newProject-form')
  .addEventListener('submit', createProjectFormHandler);