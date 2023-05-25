function removeColor() {
  var selectElement = document.getElementById("colorSelect");
  var selectedValue = selectElement.value;

  if (selectedValue) {
    selectElement.remove(selectElement.selectedIndex);
  }
}
