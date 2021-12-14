d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;
  var selectedName = selectedOption.text;

  console.log(dropdownMenuID);
  console.log(selectedOption);
  console.log(selectedName);
};