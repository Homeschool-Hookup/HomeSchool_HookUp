const createPodFormHandler = async function (event) {
  event.preventDefault();
  console.log("button clicked");
  const podTitle = document.querySelector('input[id="podTitle"]').value;
  const content = document.querySelector("#content").value;
  const podEmail = document.querySelector("#posterEmail").value;
  console.log(podTitle);
  console.log(content);
  console.log(podEmail);
  if (podTitle && content && podEmail) {
    const response = await fetch("/api/pod/allpodpost/new", {
      method: "POST",
      body: JSON.stringify({
        title: podTitle,
        content: content,
        email: podEmail,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    document.location.replace("/api/pod/allpodpost");
  }
};

document
  .querySelector("#newPod-form")
  .addEventListener("submit", createPodFormHandler);
