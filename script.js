// Get elements from the DOM
const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const calculateBtn = document.getElementById("calculate");
const totalDisplay = document.getElementById("totalAmount");
const themeToggle = document.getElementById("themeToggle");
const form = document.querySelector(".calculator");

// Function to calculate the tip and total amount
function calculateTotal(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the bill amount and tip percentage from the inputs
  // Convert the input values to numbers using Number()
  let bill = Number(billInput.value);
  let tip = Number(tipSelect.value);

  // Calculate the total amount
  // bill * tip / 100 gives the tip amount, add it to the bill
  let total = bill + (bill * tip / 100);

  // Display the total amount as a decimal using toFixed(2)
  totalDisplay.innerText = `Total: $${total.toFixed(2)}`; // Format number to 2 decimal places
}

// Function to toggle light/dark mode
function toggleTheme() {
  // Toggle the 'dark' class on the body
  let isDark = document.body.classList.toggle("dark");
  // Get the icon inside the button
  const icon = themeToggle.querySelector("i");
  // If dark mode is on, update button text and icon
  if (isDark) {
    themeToggle.innerText = " Switch to Light Mode";
    // Add the moon icon back (since innerText removes it)
    icon.className = "fas fa-sun";
    themeToggle.prepend(icon);
  } else {
    themeToggle.innerText = " Switch to Dark Mode";
    icon.className = "fas fa-moon";
    themeToggle.prepend(icon);
  }
}

// Event listeners
form.addEventListener("submit", calculateTotal);
themeToggle.addEventListener("click", toggleTheme);
