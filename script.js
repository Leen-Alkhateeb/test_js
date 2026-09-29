function Employee(name, email, department) {
  this.name = name;
  this.email = email;
  this.department = department;
  this.salary = Math.floor(Math.random() * 901) + 100;
}

let employees = JSON.parse(localStorage.getItem("employees")) || [];

const form = document.getElementById("employeeForm");
const table = document.getElementById("employeeTable");
const totalSalary = document.getElementById("totalSalary");

function render() {
  table.innerHTML = "";
  let total = 0;

  if (employees.length === 0) {
    table.innerHTML = `<tr><td colspan="4" style="text-align:center;color:#888">No employees yet</td></tr>`;
  }

  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    table.innerHTML += `
      <tr>
        <td>${emp.name}</td>
        <td>${emp.email}</td>
        <td>${emp.department}</td>
        <td>$${emp.salary}</td>
      </tr>`;
    total += emp.salary;
  }

  totalSalary.textContent = total;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;

  employees.push(new Employee(name, email, department));

  localStorage.setItem("employees", JSON.stringify(employees));
  render();
  form.reset();
});

render();