const projectID = document.querySelector("#projectId").value;

const editProjectFormHandler = async function (event) {
  event.preventDefault();

  const projectTitle = document.querySelector("#projectTitle").value;
  const projectContent = document.querySelector("#projectContent").value;

  const respond = await fetch(`/api/projects//allprojects/edit/${projectID}`, {
    method: "PUT",
    body: JSON.stringify({
      title: projectTitle,
      content: projectContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/api/projects//allprojects");
};

const deleteProjectHandler = async function () {
  await fetch(`/api/projects/allprojects/edit/${projectID}`, {
    method: "DELETE",
  });
  document.location.replace("/api/projects//allprojects");
};

document
  .querySelector("#editProject-form")
  .addEventListener("submit", editProjectFormHandler);

document
  .querySelector("#deleteProject-btn")
  .addEventListener("click", deleteProjectHandler);
