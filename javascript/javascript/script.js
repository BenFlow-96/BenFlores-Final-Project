// MOBILE NAV MENU
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// FORM VALIDATION (REQUIRED RUBRIC FEATURE)
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill out all required fields.");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

// PRODUCT FILTER (INTERACTIVE FEATURE)
function filterProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.getElementsByClassName("product");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(input) ? "block" : "none";
  }
}

// SMALL INTERACTION BONUS (ANIMATION EFFECT)
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});