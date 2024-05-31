const chocolateTemplate = document.querySelector('[chocolate-template]');
const productList = document.querySelector(".item-list");
const searchInput = document.querySelector("[data-search]");

let products = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    products.forEach(product => {
        const isVisible = product.name.toLowerCase().includes(value);
        product.element.classList.toggle("hide", !isVisible);
    });
});

fetch("product.json")
.then(res => res.json())
.then(data => {
    products = data.items.map(product => {
        const card = chocolateTemplate.content.cloneNode(true).children[0];
        const firstImg = card.querySelector(".primary-img");
        const secondImg = card.querySelector(".secondary-img");
        const itemName = card.querySelector(".item-name");
        const price = card.querySelector(".new-price");
        const descript = card.querySelector(".item-description");
        const itemLink = card.querySelector(".product-link");
        firstImg.src = product.images[0];
        secondImg.src = product.images[1];
        itemName.textContent = product.name;
        itemLink.href = product.link;
        price.textContent = product.price;
        descript.textContent = product.description;
        productList.appendChild(card)
        return { name: product.name, element: card }
    })
})