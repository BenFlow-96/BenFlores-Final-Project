// MOBILE NAVIGATION
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// FORM VALIDATION (REQUIRED)
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please complete all required fields.");
    return false;
  }

  alert("Message sent successfully to GreenTech Solutions!");
  return true;
}

// PRODUCT SEARCH FILTER (INTERACTIVE FEATURE)
function filterProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.getElementsByClassName("product");

  for (let i = 0; i < items.length; i++) {
    let text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(input) ? "block" : "none";
  }
}