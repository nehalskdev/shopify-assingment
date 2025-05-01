"strict mode";
const sizeGuideBtn = document.getElementById("sizeGuideBtn");
const sizeGuideModal = document.getElementById("sizeGuideModal");
const closeBtn = document.querySelector(".close");
const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.querySelector(".main-image img");
const minusBtn = document.querySelector(".quantity-btn.minus");
const plusBtn = document.querySelector(".quantity-btn.plus");
const quantityInput = document.querySelector(".quantity-input");
const sizeOptions = document.querySelectorAll(".size-option");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navbarMenu = document.getElementById("navbarMenu");

sizeGuideBtn.addEventListener("click", () => {
  sizeGuideModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sizeGuideModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === sizeGuideModal) {
    sizeGuideModal.style.display = "none";
  }
});

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    // Remove active class from all thumbnails
    thumbnails.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked thumbnail
    thumb.classList.add("active");
    // Update main image (in a real implementation, you'd use different image sources)
    mainImage.src = thumb.querySelector("img").src;
  });
});

minusBtn.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  if (value > 1) {
    quantityInput.value = value - 1;
  }
});

plusBtn.addEventListener("click", () => {
  let value = parseInt(quantityInput.value);
  quantityInput.value = value + 1;
});

sizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sizeOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
  });
});

mobileMenuToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  mobileMenuToggle.innerHTML = navbarMenu.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarMenu.classList.contains("active")) {
      navbarMenu.classList.remove("active");
      mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });
});
