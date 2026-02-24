// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.getElementById("title");
  const submitBtn = document.getElementById("submit");

  if (!titleInput || !submitBtn) {
    console.error("Could not find title input or submit button");
    return;
  }

  // Initialize button state on page load
  function updateSubmitButton() {
    if (titleInput.value.trim() === "") {
      submitBtn.disabled = true;
      submitBtn.classList.add("opacity-50", "cursor-not-allowed");
    } else {
      submitBtn.disabled = false;
      submitBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
  }

  // Set initial state
  updateSubmitButton();

  // Update on input
  titleInput.addEventListener("input", updateSubmitButton);

  // Also check on blur in case user pastes content
  titleInput.addEventListener("blur", updateSubmitButton);
});
