// empty array for employee information
let employees = [];

console.log("script sourced");

$(document).ready(onReady);

function onReady() {
  console.log("ready!");
  $("#submitEmployeeButton").on("click", addEmployee);
  $(".delete").on("click", deleteEmployee);
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

  $("#employee-table").empty();
  for (employee of employees) {
    $("#employee-table").append(`
    <tr>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.identifier}</td>
      <td>${employee.title}</td>
      <td>${employee.annualSalary}</td>
      <th><button id="delete-button">Delete</button></th>
    </tr>`);
  }

  console.log(employees);
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

function deleteEmployee() {
  console.log("Deleted!");
  $(this).parent().parent().empty();
}
