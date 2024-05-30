const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Hier zou je een functie aanroepen om de gebruikersgegevens te controleren en op te halen uit de database.
  // Voorbeeld:
  const user = checkCredentials(username, password);

  if (user) {
    // Sla de gebruikersgegevens op in de lokale opslag.
    localStorage.setItem("currentUser", JSON.stringify(user));

    // Stuur de gebruiker door naar de pagina met zijn account.
    window.location.href = "account.html";
  } else {
    // Geef een foutmelding weer.
    alert("Invalid username or password.");
  }
});

// Functie om de gebruikersgegevens te controleren en op te halen uit de database.
function checkCredentials(username, password) {
  // Hier zou je een query uitvoeren op de database om de gebruiker te vinden met de opgegeven gebruikersnaam en wachtwoord.
  // Voorbeeld:
  const user = database.find((user) => user.username === username && user.password === password);

  return user;
}
const user = JSON.parse(localStorage.getItem("currentUser"));

if (user) {
  // Gebruik de gebruikersgegevens om de gebruikersnaam en andere relevante informatie weer te geven op de pagina.
  document.getElementById("username").innerHTML = user.username;
  // ...
}

const database = [
    {
      username: "john",
      password: "password123",
    },
    {
      username: "jane",
      password: "password456",
    },
  ];