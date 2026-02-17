// Navbar Menu //

const btn = document.getElementById("mobile-menu-button");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// Fetch Product //

const container = document.getElementById("product-container");

let allProducts = [];

// Fetch Products Once //

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    allProducts = products;
    renderProducts(products);
  });

function renderProducts(products) {
  container.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");

    card.innerHTML = `
      <div class="card bg-base-100 w-full shadow-sm">
        <figure>
          <img class="w-full h-48 object-contain p-4" src="${product.image}" />
        </figure>

        <div class="card-body">
          <div class="flex justify-between">
            <p class="rounded-md px-1 h-5 bg-gray-200 text-blue-600 text-sm">
              ${product.category}
            </p>
            <div class="flex">
              <i class="fa-solid fa-star text-yellow-500 mt-1"></i>
              <p class="ml-1 text-gray-400">
                ${product.rating.rate} (${product.rating.count})
              </p>
            </div>
          </div>

          <h1 class="font-bold text-lg line-clamp-2">${product.title}</h1>
          <h2 class="font-semibold text-lg">$${product.price}</h2>
           <div class="flex card-actions">
              <button class="w-[80px] h-[30px] bg-gray-200 rounded-md flex items-center justify-center gap-1">
                <i class="fa-regular fa-eye"></i>
                <span>Details</span>
              </button>
              <button class="w-[80px] h-[30px] bg-blue-500 rounded-md flex items-center justify-center gap-1 text-white">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Add</span>
              </button>
            </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Category Filters

document.getElementById("all").onclick = () => renderProducts(allProducts);

document.getElementById("electronics").onclick = () =>
  renderProducts(allProducts.filter((p) => p.category === "electronics"));

document.getElementById("jewelery").onclick = () =>
  renderProducts(allProducts.filter((p) => p.category === "jewelery"));

document.getElementById("men").onclick = () =>
  renderProducts(allProducts.filter((p) => p.category === "men's clothing"));

document.getElementById("women").onclick = () =>
  renderProducts(allProducts.filter((p) => p.category === "women's clothing"));
