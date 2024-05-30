const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Controleer of de ingevoerde gegevens geldig zijn.
  if (name.length < 3 || email.length < 6 || password.length < 6) {
    alert("Invalid input.");
    return;
  }

  // Sla de gebruikersgegevens op in de database.
  database.push({
    name: name,
    email: email,
    password: password,
  });

  // Stuur de gebruiker door naar de inlogpagina.
  window.location.href = "inlog.html";
});

// Definieer de database als een variabele.
let database = [];