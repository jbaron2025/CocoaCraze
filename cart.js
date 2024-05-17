var cart = {};
var menu = [
    { id: "aaa", name: "PlainJane", price: 5 }
];

// Checks if id is valid
function checkValid(ident) {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].id == ident) return true;
    }
    return false;
}

// Gets item from valid id
function getItem(ident) {
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].id == ident) return menu[i];
    }
    return null;
}

// Function to add item to cart
function addItemToCart(ident, itemQuantity) {
    if (cart[ident]) {
        cart[ident].quantity += 1;
    } else {
        var item = getItem(ident);
        cart[ident] = item;
        cart[ident].quantity = itemQuantity;
    }
    console.log('Item added to cart:', item);
    console.log('Current cart:', cart);
    displayCartItems();
    displayTotalPrice();
}

// Function to display cart items
function displayCartItems() {
    var cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    for (var itemId in cart) {
        var item = cart[itemId];
        var itemDiv = document.createElement('div');
        itemDiv.textContent = 'Item: ' + item.name + ' - Price: $' + item.price + ' - Quantity: ' + item.quantity;
        cartItemsDiv.appendChild(itemDiv);
    }
}

// Function to display total price
function displayTotalPrice() {
    var totalPriceDiv = document.getElementById('totalPrice');
    var totalPrice = 0;
    for (var itemId in cart) {
        var item = cart[itemId];
        totalPrice += item.price * item.quantity;
    }
    totalPriceDiv.textContent = 'Total Price: $' + totalPrice.toFixed(2);
}

// Event listener for button
document.getElementById('addToCartBtn').addEventListener('click', function () {
    var itemId = prompt("Enter the item ID:");
    var itemQuantity = prompt("Enter Quantity:");
    if (checkValid(itemId)) {
        addItemToCart(itemId, itemQuantity);
    } else {
        alert("Invalid input. Please enter valid information.");
    }
});
