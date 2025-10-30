
const openPopup = document.getElementById("openPopup");
const popupBox = document.getElementById("popupBox");


openPopup.addEventListener("click", function(event) {
  popupBox.classList.toggle("hidden");


  event.stopPropagation();
});


document.addEventListener("click", function(event) {

  if (!popupBox.classList.contains("hidden") && !popupBox.contains(event.target)) {
    popupBox.classList.add("hidden");
  }
});


