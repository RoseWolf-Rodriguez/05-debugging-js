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
  if (document.body.className === "dark") {
    document.body.className = "light";
    themeToggle.innerText = "Switch to Dark Mode";
  } else {
    document.body.classList.add("dark");
    themeToggle.innerText = "Switch to Light Mode";
  }
}

// Event listeners
form.addEventListener("submit", calculateTotal);
themeToggle.addEventListener("click", toggleTheme);
