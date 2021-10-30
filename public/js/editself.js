const selfID = document.querySelector("#selfId").value;
console.log("qqqqqqqqqq", selfID);

const editSelfFormHandler = async function (event) {
  event.preventDefault();

  const selfTitle = document.querySelector("#selfTitle").value;
  const selfContent = document.querySelector("#selfContent").value;

  const respond = await fetch(`/api/self-care/allselfcare/edit/${selfID}`, {
    method: "PUT",
    body: JSON.stringify({
      title: selfTitle,
      content: selfContent,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("000000000000000000", respond);
  document.location.replace("/api/self-care/allselfcare");
};

const deleteSelfHandler = async function () {
  await fetch(`/api/self-care/allselfcare/edit/${selfID}`, {
    method: "DELETE",
  });
  document.location.replace("/api/self-care/allselfcare");
};

document
  .querySelector("#editSelf-form")
  .addEventListener("submit", editSelfFormHandler);

document
  .querySelector("#deleteCare-btn")
  .addEventListener("click", deleteSelfHandler);
