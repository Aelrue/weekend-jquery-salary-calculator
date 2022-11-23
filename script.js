// start with empty array for employee information
let employees = [];

console.log("script sourced");

$(document).ready(onReady);

// onReady function will run on page load and wait for click events
function onReady() {
  console.log("ready!");
  $("#submitEmployeeButton").on("click", addEmployee);
  $("#employee-table").on("click", ".delete-button", deleteEmployee);
}

function addEmployee() {
  console.log("Clicked!");

  // create an object from form inputs
  let employeeInfo = {
    firstName: $("#firstIn").val(),
    lastName: $("#lastIn").val(),
    identifier: $("#identifierIn").val(),
    title: $("#titleIn").val(),
    annualSalary: $("#salaryIn").val(),
  };

  // push that info into the employees array for storage
  employees.push(employeeInfo);

  // clear input fields for further use
  $("#firstIn").val("");
  $("#lastIn").val("");
  $("#identifierIn").val("");
  $("#titleIn").val("");
  $("#salaryIn").val("");

  //Prior to loop, use .empty to remove repeating content in future loops
  $("#employee-table").empty();

  // loop through array and add info to DOM
  for (employee of employees) {
    $("#employee-table").append(`
    <tr>
      <td>${employee.firstName}</td>
      <td>${employee.lastName}</td>
      <td>${employee.identifier}</td>
      <td>${employee.title}</td>
      <td>${employee.annualSalary}</td>
      <td><button class="delete-button">Delete</button></th>
    </tr>`);
  }
  // on line 40, the loop and append - pull that out into its own function
  // then, call that function on line 40 (instead of all the old code)
  // add line 38 to the new function to empty the dom
  // and then, in our delete function, after we’ve removed the employee from the employees array, we’ll call that NEW loop/append function

  console.log(employees);

  // call calculate function here
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
  $(this).parent().parent().remove();
  // remove $(this) from the employee array
}
