function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

/* CONTACT FORM VALIDATION */
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (!name || !email) {
    alert("Please fill out all fields");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}

/* PRODUCT SEARCH FILTER */
function filterProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let items = document.getElementsByClassName("product");

  for (let item of items) {
    item.style.display = item.innerText.toLowerCase().includes(input)
      ? "block"
      : "none";
  }
}