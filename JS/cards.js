
document.addEventListener('DOMContentLoaded', function () {
  const userIcon = document.getElementById('user-icon');
  const userOptions = document.querySelector('.user-options');

  // Toon of verberg de gebruikersopties wanneer er op de gebruikersicoon wordt geklikt
  userIcon.addEventListener('click', function (event) {
    event.stopPropagation(); // Voorkom dat het klikken op de gebruikersicoon het document sluit
    userOptions.style.display = userOptions.style.display === 'none' ? 'block' : 'none';
  });

  // Sluit de gebruikersopties als er ergens anders wordt geklikt
  document.addEventListener('click', function () {
    userOptions.style.display = 'none';
  });

  // Voorkom dat het klikken binnen de gebruikersopties deze sluit
  userOptions.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});


function toggleAccordion(section) {
  let options = document.getElementById(section + '-options');
  options.style.display = (options.style.display === 'block') ? 'none' : 'block';
}




let shoppingCart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartOverlay = document.getElementById('cart-overlay');
const cartModal = document.getElementById('cart-modal');

// Functie om producten weer te geven en "Add to Cart" knoppen toe te voegen
async function displayProducts() {
    // Stel dat je een array met producten hebt
    const products = [
        { name: 'Product 1', price: 10 },
        { name: 'Product 2', price: 20 },
        // Voeg meer producten toe indien nodig
    ];

    const productContainer = document.querySelector('.product-container');

    // Loop door de producten en maak voor elk product een "Add to Cart" knop

    // Loop door de producten en genereer de kaarten voor elk product
    products.forEach(product => {
        // Maak een div-element aan voor de kaart
        const card = document.createElement('div');
        card.classList.add('card');

        // HTML-code voor de kaart met productinformatie
        card.innerHTML = `
            <img src="${product.imageURL}" alt="${product.name}" style="width: 200px; height: 200px;">
            <div class="product-info">
                <strong>${product.name}</strong><br>
                ${product.items_left > 0 ? 'In Stock' : '<span style="color: red;">Out of Stock</span>'}<br>
                Category: ${product.category}<br>
                Gender: ${product.gender}<br>
                Price: €${product.price.toFixed(2)}<br>
                Size:
                <select>
                    <option value="Choose size" disabled selected>Choose size</option>
                    ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select><br>
            </div>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        // Voeg de kaart toe aan de container voor producten
        productContainer.appendChild(card);
    });
}

// Definieer de addToCart-functie om producten aan de winkelwagen toe te voegen
function addToCart(productName, productPrice) {
    // Voeg het product toe aan de winkelwagen
    shoppingCart.push({ name: productName, price: productPrice });
    // Werk het aantal items in de winkelwagen bij
    updateCartCount();
    // Toon de items in de winkelwagen
    displayCartItems();
    // Open de winkelwagen wanneer een product wordt toegevoegd
    openCart();
    console.log(`Added ${productName} to cart.`);
    console.log('Shopping Cart:', shoppingCart); // Toon de inhoud van de winkelwagen
}

// Functie om het aantal items in de winkelwagen bij te werken
function updateCartCount() {
    cartCountElement.textContent = shoppingCart.length; // Update het aantal items in de winkelwagen
}

// Functie om de items in de winkelwagen weer te geven
function displayCartItems() {
    // Leeg eerst de container voordat we de items opnieuw weergeven
    cartItemsContainer.innerHTML = '';

    // Loop door de producten in de winkelwagen en voeg ze toe aan de winkelwagencontainer
    shoppingCart.forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${product.name} - €${product.price}`;
        cartItemsContainer.appendChild(cartItem);
    });
}

// Roep de functie aan om producten weer te geven en "Add to Cart" knoppen toe te voegen
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
}); 



// inloggen

// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user" && password === "web_dev") {
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         loginErrorMsg.style.opacity = 1;
//     }
// })


