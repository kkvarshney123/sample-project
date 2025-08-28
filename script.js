const buyButtons = document.querySelectorAll("#buy");

// Loop through each button and add functionality
buyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`You clicked Buy Now for this item`);
  });
});

const cartbuttons= document.querySelectorAll("#add");
cartbuttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(`You clicked add to cart for this item`);
  });
});

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text/icon
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});


