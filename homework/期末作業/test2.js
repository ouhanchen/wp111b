var dropdownContent = document.querySelector(".dropdown-content");

function showDropdownContent() {
  dropdownContent.style.display = "block";
}

function hideDropdownContent() {
  dropdownContent.style.display = "none";
}

dropdownContent.addEventListener("mouseover", showDropdownContent);
dropdownContent.addEventListener("mouseout", hideDropdownContent);

var dropdownButton = document.querySelector(".dropbtn");

dropdownButton.addEventListener("click", toggleDropdown);

function toggleDropdown() {
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

