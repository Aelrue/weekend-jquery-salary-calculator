let employees = [];

console.log("script sourced");

$(document).ready(onReady);

function onReady() {
  console.log("ready!");
  $(".submit-button").on("click", addItem);
}

function addItem() {
  console.log("Clicked!");
  console.log($(this));
}
