const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#userName");
  const passwordEl = document.querySelector("#userPassword");

  const response = await fetch("api/user/login", {
    method: "POST",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);

  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to login");
  }
};

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);
