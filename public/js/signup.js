// const signupFormHandler = async function (event) {
//     event.preventDefault();

//     const usernameEl = document.querySelector("#userNameInput-signup");
//     const emailEl = document.querySelector("#userEmailInput-signup");
//     const passwordEl = document.querySelector("#userPassInput-signup");
//     const confirmPassEl = document.querySelector("#userConfirmPass-signup");

//     //add a matching password condition
//     if (passwordEl.value !== confirmPassEl.value) {
//       alert("Password not match. Please try again!");
//     } else {
//       const response = await fetch("/api/user", {
//         method: "POST",
//         body: JSON.stringify({
//           username: usernameEl.value,
//           email: emailEl.value,
//           password: passwordEl.value,
//           confirmPass: confirmPassEl.value,
//         }),
//         headers: { "Content-Type": "application/json" },
//       });

//       if (response.ok) {
//         document.location.replace("/landing");
//       } else {
//         alert("Failed to sign up");
//       }
//     }
//   };

//   document
//     .querySelector("#signup-form")
//     .addEventListener("submit", signupFormHandler);
