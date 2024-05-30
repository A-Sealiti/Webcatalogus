async function displayProducts(baseURL, fileNames, productListId) {
    try {
        const productList = document.getElementById(productListId);

        if (!productList) {
            console.error(`Error: ${productListId} element not found on the page.`);
            return;
        }

        // Leeg de huidige inhoud van de lijst
        productList.innerHTML = '';
        // Loop door de bestandsnamen van de producten
        for (const fileName of fileNames) {
            const response = await fetch(`${baseURL}/${fileName}`);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const products = await response.json();
            //for doorloopt elk product in de products array
            products.forEach(product => {
                //controleerd of product voor kids is en  Converteer de geslachtsaanduiding van het product naar kleine letters voor vergelijking
                if (product.gender.toLowerCase() === 'kids') {
                    const card = document.createElement('li');
                    card.classList.add('card');
                    const priceInEuro = product.price.toFixed(2);//aantal decimalen in een nummer te beperke
                    //card maken
                    card.innerHTML = `
                        <img src="${product.imageURL}" alt="${product.name}" style="width: 200px; height: 200px;">
                        <div class="product-info">
                            <strong>${product.name}</strong><br>
                            ${product.items_left > 0 ? 'In Stock' : '<span style="color: red;">Out of Stock</span>'}<br>
                            Category: ${product.category}<br>
                            Gender: ${product.gender}<br>
                            Price: ${priceInEuro} <span class="euro-symbol">€</span><br>
                            Size:
                            <select>
                                <option value="Choose size" disabled selected>Choose size</option>
                                ${product.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select><br>
                        </div>
                        <button onclick="addToCart('${product.name}', ${priceInEuro})">Add to Cart</button>
                    `;
                    productList.appendChild(card);//nieuwe card-element toe te voegen aan de lijst
                }
            });
        }
    } catch (error) {
        console.error(`Error fetching and displaying products for women:`, error.message);
    }
}
// data voor fetch 
//  element op waarin de producten worden weergegeven
const productContainer = document.querySelector('.product-container');
const baseURL = 'http://localhost:3000/data';//URL voor het ophalen van gegevens
//Lijst met bestandsnamen die in json format moeten zijn
const nikeFiles = ['nike.json', 'nike-tshirts.json', 'nike-trainingspak.json'];
const newBalanceFiles = ['newbalance.json', 'newbalance-tshirts.json', 'newbalance-broek.json'];
const adidasFiles = ['adidas.json', 'adidas-tshirts.json', 'adidas-trainingspak.json'];

displayProducts(baseURL, nikeFiles, 'nikeList');
displayProducts(baseURL, newBalanceFiles, 'newBalanceList');
displayProducts(baseURL, adidasFiles, 'adidasList');
