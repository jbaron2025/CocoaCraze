// Function to add item to the cart and store in local storage
function addToCart(itemId, itemName, itemPrice) {
    // Retrieve existing selected items from local storage
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];

    // Add the current item to selected items
    selectedItems.push({ id: itemId, name: itemName, price: itemPrice });

    // Store the updated selected items back to local storage
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    console.log("Added to cart");
}

// Generate HTML for each item and append to items container
const itemsContainer = document.getElementById("items-container");
const items = [
    { id: 1, name: "Item 1", price: 10 },
    { id: 2, name: "Item 2", price: 15 },
    // Add more items here as needed
];

items.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
                <div class="item">
                    <h2>${item.name}</h2>
                    <p>Price: $${item.price}</p>
                    <button onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
                </div>
            `;
    itemsContainer.appendChild(itemDiv);
});