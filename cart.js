// Function to remove a specific item from the cart
function removeItemFromCart(index) {
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    selectedItems.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    renderCart();
}

// Function to clear the entire cart
function clearCart() {
    localStorage.removeItem("selectedItems");
    renderCart();
}

// Function to render the cart items
function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items-container");
    cartItemsContainer.innerHTML = ""; // Clear previous items

    const selectedItems = JSON.parse(localStorage.getItem("selectedItems")) || [];
    let totalPrice = 0;

    selectedItems.forEach((item, index) => {
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
                    <div>
                        <h3>${item.name}</h3>
                        <p>Price: $${item.price}</p>
                        <button onclick="removeItemFromCart(${index})">Remove Item</button>
                    </div>
                `;
        cartItemsContainer.appendChild(itemElement);
        totalPrice += item.price;
    });

    // Update total price display
    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Render the initial cart items
renderCart();