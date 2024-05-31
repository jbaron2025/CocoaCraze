var cart = {};
var menu = [
    { name: "RASPERRY", price: 6 },
    { name: "CHOCOCHILE", price: 8 },
    { name: "HAZELCRAZE", price: 7 },
    { name: "FLORA", price: 8 },
    { name: "WAZE", price: 6 },
    { name: "FULFILLED", price: 9 },
    { name: "PLAINJANE", price: 5 },
    { name: "SNOWCOCOA", price: 6 },
    { name: "PARISIAN", price: 5 },
];

function populateDropdown() {
    var dropdown = document.getElementById('productDropdown');
    menu.forEach(function (product, index) {
        var option = document.createElement('option');
        option.value = index;
        option.text = product.name;
        dropdown.appendChild(option);
    });
}

function addToCart() {
    var productIndex = document.getElementById('productDropdown').value;
    var quantity = document.getElementById('productQuantity').value;

    if (quantity > 0) {
        var product = menu[productIndex];
        if (cart[productIndex]) {
            cart[productIndex].quantity += parseInt(quantity);
        } else {
            cart[productIndex] = {
                name: product.name,
                price: product.price,
                quantity: parseInt(quantity)
            };
        }
        displayCartItems();
        displayTotalPrice();
    } else {
        alert("Please enter a valid quantity");
    }
}

function displayCartItems() {
    var cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    for (var itemId in cart) {
        var item = cart[itemId];
        var itemDiv = document.createElement('div');
        itemDiv.textContent = `Item: ${item.name} - Price: $${item.price} - Quantity: ${item.quantity}`;
        cartItemsDiv.appendChild(itemDiv);
    }
}

function displayTotalPrice() {
    var totalPriceDiv = document.getElementById('totalPrice');
    var totalPrice = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceDiv.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

document.getElementById('addToCartBtn').addEventListener('click', addToCart);

window.onload = populateDropdown;