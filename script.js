let employees = [];

console.log("script sourced");

$(document).ready(onReady);

function onReady() {
  console.log("ready!");
  $("#submitEmployeeButton").on("click", addEmployee);
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

  employees.push(employeeInfo);
  $("#firstIn").val("");
  $("#lastIn").val("");
  $("#identifierIn").val("");
  $("#titleIn").val("");
  $("#salaryIn").val("");
  render();
  calculateRemainingBudget();
}

function calculateRemainingBudget() {
  console.log("in calculateRemainingBudget");
  let sum = 0;
  for (let i = 0; i < employees.length; i++) {
    sum += Number(employees[i].annualSalary);
  }
  console.log("Monthly Cost:", sum);

  let el = $("#costOut");
  el.empty();
  el.append(sum);
  if (sum > 20000) {
    $("#costOut").css("background-color", "red");
  }
}

function render() {
  console.log("in render function");
}
