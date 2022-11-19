let employees = [];

console.log("script sourced");

$(document).ready(onReady);

function onReady() {
  console.log("ready!");
  $(".submit-button").on("click", addEmployee);
}

function addEmployee() {
  console.log("Clicked!");

  let employeeInfo = {
    firstName: $("#firstIn").val(),
    lastName: $("#lastIn").val(),
    identifier: $("#identifierIn").val(),
    title: $("#titleIn").val(),
    annualSalary: $("#salaryIn").val(),
  };

  render();
}

function render() {
  console.log("in render function");
}
