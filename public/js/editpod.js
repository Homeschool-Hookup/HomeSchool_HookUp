const podID = document.querySelector("#podUpdateId").value;
console.log("qqqqqqqqqq", podID);
const editPodFormHandler = async function (event) {
  event.preventDefault();

  const podTitle = document.querySelector("#podTitle").value;
  const podContent = document.querySelector("#content").value;
  const podEmail = document.querySelector("#podEmail").value;
  console.log(podTitle);
  console.log(podContent);
  console.log(podEmail);
  const respond = await fetch(`/api/pod/allpodpost/edit/${podID}`, {
    method: "PUT",
    body: JSON.stringify({
      title: podTitle,
      content: podContent,
      email: podEmail,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("000000000000000000", respond);
  document.location.replace("/api/pod/allpodpost");
};

const deletePodHandler = async function () {
  await fetch(`/api/pod/allpodpost/edit/${podID}`, {
    method: "DELETE",
  });
  document.location.replace("/api/pod/allpodpost");
};

document
  .querySelector("#editPod-form")
  .addEventListener("submit", editPodFormHandler);

document
  .querySelector("#deletePod-btn")
  .addEventListener("click", deletePodHandler);
