const createSelfCareFormHandler = async function (event) {
  event.preventDefault();
  const selfTitle = document.querySelector("#selfTitle").value;
  const selfContent = document.querySelector("#selfContent").value;
  console.log(selfContent);

  if (selfTitle && selfContent) {
    const response = await fetch(`/api/self-care/allselfcare/new`, {
      method: "POST",
      body: JSON.stringify({
        title: selfTitle,
        content: selfContent,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/api/self-care/allselfcare");
    } else {
      alert("Failed to Post");
    }
  }
};

document
  .querySelector("#newSelf-form")
  .addEventListener("submit", createSelfCareFormHandler);
