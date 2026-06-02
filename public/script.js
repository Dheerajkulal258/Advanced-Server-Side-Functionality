const form = document.getElementById("productForm");
const productList = document.getElementById("productList");
const totalProducts = document.getElementById("totalProducts");

// Load Products
async function loadProducts() {
    try {
        const response = await fetch("/api/products");
        const result = await response.json();

        productList.innerHTML = "";

        totalProducts.innerText = result.data.length;

        result.data.forEach(product => {

            const card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <div class="product-name">
                    ${product.name}
                </div>

                <div class="product-price">
                    ₹${product.price}
                </div>

                <button
                    class="delete-btn"
                    onclick="deleteProduct('${product._id}')"
                >
                    🗑 Delete
                </button>
            `;

            productList.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// Add Product
form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;

    try {

        await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                price
            })
        });

        form.reset();

        loadProducts();

    } catch (error) {
        console.error("Error adding product:", error);
    }

});

// Delete Product
async function deleteProduct(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {

        await fetch(`/api/products/${id}`, {
            method: "DELETE"
        });

        loadProducts();

    } catch (error) {
        console.error("Error deleting product:", error);
    }
}

// Initial Load
loadProducts();