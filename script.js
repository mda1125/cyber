// This script will be used to add interactivity to the website.
// For example, it could be used to create a quiz that tests users' knowledge of cybersecurity.
// It could also be used to create a chatbot that answers users' questions about cybersecurity.

// Function to update the date and time
function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString(); // Format date and time based on locale
  const dateTimeElement = document.getElementById('datetime');
  if (dateTimeElement) {
    dateTimeElement.textContent = dateTimeString;
  }
}

// Call the function when the page loads
window.onload = updateDateTime;
