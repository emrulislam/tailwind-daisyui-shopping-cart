const addCardBtn = document.querySelectorAll(".add-cart-btn");
const cartContainer = document.getElementById("cart-container");
const resetBtn = document.getElementById("reset-cart");
let cardTitle;
let cardPrice;
let cardImgSrc;
let total = 0;
for (const btn of addCardBtn) {
  btn.addEventListener("click", function (e) {
    cardTitle = btn.parentNode.children[1].innerText;
    cardPrice = Number(btn.parentNode.children[2].children[0].innerText);
    cardImgSrc = btn.parentNode.parentNode.children[0].children[0].src;

    const cartItem = document.createElement("div");
    cartItem.classList.add(
      "my-2",
      "flex",
      "justify-center",
      "items-center",
      "p-2",
      "bg-white",
      "rounded"
    );
    cartItem.innerHTML = `
            <figure>
              <img src="${cardImgSrc}" class="h-28 p-2" alt="" />
            </figure>
            <div>
              <h3 class="text-[#111111] font-bold text-lg my-2">
                ${cardTitle}
              </h3>
              <p class="text-[#11111180] font-normal text-sm">
                <span>${cardPrice}</span> TK
              </p>
            </div>
    `;
    cartContainer.appendChild(cartItem);

    total = total + cardPrice;

    const discountPrice = Number(document.getElementById("discount").innerText);

    // Update totals on the page
    document.getElementById("total-price").innerText = total.toFixed(2);
    document.getElementById("final-total").innerText = (
      total - discountPrice
    ).toFixed(2);
  });
}
resetBtn.addEventListener("click", function () {
  // Clear all cart items
  cartContainer.innerHTML = "";

  // Reset totals
  total = 0;
  document.getElementById("total-price").innerText = total.toFixed(2);
  document.getElementById("final-total").innerText = total.toFixed(2);

  alert("Cart has been cleared!");
});
