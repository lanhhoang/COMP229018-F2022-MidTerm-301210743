/*
File name: public/javascripts/appclient.js
Student name: Cong Lanh Hoang
Student ID: 301210743
Date: October 25, 2022
*/

console.log("app script is working.");

if (getTitle == "To-Do List") {
  let deleteButtons = document.querySelectorAll(".btn-danger");

  for (button of deleteButtons) {
    button.addEventListener("click", (event) => {
      if (!confirm("Are you sure?")) {
        event.preventDefault();
      }
    });
  }
}

if (getTitle == "Sign-up Form") {
  const confirm = document.querySelector("input[name=password_confirm]");

  confirm.addEventListener("change", onChange);
}

function onChange() {
  const password = document.querySelector("input[name=password]");
  const confirm = document.querySelector("input[name=password_confirm]");

  if (confirm.value === password.value) {
    confirm.setCustomValidity("");
  } else {
    confirm.setCustomValidity("Passwords do not match");
  }
}
