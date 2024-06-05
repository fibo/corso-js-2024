const form = document.querySelector("form");

const onSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;
  console.log(email);
  console.log(password);
  fetch("http://localhost:3000", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};

//form.onsubmit = onSubmit;
form.addEventListener("submit", onSubmit);

//Gestione Link Google
const linkGoogle = document.querySelector("a");
linkGoogle.onclick = (event) => {
  event.preventDefault();
  window.alert("Ti Avevo Detto Di Non Cliccarmi!");
};
