document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            document.getElementById("cart-count").textContent = cartCount;
            alert("Added to Cart!");
        });
    });

    document.querySelector(".shop-btn").addEventListener("click", function () {
        alert("Redirecting to shop...");
    });
});
