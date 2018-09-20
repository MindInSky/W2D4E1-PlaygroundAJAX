document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadList);

function loadCustomer(e) {
  xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      addCustomer(customer);
    }
  };
  xhr.send();
}

function loadList(e) {
  xhr = new XMLHttpRequest();

  xhr.open("GET", "customerList.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);
      addList(customer);
    }
  };
  xhr.send();
}

function addCustomer(customer) {
  // Get the node where to instert the customer
  const list = document.getElementById("customer-area");
  // Create a row to insert a customer
  const row = document.createElement("tr");
  //insert row
  row.innerHTML = `
  <li>ID: ${customer.id}</li>
  <li>Name: ${customer.firstName} ${customer.lastName}</li>
  <li>Company: ${customer.company}</li>
  <li>Phone: ${customer.phone}</li>`;
  list.appendChild(row);
}

function addList(customers) {
  console.log(customers);
  customers.forEach(function(customers, index) {
    console.log(customers);
    console.log(customers[index]);
    // Get the node where to instert the customer
    const list = document.getElementById("customer-details");
    // Create a row to insert a customer
    const row = document.createElement("tr");

    //insert row
    row.innerHTML = `
  <td>${customers.id}</td>
  <td>${customers.name}</td>
  <td>${customers.company}</td>
  <td>${customers.phone}</td>`;
    list.appendChild(row);
  });
}
