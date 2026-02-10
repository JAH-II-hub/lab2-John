const title = document.getElementById("title");
if (!title) {
  console.error("Title element not found");
} else {
  console.log("Title:", title);
}

const firstInfo = document.querySelector(".info");
if (!firstInfo) {
  console.error("Info paragraph not found");
} else {
  console.log("First info paragraph:", firstInfo);
}

const actionButtons = document.querySelectorAll(".action-btn");
if (actionButtons.length === 0) {
  console.error("No action buttons found");
} else {
  console.log("Action buttons:", actionButtons);
}
