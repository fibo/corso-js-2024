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
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.error(response.status);
      }
    })
    .then((data) => {
      console.log(data);
      // qua l'utente è loggato,
      // ad esempio si potrebbe redirigere alla homepage
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("ok");
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
